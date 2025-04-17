from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import uvicorn
import os

app = FastAPI()

@app.get("/hebrew")
def serve_hebrew():
    return FileResponse("vocab-app-html.html")

@app.get("/english")
def serve_english():
    return FileResponse("vocab-app-english-html.html")

# from fastapi import HTTPException

# @app.get("/api/vocab/{lang}")
# def get_vocab(lang: str):
#     if lang == "hebrew":
#         file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "vocab-data-json.json")
#     elif lang == "english":
#         file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "vocab-data-english.json")
#     else:
#         raise HTTPException(status_code=404, detail="Language not found")
#     if not os.path.exists(file_path):
#         raise HTTPException(status_code=404, detail="File not found")
#     return FileResponse(file_path, media_type="application/json")

if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=8001, reload=True)
