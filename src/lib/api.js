// // src/lib/api.js
// import axios from "axios";

// /**
//  * getIdToken should return a Promise<string|null>
//  * Replace this with your actual auth implementation:
//  * - If you use Firebase client: () => getAuth().currentUser?.getIdToken()
//  * - Or from your AuthContext: () => authState?.token
//  */
// async function getIdToken() {
//   // Example: token stored in localStorage by your login flow
//   const token = localStorage.getItem("idToken");
//   if (token) return token;
//   return null;
// }

// const api = axios.create({
//   baseURL: "/",
//   headers: { "Content-Type": "application/json" },
// });

// // attach token if available
// api.interceptors.request.use(async (config) => {
//   try {
//     const token = await getIdToken();
//     if (token) {
//       config.headers = config.headers || {};
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   } catch {
//     // ignore
//   }
//   return config;
// });

// export default api;

import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000", // backend port
  withCredentials: true,
});

// Attach Firebase ID token
axiosSecure.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access-token"); // Firebase ID token
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle unauthorized globally
axiosSecure.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - login again");
      // optional redirect
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosSecure;
