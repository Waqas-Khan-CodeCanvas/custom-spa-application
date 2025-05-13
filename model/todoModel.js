const baseUrl = "../database/users.json";

async function fetchAndStoreUsers() {
  const response = await fetch(baseUrl);
  const users = await response.json();
  localStorage.setItem("users", JSON.stringify(users));
  return users
}

function addUserAccount(users){
  
}
export {fetchAndStoreUsers,addUserAccount}

// // const baseUrl = "http://localhost:3000/users";

// // Create a new user
// async function createUser(newUser) {
//   const response = await fetch(baseUrl, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newUser),
//   });
//   return response.ok ? await response.json() : null;
// }
// createUser().then((result)=> console.log(result))
// // Read a user by ID
// async function readUser(userId) {
//   const response = await fetch(`${baseUrl}/${userId}`);
//   return response.ok ? await response.json() : null;
// }

// // Update a user by ID
// async function updateUser(userId, updatedData) {
//   const response = await fetch(`${baseUrl}/${userId}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(updatedData),
//   });
//   return response.ok ? await response.json() : null;
// }

// // Delete a user by ID
// async function deleteUser(userId) {
//   const response = await fetch(`${baseUrl}/${userId}`, {
//     method: "DELETE",
//   });
//   return response.ok;
// }

// // module.exports = {
// //   createUser,
// //   readUser,
// //   updateUser,
// //   deleteUser,
// // };



// import { promises } from "";
// import { join } from "path";

// async function addUser(newUser) {
//   const filePath = join(process.cwd(), "database", "users.json");

//   try {
//     // Read the existing users
//     const data = await promises.readFile(filePath, "utf-8");
//     const users = JSON.parse(data);

//     // Add the new user
//     users.push(newUser);

//     // Write the updated users back to the file
//     await promises.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");
//     console.log("User added successfully!");
//   } catch (error) {
//     console.error("Error adding user:", error);
//   }
// }

// // Example usage
// const newUser = {
//   id: 11,
//   // eslint-disable-next-line
//   name: "waqas Khan",
//   email: "ali@example.com",
//   password: "ali123",
//   todos: ["Buy milk", "Complete assignment"],
// };

// addUser(newUser);


// fetchAndStoreUsers().then((result)=>{
//   const root = document.getElementById("root");
//   const ul = document.createElement("ul")
//   result.forEach(element => {
//     for (const key in element) {
//       const li = document.createElement("li")
//       li.innerHTML  = element[key] ; 
//       ul.appendChild(li)
//     }
//     ul.innerHTML += "<br>"
//   });
//   root.append(ul)
//   console.log(ul);
// })