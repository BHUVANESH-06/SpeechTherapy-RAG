# 🧠 SpeechTherapy-RAG

A Retrieval Augmented Generation bot tailored for student speech therapists to clear their doubts and help them learn more.

---

## 🏗️ Project Structure

- `backend/`: RAG-based chatbot backend (LangChain, Ollama, PDF ingestion)
- `frontend/`: Expo-based mobile app

---

## 🚀 Backend – RAG-based Q&A Assistant

This project is a Retrieval-Augmented Generation (RAG) chatbot that answers user questions based on content from local PDF files.

**Core Technologies:**
- **LangChain** for orchestrating the LLM pipeline
- **Ollama (LLaMA3)** for running a local LLM
- **InMemoryVectorStore** for storing and searching document embeddings
- **PDFs** as the knowledge base

### How to Run

1. **Install Ollama**  
   [https://ollama.com/download](https://ollama.com/download)
2. **Pull the model**
3. **Install Python dependencies**
4. **Add your PDF files** to the `data/` folder.
5. **Ingest and embed documents**
6. **Start the app** using the command:

   ```bash
   python main.py
   ```

#### Features

- Retrieve context from local PDFs
- Answer questions using local LLM (LLaMA3)
- Uses LangChain's `InMemoryVectorStore`
- Clean graph-based flow using LangGraph

#### Example

- You: what is speech therapy?
- Bot: Speech and language therapy (SLT) is a health discipline that...

#### Requirements

See `backend/requirements.txt` for all required libraries.

---

## 📱 Frontend – Expo App

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

### Get Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the app**
   ```bash
   npx expo start
   ```
   This opens options for:
   - [development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go)

Start developing by editing files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

### Reset to Blank Project

```bash
npm run reset-project
```
This moves the starter code to the **app-example** directory and creates a blank **app** directory.

### Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo tutorial](https://docs.expo.dev/tutorial/introduction/)

### Community

- [Expo on GitHub](https://github.com/expo/expo)
- [Discord community](https://chat.expo.dev)

---

## 📝 Credits

- Backend: Python, LangChain, Ollama, InMemoryVectorStore
- Frontend: TypeScript, Expo, React Native
