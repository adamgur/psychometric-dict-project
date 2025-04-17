/**
 * StorageManager.js - Handles data loading from JSON files
 * Replacement for localStorage implementation
 */
class StorageManager {
  constructor() {
    // Cache to avoid redundant fetches
    this.cache = {};
    // Base path for JSON files
    this.dataPath = './data/';
  }

  /**
   * Get data from JSON file
   * @param {string} key - The name of the JSON file without extension
   * @returns {Promise<object>} - The parsed JSON data
   */
  async getData(key) {
    // Return cached data if available
    if (this.cache[key]) {
      return this.cache[key];
    }
    
    try {
      // Fetch data from JSON file
      const response = await fetch(`${this.dataPath}${key}.json`);
      
      // Check if fetch was successful
      if (!response.ok) {
        throw new Error(`Failed to load data: ${response.status} ${response.statusText}`);
      }
      
      // Parse JSON response
      const data = await response.json();
      
      // Cache the data for future requests
      this.cache[key] = data;
      
      return data;
    } catch (error) {
      console.error(`Error loading data from ${key}.json:`, error);
      return null;
    }
  }
  
  /**
   * Get specific section of data from a JSON file
   * @param {string} key - The name of the JSON file without extension
   * @param {string} section - The section/property name within the JSON
   * @returns {Promise<any>} - The requested data section
   */
  async getSection(key, section) {
    const data = await this.getData(key);
    
    if (data && data[section]) {
      return data[section];
    }
    
    console.error(`Section '${section}' not found in ${key}.json`);
    return null;
  }
  
  /**
   * Clear the cache for a specific key or all keys
   * @param {string} [key] - Optional key to clear from cache
   */
  clearCache(key = null) {
    if (key) {
      delete this.cache[key];
    } else {
      this.cache = {};
    }
  }
}

// Export a singleton instance
const storageManager = new StorageManager();
export default storageManager;
