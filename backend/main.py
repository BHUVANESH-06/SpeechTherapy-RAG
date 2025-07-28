from graph.build_graph import graph
from context_manager.memory import memory
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    type: str
    text: str

class ChatRequest(BaseModel):
    query: str
    chat_history: List[Message]

print("TherapyBot is ready! Ask your therapy questions:\n")

@app.post("/chat", response_model=str)
def chat(data: ChatRequest):
    query = data.query.strip()
    history = [
        {"type": msg.type, "content": msg.text} for msg in data.chat_history if msg.text.strip()
    ]
    print(f"[USER INPUT] {query}")
    try:
        if query.lower() in ["exit", "quit"]:
            return "Goodbye!"
        memory_vars = {
            "chat_history": history
        }
        result = graph.invoke({
            "input": query,
            "memory": memory_vars,
            "docs": [],
            "output": ""
        })
        bot_reply = result["output"]
        return bot_reply
    except KeyboardInterrupt:
        pass
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, debug=True)