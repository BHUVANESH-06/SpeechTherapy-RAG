
from llm.llm_setup import get_llm

def generate_response(user_input, docs, memory):
    llm = get_llm()

    context = "\n\n".join([doc.page_content for doc in docs]) if docs else "No relevant context found."
    print(f"[GENERATE NODE] Context:\n{context[:300]}")
    prompt = f"""You are a helpful speech therapy assistant.

            Context:
            {context}

            Question: {user_input}
            Answer:"""
    print(f"[PROMPT SENT TO LLM]\n{prompt}")
    response = llm.invoke(prompt)
    return response.content if hasattr(response, 'content') else str(response)
