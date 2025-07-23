from ingestion.ingest import vector_store 
from langchain.embeddings import OpenAIEmbeddings

def retrieve_docs(query):
    db = vector_store.similarity_search(query)
    print("Retrieved Embeddings",db)
    return db
