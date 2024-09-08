const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const deleteToken = () => {
  localStorage.removeItem("token"); //for logout
};
export { setToken, getToken, deleteToken };
