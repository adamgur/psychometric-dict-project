from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import uvicorn
import os
from pathlib import Path

app = FastAPI()

# Mount static directories
# This will allow serving JS and JSON files
app.mount("/js", StaticFiles(directory="js"), name="js")  # serve JS modules
app.mount("/data", StaticFiles(directory="data"), name="data")  # serve JSON data files

@app.get("/hebrew")
def serve_hebrew():
    return FileResponse("vocab-app-html.html")

@app.get("/english")
def serve_english():
    return FileResponse("vocab-app-english-html.html")

# Optional: API to handle data updates (for future enhancement)
# Uncomment and implement if you want server-side data persistence
"""
from fastapi import Body
from typing import List
import json

@app.post("/api/vocab/{language}")
def update_vocab(language: str, data: List[dict] = Body(...)):
    if language not in ["hebrew", "english"]:
        raise HTTPException(status_code=400, detail="Invalid language")
    
    file_path = f"data/vocab-{language}.json"
    
    try:
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return {"status": "success"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update data: {str(e)}")
"""

# Root path redirects to Hebrew version
@app.get("/")
def root():
    return {"message": "Psychometric Dictionary API", "endpoints": ["/hebrew", "/english", "/data/vocab-hebrew.json", "/data/vocab-english.json"]}

if __name__ == "__main__":
    # Create data directory if it doesn't exist
    Path("data").mkdir(exist_ok=True)
    
    # Create js directory if it doesn't exist
    Path("js").mkdir(exist_ok=True)
    
    # Start the server
    uvicorn.run("server:app", host="127.0.0.1", port=8001, reload=True)