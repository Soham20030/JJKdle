

const TOKEN_KEY = "dailyCharacterToken";

export function getTodayCharacterToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getTodayCharacter() {
  const token = getTodayCharacterToken();
  if (!token) return null;

  try {
    const decoded = JSON.parse(atob(token)); // ✅ decode the base64 token
    const now = Date.now();
    const then = new Date(decoded.timestamp).getTime();

    if (now - then > 24 * 60 * 60 * 1000) {
      return null; // token expired
    }

    return decoded.characterId;
  } catch (error) {
    return null;
  }
}

export function setTodayCharacter(characterId) {
  const payload = {
    characterId,
    timestamp: new Date().toISOString(),
  };

  // Encode a fake JWT manually (no need for real signing on client side)
  const token = btoa(JSON.stringify(payload)); // ✅ base64 encode instead of JWT
  localStorage.setItem(TOKEN_KEY, token);
}