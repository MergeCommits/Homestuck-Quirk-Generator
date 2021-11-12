export function getLocalStorageBool(key: string): boolean | null {
    const value = localStorage.getItem(key);
    if (value === "true") {
        return true;
    }
    if (value === "false") {
        return false;
    }
    return null;
}

export function setLocalStorageBool(key: string, value: boolean): void {
    localStorage.setItem(key, String(value));
}