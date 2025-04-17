# Vocabulary Learning Tool Server

A simple web-based vocabulary learning tool for psychometric exam preparation. The project uses a FastAPI backend (served with Uvicorn) to route two HTML pages, each providing a vocabulary app with pure JavaScript—one for English and one for Hebrew.

## Features
- English-to-Hebrew and Hebrew-to-English vocabulary practice
- Two separate HTML apps: `/english` and `/hebrew` routes
- Users can edit the dictionary directly via the app UI
- All changes are saved to the browser's local storage for persistence
- Pure JavaScript frontends (no frameworks)
- FastAPI backend with Uvicorn
- Ready to run locally

## Project Structure
```
dict-project/
├── server.py                    # FastAPI server routing HTML files
├── vocab-app-html.html          # Hebrew vocabulary app
├── vocab-app-english-html.html  # English vocabulary app
```

## How to Run
1. **Install dependencies:**
   ```bash
   pip install fastapi uvicorn
   ```
2. **Start the server:**
   - Option 1 (recommended):
     ```bash
     python server.py
     ```
   - Option 2:
     ```bash
     uvicorn server:app --reload --port 8001
     ```
3. **Open in your browser:**
   - Hebrew app: [http://127.0.0.1:8001/hebrew](http://127.0.0.1:8001/hebrew)
   - English app: [http://127.0.0.1:8001/english](http://127.0.0.1:8001/english)

## Technologies Used
- [FastAPI](https://fastapi.tiangolo.com/)
- [Uvicorn](https://www.uvicorn.org/)
- Pure JavaScript, HTML, and CSS

## Customization
- All changes to the vocabulary must be made through the app UI; users can add, edit, or remove words, and changes are automatically saved to the browser's local storage.
- Advanced: To change the default vocabulary (the initial set shown on first use), modify the respective HTML files (`vocab-app-html.html` or `vocab-app-english-html.html`).

## License
[MIT](LICENSE) (or specify your own)

## Project Structure
```
dict-project/
├── vocab-app-english-html.html  # Main application file
```

## Customization
- To add or edit vocabulary, modify the `initialVocabData` array inside the `<script type="text/babel">` tag in `vocab-app-english-html.html`.

## Contributing
Pull requests and suggestions are welcome! Please open an issue to discuss your ideas.

## License
[MIT](LICENSE) (or specify your own)
