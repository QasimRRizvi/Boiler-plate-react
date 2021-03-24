export function isJSON(s: any) {
  try {
    JSON.parse(s);
    return true;
  } catch (e) {
    return false;
  }
}
export function getStorageItem(key: string) {
  const storageItem = localStorage.getItem(key) || "";
  const value = isJSON(storageItem) ? JSON.parse(storageItem) : storageItem;
  return value || null;
}
export function setStorageItem(key: string, value: any) {
  return localStorage && localStorage.setItem(key, JSON.stringify(value));
}

export function removeStorageItem(key: string) {
  if (localStorage) {
    localStorage.removeItem(key);
  }
}
