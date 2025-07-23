import  { useColorScheme as _useColorScheme} from 'react-native';

const lightColors = {
  background: "#FFFFFF",
  inputBar: "#F2F2F2",
  inputBg: "#E0E0E0",
  text: "#000000",
  botBubble: "#E6E6E6",
  userBubble: "#ADD8E6",
  border: "#CCC",
};

const darkColors = {
  background: "#121212",
  inputBar: "#1E1E1E",
  inputBg: "#2A2A2A",
  text: "#FFFFFF",
  botBubble: "#1E1E1E",
  userBubble: "#3D9DF6",
  border: "#333",
};

export function useColorScheme() {
  const scheme = _useColorScheme();
  return scheme === 'dark' ? darkColors : lightColors;
}
