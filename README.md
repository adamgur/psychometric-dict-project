# Psychometric Dictionary Project

A vocabulary learning tool for psychometric exam preparation with customizable learning levels. This project uses localStorage for client-side data persistence and now includes a feature to study words based on your knowledge level.

## New Feature: Learning by Level
The application now includes an enhanced flashcard mode that lets you customize your learning experience:
- Choose which word types to include in your random learning sessions:
  - Words you don't know (X)
  - Words you're uncertain about (?)
  - Words you already know (✓)
  - Words you haven't marked yet
- Study more effectively by focusing on the words that need the most attention
- Gradually increase difficulty by adding known words to your review sessions

## Features
- English-to-Hebrew and Hebrew-to-English vocabulary practice
- Two separate HTML apps: Hebrew and English
- Customizable learning by level in flashcard mode
- Users can edit the dictionary via the app UI
- All changes are saved automatically to localStorage in your browser
- Changes can be exported as JSON files
- Changes persist between sessions until you clear your browser data
- Pure JavaScript frontends with React
- FastAPI backend with Uvicorn
- Ready to run locally

## Project Structure
```
psychometric-dict-project/
├── server.py                    # FastAPI server routing HTML files and JSON data
├── vocab-app-html.html          # Hebrew vocabulary app
├── vocab-app-english-html.html  # English vocabulary app
├── data/                        # JSON data files (initial data)
│   ├── vocab-hebrew.json        # Hebrew vocabulary initial data
│   └── vocab-english.json       # English vocabulary initial data
├── js/                          # JavaScript modules (optional)
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
   - Copy JSON files to the `data` directory
   - Place HTML files in the root directory

4. **Start the server:**
   ```bash
   python server.py
   ```

5. **Open in your browser:**
   - Hebrew app: [http://127.0.0.1:8001/hebrew](http://127.0.0.1:8001/hebrew)
   - English app: [http://127.0.0.1:8001/english](http://127.0.0.1:8001/english)

## How to Use the New Learning by Level Feature

1. Click on the "מצב למידה אקראי" (Random Learning Mode) button
2. In the popup dialog, select which types of words you want to include:
   - Words you don't know (marked with X)
   - Words you're uncertain about (marked with ?)
   - Words you already know (marked with ✓)
   - Words you haven't marked yet
3. Click "התחל למידה" (Start Learning) to begin the flashcard session
4. The system will randomly select words from the categories you chose
5. After seeing each word, mark it as known, unknown, or uncertain

## How it Works

### Data Storage
The application uses browser localStorage for data persistence:
1. On first load, the vocabulary data is loaded from JSON files in the `data` directory
2. All changes are automatically saved to localStorage
3. Data persists between sessions until you clear your browser data or manually reset
4. Each language has its own localStorage key (vocab-hebrew-data and vocab-english-data)
5. You can still export your data as JSON files for backup or sharing

### Server
The FastAPI server:
1. Serves the HTML files
2. Mounts the `js` and `data` directories as static files
3. Provides routes for each app

### User Interface
The user interface allows you to:
- Search and filter vocabulary
- Add, edit and remove words
- Mark words as known, unknown, or uncertain
- Use flashcard mode for learning with customizable learning levels
- Export and import data
- Reset data to the initial state

### Learning by Level Implementation
The learning by level feature works by:
1. Storing user preferences for which word types to include (known, unknown, uncertain, unmarked)
2. Filtering the words based on these preferences before selecting random words for flashcards
3. Allowing users to customize their learning experience based on their current knowledge level
4. Making vocabulary review more efficient by targeting specific sets of words

## Data Persistence
This project uses localStorage for data persistence. The main benefits are:

1. **Automatic saving**: All changes are saved automatically to your browser's localStorage
2. **Offline support**: The app works completely offline after initial loading
3. **Session persistence**: Your data persists between browser sessions
4. **No server-side storage needed**: Simplifies the architecture
5. **Privacy**: Your vocabulary data stays in your browser

## Customization
To customize the vocabulary data, you can either:
1. Edit the JSON files in the `data` directory for initial data
2. Use the app to add, edit, or remove words, which will be saved to localStorage
3. Export your customized data as JSON files

## Notes
- Clearing browser data will delete your vocabulary progress
- Use the export feature regularly to back up your data
- Each browser/device will have its own separate localStorage data
- The localStorage storage limit is typically around 5MB per domain, which is more than enough for vocabulary lists

## Troubleshooting
- If you experience issues with data persistence, check that:
  - Your browser supports localStorage (all modern browsers do)
  - You have not disabled localStorage in your browser settings
  - You are not in private/incognito browsing mode (localStorage may not persist)
- If you need to clear your data and start fresh, use the "Reset Data" button in the app
- If no words appear in the flashcard mode, ensure you've selected at least one word category in the level selection dialog