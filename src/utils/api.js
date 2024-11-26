// utils/api.js

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchData(endpoint) {
    const url = `${BASE_URL}${endpoint}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return { data, error: false };
        } else {
            return { data: null, error: true };
        }
    } catch (err) {
        console.error("Fetch error:", err);
        return { data: null, error: true };
    }
}
