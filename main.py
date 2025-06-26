from graph.build_graph import graph
from context_manager.memory import memory

print("TherapyBot is ready! Ask your therapy questions:\n")

while True:
    try:
        query = input("You: ")
        if query.lower() in ["exit", "quit"]:
            break
        memory_vars = memory.load_memory_variables({})
        result = graph.invoke({
          "input": query,
          "memory": memory_vars,
          "docs": [],     
          "output": ""   
      })
        print("Bot:", result.get("output", "[No response]"))
    except KeyboardInterrupt:
        break