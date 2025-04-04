const API_URL = "https://thejsurlback.onrender.com";

// Fetch all forum topics
async function fetchTopics(page = 1, limit = 5) {
  const res = await fetch(`${API_URL}/forum?page=${page}&limit=${limit}`);
  return res.json();
}

// Create a new forum post
async function createPost({ title, content }) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ title, content })
  });
  return res.json();
}
