// dataManager.js - Handles vocabulary data operations for the app

const DATA_FILE = 'vocab-english.json';
const DATA_PATH = '/data/';

const dataManager = {
  async fetchVocabData() {
    const response = await fetch(`${DATA_PATH}${DATA_FILE}`);
    if (!response.ok) {
      throw new Error('Failed to load vocabulary data');
    }
    return await response.json();
  },

  async saveVocabData(data) {
    // Not implemented: saving to file on the client is not possible without backend API
    // This is a placeholder for future server-side implementation
    return Promise.resolve();
  },

  exportData(data) {
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = DATA_FILE;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  },

  importData(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = event => {
        try {
          const json = JSON.parse(event.target.result);
          resolve(json);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }
};

export default dataManager;
