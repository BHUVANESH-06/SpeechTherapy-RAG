from langchain_community.chat_models import ChatOllama
from langchain_groq.chat_models import ChatGroq
from dotenv import load_dotenv
import os
load_dotenv()
def get_llm():
    return ChatGroq(model="llama3-8b-8192", api_key=os.getenv("API_KEY"), temperature=0.1, max_tokens=2048)
