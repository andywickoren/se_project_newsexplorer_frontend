const baseUrl = "https://newsapi.org/v2/everything";

// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://nomoreparties.co/news/v2/everything"
//     : "https://newsapi.org/v2/everything";

const apiKey = "460e8a428e8641e6b8648d256f9a2375";

function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(new Error(`Error: ${res.status}`));
}

export function getItems(query) {
  // Get today's date and 7 days before
  const currentDate = new Date();
  const fromDate = new Date();
  fromDate.setDate(currentDate.getDate() - 7);

  const url = `${baseUrl}?q=${query}&apiKey=${apiKey}&from=${fromDate.toISOString()}&to=${currentDate.toISOString()}&pageSize=100`;

  return fetch(url).then(checkResponse);
}
