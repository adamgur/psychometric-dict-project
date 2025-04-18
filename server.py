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

# Note: With localStorage implementation, the server-side data API is not needed
# The app now uses localStorage for data persistence
# The JSON files are still served as initial data or for reset functionality

# Root path redirects to Hebrew version
@app.get("/")
def root():
    return {"message": "Psychometric Dictionary API", 
            "endpoints": ["/hebrew", "/english", "/data/vocab-hebrew.json", "/data/vocab-english.json"],
            "note": "This application now uses localStorage for data persistence."}

if __name__ == "__main__":
    # Create data directory if it doesn't exist
    Path("data").mkdir(exist_ok=True)
    
    # Create js directory if it doesn't exist
    Path("js").mkdir(exist_ok=True)
    
    # Start the server
    uvicorn.run("server:app", host="127.0.0.1", port=8001, reload=True)