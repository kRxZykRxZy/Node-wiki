let currentPage = 1;
const limit = 5;

async function loadTopics(page) {
  const data = await fetchTopics(page, limit);
  const container = document.getElementById("topics-container");

  data.topics.forEach(topic => {
    const div = document.createElement("div");
    div.className = "topic";
    div.innerHTML = `<a href="${topic.title}.html">${topic.title}</a>`;
    container.appendChild(div);
  });

  if ((page * limit) >= data.total) {
    document.getElementById("load-more").style.display = "none";
  }
}

document.getElementById("load-more").addEventListener("click", () => {
  currentPage++;
  loadTopics(currentPage);
});

loadTopics(currentPage);
