# Psychometric Dictionary Project

A vocabulary learning tool for psychometric exam preparation. This project has been migrated from using localStorage to using JSON files for data storage.

## Features
- English-to-Hebrew and Hebrew-to-English vocabulary practice
- Two separate HTML apps: Hebrew and English
- Users can edit the dictionary via the app UI
- All changes can be exported as JSON files
- Pure JavaScript frontends with React
- FastAPI backend with Uvicorn
- Ready to run locally

## Project Structure
```
psychometric-dict-project/
├── server.py                    # FastAPI server routing HTML files and serving static files
├── vocab-app-html.html          # Hebrew vocabulary app
├── vocab-app-english-html.html  # English vocabulary app
├── data/                        # JSON data files
│   ├── hebrew-json.json         # Hebrew vocabulary data
│   └── vocab-english.json       # English vocabulary data
├── js/                          # JavaScript modules
│   └── dataManager.js           # Module for handling JSON data
```

## How to Run
1. **Install dependencies:**
   ```bash
   pip install fastapi uvicorn
   ```

2. **Make sure directories exist:**
   Create `data` and `js` directories if they don't exist:
   ```bash
   mkdir -p data js
   ```

3. **Copy files to the right locations:**
   - Place `dataManager.js` in the `js/` directory
   - Place `vocab-app-html.html` and `vocab-app-english-html.html` in the project root
   - Place `hebrew-json.json` and `vocab-english.json` in the `data/` directory

4. **Start the server:**
   ```bash
   python server.py
   ```

5. **Open in your browser:**
   - Hebrew app: [http://127.0.0.1:8001/hebrew](http://127.0.0.1:8001/hebrew)
   - English app: [http://127.0.0.1:8001/english](http://127.0.0.1:8001/english)

## How it Works

### Data Storage
Instead of storing data in localStorage, the application now:
1. Loads vocabulary data from JSON files in the `data` directory
2. Keeps a cache of the data in memory for performance
3. Provides export functionality to save changes as JSON files

### Server
The FastAPI server:
1. Serves the HTML files
2. Mounts the `js` and `data` directories as static files
3. Provides routes for each app

### User Interface
The user interface remains largely the same:
- Search and filter vocabulary
- Add, edit and remove words
- Mark words as known, unknown, or uncertain
- Use flashcard mode for learning
- Export and import data

## Data Migration
This project has been migrated from using localStorage to using JSON files for data storage. The main changes are:

1. Added a `dataManager.js` module that handles:
   - Loading data from JSON files
   - Caching data in memory
   - Exporting data to JSON files

2. Modified HTML files to:
   - Remove embedded initial data
   - Use the dataManager module
   - Add loading and error states

3. Moved vocabulary data to external JSON files:
   - `hebrew-json.json`
   - `vocab-english.json`

## Customization
To customize the vocabulary data, you can either:
1. Edit the JSON files directly
2. Use the app to add, edit, or remove words, and then export the data

## Notes
- The application will still work offline after initial loading
- Changes are cached in memory but need to be exported to persist across sessions
- For permanent server-side storage, you would need to implement the server-side storage API (commented out in server.py)