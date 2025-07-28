import os
import pickle

pkl_path = os.path.join(os.path.dirname(__file__), "vector_store.pkl")

with open(pkl_path, "rb") as f:
    vector_store = pickle.load(f)
