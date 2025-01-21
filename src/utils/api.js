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
  const currentDate = new Date();
  const fromDate = new Date();
  fromDate.setDate(currentDate.getDate() - 7);

  const url = `${baseUrl}?q=${query}&apiKey=${apiKey}&from=${fromDate.toISOString()}&to=${currentDate.toISOString()}&pageSize=100`;

  return fetch(url).then(checkResponse);
}

export function simulateApiEmailCheck(email) {
  return new Promise((resolve, reject) => {
    if (email === "email@gmail.com") {
      reject(new Error("This email is not available"));
    } else {
      resolve();
    }
  });
}

export function simulateApiLoginCheck({ email, password }) {
  const mockUser = {
    email: "email@gmail.com",
    username: "testuser",
    password: "password123",
    name: "Irene",
  };

  return new Promise((resolve, reject) => {
    if (email !== mockUser.email) {
      reject(new Error("Invalid email"));
    } else if (password !== mockUser.password) {
      reject(new Error("Invalid password"));
    } else {
      resolve(mockUser);
    }
  });
}
