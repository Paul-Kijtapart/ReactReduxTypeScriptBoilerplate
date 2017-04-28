/*
 * action types
 */
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = "DELETE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

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
export const addTodoItemAction =
    (description: string) => {
        return {
            type: ADD_TODO,
            payload: description
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