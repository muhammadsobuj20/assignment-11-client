// src/lib/api.js
import axios from "axios";

/**
 * getIdToken should return a Promise<string|null>
 * Replace this with your actual auth implementation:
 * - If you use Firebase client: () => getAuth().currentUser?.getIdToken()
 * - Or from your AuthContext: () => authState?.token
 */
async function getIdToken() {
  // Example: token stored in localStorage by your login flow
  const token = localStorage.getItem("idToken");
  if (token) return token;
  return null;
}

const api = axios.create({
  baseURL: "/",
  headers: { "Content-Type": "application/json" },
});

// attach token if available
api.interceptors.request.use(async (config) => {
  try {
    const token = await getIdToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch {
    // ignore
  }
  return config;
});

export default api;
