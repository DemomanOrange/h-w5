const userList = document.getElementById("list");

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const limit = 6;
  for (let i = 0; i < limit; i++) {
    const user = data[i];
    const userElement = document.createElement("div");
    userElement.className = "user";
    userElement.innerHTML = `<p class="user-number"> ${i + 1}</p>
                             <p>Name: ${user.name}</p>
                             <p>Email: ${user.email}</p>
                             <p>Username: ${user.username}</p>
                             <p>Phone: ${user.phone}</p>
                             <p>Website: ${user.website}</p>
                             <p>Company: ${user.company.name}</p>
                             `;
    userList.appendChild(userElement);
  }
};

getUsers();
