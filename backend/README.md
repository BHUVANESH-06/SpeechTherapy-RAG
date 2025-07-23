# 🧠 RAG-based Q&A Assistant using LangChain + Ollama + InMemoryVectorStore

This project is a Retrieval-Augmented Generation (RAG) chatbot that answers user questions based on content from local PDF files.

It uses:

- **LangChain** for orchestrating the LLM pipeline
- **Ollama (LLaMA3)** for running a local LLM
- **InMemoryVectorStore** for storing and searching document embeddings
- **PDFs** as the knowledge base



---

## 🚀 How to Run

1. **Install Ollama**  
   [https://ollama.com/download](https://ollama.com/download)
2. **Pull the model**
3. **Install Python dependencies**  
4. **Add your PDF files** to the `data/` folder.
5. **Ingest and embed documents**
6. **Start the app** using the command `python main.py`


---

## ✅ Features

- Retrieve context from local PDFs
- Answer questions using local LLM (LLaMA3)
- Uses LangChain's `InMemoryVectorStore`
- Clean graph-based flow using LangGraph

---

## 🧪 Example

- You: what is speech therapy?
- Bot: Speech and language therapy (SLT) is a health discipline that...

## 🛠 Requirements

See `requirements.txt` for all required libraries.




