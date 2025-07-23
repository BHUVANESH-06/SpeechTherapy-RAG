from langgraph.graph import StateGraph, END, START
from graph.nodes.retriever import retrieve_docs
from graph.generate import generate_response
from typing import TypedDict, List
from langchain_core.messages import BaseMessage

class GraphState(TypedDict):
    input: str
    memory: dict
    docs: List
    output: str
    
def retrieve_node(state: GraphState)->GraphState:
    docs = retrieve_docs(state["input"])
    
    print(f"[RETRIEVE NODE] Retrieved {len(docs)} docs for input: {state['input']}")
    state["docs"] = docs
    return state

def generate_node(state: GraphState) -> GraphState:
    response = generate_response(state["input"], state["docs"], state["memory"])
    state["output"] = response
    return state




builder = StateGraph(GraphState)

builder.add_node("retrieve", retrieve_node)
builder.add_node("generate", generate_node)

builder.set_entry_point("retrieve")
builder.add_edge("retrieve", "generate")
builder.set_finish_point("generate")

graph = builder.compile()