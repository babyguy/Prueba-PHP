// --------------variables--------------
let userID;
const users = [];
const countries = [];
const categories = ["cliente", "proovedor", "funcionario interno"];
const userCount = document.getElementById("userCount");
const userTable = document.getElementById("userTable-tbody");

// --------------apis--------------
const userList = "http://127.0.0.1:8000/api/index";
const register = "http://127.0.0.1:8000/api/register";
const updateUser = "http://127.0.0.1:8000/api/updateUser/";
const deleteUser = "http://127.0.0.1:8000/api/deleteUser/";
const getCountries = "https://restcountries.com/v3.1/subregion/south%20america";

// count users
function count_users() {
  fetch(userList)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        users.push(element);
      });
      console.log(users);
      console.log(users.length);
      userCount.innerHTML = `${users.length}`;
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// view users
function list_users() {
  fetch(userList)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        console.log(element.category);
        users.push(element);
      });

      for (let x = 0; x < users.length; x++) {
        if (users[x].category == 1) {
          userTable.innerHTML += `
          <tr>
            <th scope="row">${users[x].id}</th>
            <td scope="col">${users[x].name}</td>
            <td scope="col">${users[x].lastname}</td>
            <td scope="col">${users[x].cc}</td>
            <td scope="col">${users[x].email}</td>
            <td scope="col">${users[x].country}</td>
            <td scope="col">${users[x].address}</td>
            <td scope="col">${users[x].phone}</td>
            <td scope="col">${categories[0]}</td>
            <td class="d-flex">  
              <a class="btn btn-danger me-1" id="btn-delete" onclick=" delete_user(${users[x].id},event)"><i class="bi-trash" ></i></a>
              <a class="btn btn-danger me-1" id="btn-edit"><i class="bi-pen" onclick=""></i></a>
            </td>
         </tr>
          `;
        } else if (users[x].category == 2) {
          userTable.innerHTML += `
          <tr>
            <th scope="row">${users[x].id}</th>
            <td scope="col">${users[x].name}</td>
            <td scope="col">${users[x].lastname}</td>
            <td scope="col">${users[x].cc}</td>
            <td scope="col">${users[x].email}</td>
            <td scope="col">${users[x].country}</td>
            <td scope="col">${users[x].address}</td>
            <td scope="col">${users[x].phone}</td>
            <td scope="col">${categories[1]}</td>
            <td class="d-flex">  
              <a class="btn btn-danger me-1" id="btn-delete" onclick=" delete_user(${users[x].id},event)"><i class="bi-trash" ></i></a>
              <a class="btn btn-danger me-1" id="btn-edit"><i class="bi-pen" onclick=""></i></a>
            </td>
          </tr>
          `;
        } else if (users[x].category == 3) {
          userTable.innerHTML += `
          <tr>
            <th scope="row">${users[x].id}</th>
            <td scope="col">${users[x].name}</td>
            <td scope="col">${users[x].lastname}</td>
            <td scope="col">${users[x].cc}</td>
            <td scope="col">${users[x].email}</td>
            <td scope="col">${users[x].country}</td>
            <td scope="col">${users[x].address}</td>
            <td scope="col">${users[x].phone}</td>
            <td scope="col">${categories[2]}</td>
            <td class="d-flex">  
              <a class="btn btn-danger me-1" id="btn-delete" onclick=" delete_user(${users[x].id},event)"><i class="bi-trash" ></i></a>
              <button class="btn btn-danger me-1" id="btn-edit" onclick="" value=""><i class="bi-pen" ></i></button>
            </td>
          </tr>
          `;
        }
      }

      console.log(users);
    })
    .catch((error) => {
      console.error(error);
    });
}

// user delete
function delete_user(id, e) {
  console.log(id);

  fetch(deleteUser + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al hacer la petición");
      }
      let row =e.target.parentNode.parentNode
      row.remove();
      console.log("Petición DELETE exitosa");
    })
    .catch((error) => {
      console.error(error);
    });
}

// list countries
function list_countries() {
  fetch(getCountries)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        countries.push(element.name.common);
      });
      console.log(countries.sort());
    })
    .catch((error) => {
      console.error(error);
    });
}
