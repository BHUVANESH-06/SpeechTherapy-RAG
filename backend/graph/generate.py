
from llm.llm_setup import get_llm

def generate_response(user_input, docs, memory):
    llm = get_llm()     
    history = memory.get("chat_history", [])
    history_str = ""
    for msg in history:
        if hasattr(msg, 'content'):
                if msg.type == "user":
                        history_str += f"User: {msg.content}\n"
                elif msg.type == "bot":
                        history_str += f"Bot: {msg.content}\n"
    context = "\n\n".join([doc.page_content for doc in docs]) if docs else "No relevant context found."
    print(f"[GENERATE NODE] Context:\n{context[:300]}")
    prompt = f"""You are a helpful speech therapy assistant.
            Conversation history:
            {history_str}    
            Context:
            {context}

            Question: {user_input}
            Answer:"""
    print(f"[PROMPT SENT TO LLM]\n{prompt}")
    response = llm.invoke(prompt)
    content = response.content if hasattr(response, 'content') else str(response)
    clean_content = ' '.join(content.split())
    return clean_content
