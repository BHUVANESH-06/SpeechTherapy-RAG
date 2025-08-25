import os
import pickle
import requests
from dotenv import load_dotenv

load_dotenv()


def load_vector_store():
    url = os.getenv("VECTOR_STORE_URL")

    pkl_path = "/tmp/vector_store.pkl"

    if not os.path.exists(pkl_path):
        print("Downloading vector_store.pkl from Hugging Face...")
        resp = requests.get(url)
        resp.raise_for_status()
        with open(pkl_path, "wb") as f:
            f.write(resp.content)

    with open(pkl_path, "rb") as f:
        vector_store = pickle.load(f)

    return vector_store

vector_store = load_vector_store()
