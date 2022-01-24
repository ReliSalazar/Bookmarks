import axios from "axios";
const baseUrl = "https://mysterious-reef-48367.herokuapp.com/api/bookmarks";
// const baseUrl = "http://localhost:3001/api/bookmarks";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deleteLink = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const noteService = { getAll, create, update, deleteLink };
export default noteService;
