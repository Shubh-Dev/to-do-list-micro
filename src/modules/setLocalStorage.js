const setLocalStorage = (todoItems) => {
  localStorage.setItem('Todos', JSON.stringify(todoItems));
};

export default setLocalStorage;