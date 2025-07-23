import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from "react-native";

export default function HomeScreen() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#000000",
    subText: isDark ? "#AAAAAA" : "#444444",
    sectionBg: isDark ? "#1E1E1E" : "#F1F1F1",
    highlight: "#3D9DF6",
  };

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.container}
    >
      <View style={styles.section}>
        <Text style={[styles.title, { color: colors.text }]}>
          Welcome to Speech Therapy Assistant
        </Text>
        <Text style={[styles.subtitle, { color: colors.subText }]}>
          Designed to support therapists and patients with intelligent tools, personalized guidance, and continuous practice.
        </Text>
      </View>

      <View style={[styles.sectionBox, { backgroundColor: colors.sectionBg }]}>
        <Text style={[styles.heading, { color: colors.text }]}>Empower Your Therapy Practice</Text>
        <Text style={[styles.body, { color: colors.subText }]}>
          Instantly access AI-curated suggestions for therapy methods, exercises, and treatment approaches. Focus on care — we handle the rest.
        </Text>
      </View>

      <View style={[styles.sectionBox, { backgroundColor: colors.sectionBg }]}>
        <Text style={[styles.heading, { color: colors.text }]}>Practice with Confidence</Text>
        <Text style={[styles.body, { color: colors.subText }]}>
          Talk to the assistant at your own pace. Receive guidance, encouragement, and tips every step of the way — wherever you are.
        </Text>
      </View>

      <View style={[styles.featuresContainer]}>
        <Text style={[styles.featureHeading, { color: colors.text }]}>
          What Makes Us Special
        </Text>

        <View style={[styles.featureBox, { backgroundColor: colors.sectionBg }]}>
          <Text style={[styles.featureTitle, { color: colors.text }]}>Conversational AI</Text>
          <Text style={[styles.featureText, { color: colors.subText }]}>
            A friendly, smart chat experience that understands your questions and responds with therapeutic insight.
          </Text>
        </View>

        <View style={[styles.featureBox, { backgroundColor: colors.sectionBg }]}>
          <Text style={[styles.featureTitle, { color: colors.text }]}>Progress-Oriented</Text>
          <Text style={[styles.featureText, { color: colors.subText }]}>
            Encourages daily interaction and builds speaking confidence over time — one conversation at a time.
          </Text>
        </View>

        <View style={[styles.featureBox, { backgroundColor: colors.sectionBg }]}>
          <Text style={[styles.featureTitle, { color: colors.text }]}>Powered by RAG</Text>
          <Text style={[styles.featureText, { color: colors.subText }]}>
            Built on Retrieval-Augmented Generation to give you real-time, relevant responses grounded in trusted therapy content.
          </Text>
        </View>
      </View>

      <Text style={[styles.footer, { color: colors.highlight }]}>
        Let’s make speech therapy more accessible, personal, and effective — together.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 40,
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  sectionBox: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
  },
  featuresContainer: {
    marginBottom: 30,
  },
  featureHeading: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  featureBox: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 6,
  },
  featureText: {
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "600",
  },
});
