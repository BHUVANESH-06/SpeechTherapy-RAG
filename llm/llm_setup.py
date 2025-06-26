from langchain_community.chat_models import ChatOllama

def get_llm():
    return ChatOllama(model="llama3", temperature=0.3)
