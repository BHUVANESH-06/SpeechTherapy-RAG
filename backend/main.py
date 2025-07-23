from graph.build_graph import graph
from context_manager.memory import memory
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


print("TherapyBot is ready! Ask your therapy questions:\n")

@app.get("/chat", response_model=str)
def chat(query: str):
    try:
        if query.lower() in ["exit", "quit"]:
            return "Goodbye!"
        memory.chat_memory.add_user_message(query)
        result = graph.invoke({
            "input": query,
            "memory": memory.load_memory_variables({}),
            "docs": [],     
            "output": ""   
        })
        print("Graph memory so far:", memory.chat_memory.messages)
        bot_reply = result["output"]
        memory.chat_memory.add_ai_message(bot_reply)
        return bot_reply
    except KeyboardInterrupt:
        pass
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, debug=True)