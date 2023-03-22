const getCurrentUser = () => JSON.parse(localStorage.getItem("currentUser"));

export default getCurrentUser;
