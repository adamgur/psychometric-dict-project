// dataManager.js - Handles vocabulary data operations for the app with localStorage

// Constants for localStorage keys - modify these for different languages if needed
const ENGLISH_STORAGE_KEY = 'vocab-english-data';
const HEBREW_STORAGE_KEY = 'vocab-hebrew-data';

class DataManager {
  constructor(dataFile, storageKey) {
    this.DATA_FILE = dataFile;
    this.DATA_PATH = '/data/';
    this.STORAGE_KEY = storageKey;
  }

  async fetchVocabData() {
    try {
      // First check if we have data in localStorage
      const localData = localStorage.getItem(this.STORAGE_KEY);
      
      if (localData) {
        // If we have local data, use it
        return JSON.parse(localData);
      } else {
        // Otherwise fetch from the JSON file
        const response = await fetch(`${this.DATA_PATH}${this.DATA_FILE}`);
        if (!response.ok) {
          throw new Error('Failed to load vocabulary data');
        }
        const data = await response.json();
        
        // Save the initial data to localStorage
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        
        return data;
      }
    } catch (error) {
      console.error('Error fetching vocabulary data:', error);
      throw error;
    }
  }

  async saveVocabData(data) {
    try {
      // Save the data to localStorage
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
      return Promise.resolve();
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return Promise.reject(error);
    }
  }

  exportData(data) {
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = this.DATA_FILE;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  }

  importData(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = event => {
        try {
          const json = JSON.parse(event.target.result);
          // Save imported data to localStorage
          this.saveVocabData(json)
            .then(() => resolve(json))
            .catch(err => reject(err));
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  clearData() {
    // Remove data from localStorage
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

// Create instances for English and Hebrew apps
const englishDataManager = new DataManager('vocab-english.json', ENGLISH_STORAGE_KEY);
const hebrewDataManager = new DataManager('vocab-hebrew.json', HEBREW_STORAGE_KEY);

export { englishDataManager, hebrewDataManager };
