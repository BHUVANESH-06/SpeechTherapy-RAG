import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { useColorScheme } from "../../../hooks/useColorScheme";
import * as Clipboard from "expo-clipboard";
import { Alert } from "react-native";

interface Message {
  type: "user" | "bot";
  text: string;
}

export default function RAGChatScreen() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [speak, setSpeak] = useState(true);
  const colors = useColorScheme();
  const scrollViewRef = useRef<ScrollView>(null);

  const fetchRAGAnswer = async (queryText: string) => {
    setLoading(true);
    const newMessages: Message[] = [
      ...messages,
      { type: "user", text: queryText },
    ];
    setMessages(newMessages);

    try {
      const response = await fetch(
        `http://0.0.0.0:8000/chat?query=${encodeURIComponent(queryText)}`,
        {
          method: "GET",
        }
      );

      console.log("RESPONSE:", response);
      const answerText = await response.text();
      const formattedText = formatLLMResponse(answerText);
      setMessages([...newMessages, { type: "bot", text: formattedText }]);
      if (speak) {
        Speech.stop();
        Speech.speak(formattedText, { language: "en-US" });
      }
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { type: "bot", text: "Error fetching answer." },
      ]);
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  const handleSubmit = () => {
    if (query.trim() && !loading) {
      fetchRAGAnswer(query);
    }
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={[styles.flex, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <SafeAreaView style={styles.flex}>
        <ScrollView
          ref={scrollViewRef}
          style={styles.scroll}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((msg, index) => (
            <TouchableOpacity
              key={index}
              onLongPress={() => {
                Clipboard.setString(msg.text);
                Alert.alert("Copied to clipboard", "Your message has been copied.");
              }}
            >
                <View
                  key={index}
                  style={[
                    styles.messageBubble,
                    {
                    alignSelf: msg.type === "user" ? "flex-end" : "flex-start",
                    backgroundColor:
                      msg.type === "user" ? colors.userBubble : colors.botBubble,
                    borderBottomRightRadius: msg.type === "user" ? 0 : 16,
                    borderBottomLeftRadius: msg.type === "bot" ? 0 : 16,
                  },
                ]}
              >
                <Text style={[styles.messageText, { color: colors.text }]}>
                  {msg.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          {loading && (
            <ActivityIndicator
              size="small"
              color="#3D9DF6"
              style={{ marginVertical: 12 }}
            />
          )}
        </ScrollView>

        <View
          style={[
            styles.inputBar,
            { backgroundColor: colors.inputBar, borderColor: colors.border },
          ]}
        >
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.inputBg, color: colors.text },
            ]}
            placeholder="Ask a speech therapy question..."
            placeholderTextColor={colors.text === "#FFFFFF" ? "#aaa" : "#666"}
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={handleSubmit}
            editable={!loading}
          />
          <TouchableOpacity onPress={handleSubmit} disabled={loading}>
            <Ionicons name="send" size={24} color="#3D9DF6" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (speak) {
                Speech.stop();
              }
              setSpeak(!speak);
            }}
            style={{ marginLeft: 10 }}
          >
            <Ionicons
              name={speak ? "volume-mute" : "volume-high"}
              size={24}
              color="#3D9DF6"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

function formatLLMResponse(text: string): string {
  return text
    .replace(/\r?\n{2,}/g, '\n')                  
    .replace(/\r?\n/g, '\n')                      
    .replace(/\s{2,}/g, ' ')                      

    .replace(/^\s*[*•-]\s*/gm, '• ')              
    .replace(/(\n)?\d+\.\s*/g, '\n\n')            
    .replace(/[*_]{1,2}([a-zA-Z0-9\s'-]+)[*_]{1,2}/g, (_, word) => word.toUpperCase()) 
    .replace(/•\s+([A-Z\s']+):/g, '\n\n**$1**')    
    .replace(/\n{2,}/g, '\n\n')                   
    .trim();
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    paddingVertical: 16
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 25,
    fontSize: 16,
    marginRight: 10,
  },
});
