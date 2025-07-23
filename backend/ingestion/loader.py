from langchain_community.document_loaders import PyPDFLoader
import os

def load_pdfs():
    data_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data")
    docs = []
    for file in os.listdir(data_dir):
        if file.endswith(".pdf"):
            loader = PyPDFLoader(os.path.join(data_dir, file))
            docs.extend(loader.load())
    return docs
