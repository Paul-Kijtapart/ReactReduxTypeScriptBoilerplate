/*
 * action types
 */
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = "DELETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const INPUT_CHANGE = "INPUT_CHANGE";

/*
 * other constants
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
let nextTodoId = 0;
export const addTodoItemAction =
    (description: string) => {
        return {
            type: ADD_TODO,
            payload: {
                id: nextTodoId++,
                detail: description,
                completed: false
            }
        };
    }; // close addTodoItemAction

export const deleteTodoItemAction =
    (id: number) => {
        return {
            type: DELETE_TODO,
            payload: id
        };
    }; // close deleteTodoItemAction

export const toggleTodoItemAction =
    (id: number) => {
        return {
            type: TOGGLE_TODO,
            payload: id
        };
    };

export const setVisibilityFilter =
    (filter: string) => {
        return {
            type: TOGGLE_TODO,
            payload: filter
        };
    };

export const updateTodoInput =
    (input: string) => {
        return {
            type: INPUT_CHANGE,
            payload: input
        }
    };