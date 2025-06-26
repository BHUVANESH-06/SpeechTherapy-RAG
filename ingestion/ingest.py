from langchain.text_splitter import RecursiveCharacterTextSplitter
from ingestion.loader import load_pdfs
from langchain import hub
from langchain_community.vectorstores import InMemoryVectorStore
from langchain_community.embeddings import HuggingFaceEmbeddings


from dotenv import load_dotenv
load_dotenv()

docs = load_pdfs()

text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
all_splits = text_splitter.split_documents(docs)

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vector_store = InMemoryVectorStore(embeddings)

_ = vector_store.add_documents(documents=all_splits)

