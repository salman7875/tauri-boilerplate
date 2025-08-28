const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api.example.com";

export async function apiFetch(endpoint, options = {}) {
  const uri = `${API_BASE_URL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    method: options.method || "GET",
    headers: { ...defaultHeaders, ...options.header },
    body: options.body ? JSON.stringify(options.body) : undefined,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw {
        status: response.status,
        message: errorBody.message || response.statusText,
      };
    }
  } catch (error) {
    console.error("API Error:", err);
    throw err;
  }
}
