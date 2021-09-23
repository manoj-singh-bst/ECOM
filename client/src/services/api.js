// import axios from "axios";
// const userUrl = "http://localhost:3001/users";

// export const getUsers = async (id) => {
//   id = id || "";
//   return await axios.get(`${userUrl}/${id}`);
// };

// export const addUser = async (user) => {
//   return await axios.post(`${userUrl}/add`, user);
// };

// export const editUser = async (id, user) => {
//   return await axios.put(`${userUrl}/${id}`, user);
// };

// export const deleteuser = async (id, user) => {
//   return await axios.delete(`${userUrl}/{id}`);
// };
import axios from "axios";

const usersUrl = "http://localhost:3001/users";
// const usersUrl = "http://localhost:8080/users";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${usersUrl}/${id}`);
};

export const addUser = async (user) => {
  return await axios.post(`${usersUrl}/add`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};
