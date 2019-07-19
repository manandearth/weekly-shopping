//EXAMPLES

export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getRecipes = store =>
  getTodoList(store).map(id => getTodoById(store, id));

//END_EXAMPLES


export const getRecipesState = store => store.recipes;
