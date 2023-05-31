export default class LocalStorage {
    static getItem(key: any) {
        if (typeof window !== 'undefined') {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : null;
        }
        return null;
    }
    
    static setItem(key: any, value: any) {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
    }
    
    static removeItem(key: any) {
        if (typeof window !== 'undefined') {
          window.localStorage.removeItem(key);
        }
    }

    static clearItems() {
        if (typeof window !== 'undefined') {
            window.localStorage.clear();
        }
    }

}