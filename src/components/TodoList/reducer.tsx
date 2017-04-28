import {
    Reducer,
    Action
} from "redux";

// Filter values
import {
    VisibilityFilters
} from './action';
const { SHOW_ALL } = VisibilityFilters;

// action types
import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from "./action";

export const todoListReducer: Reducer<any> =
    (
        state: Array<any> = [],
        action: Action
    ) => {
        switch (action.type) {
            case ADD_TODO:
                console.log(ADD_TODO);
                break;
            case DELETE_TODO:
                console.log(DELETE_TODO);
                break;
            case TOGGLE_TODO:
                console.log(TOGGLE_TODO);
                break;
        }
        return state;
    }; // close addTodoItemReducer

export const filterReducer: Reducer<any> =
    (
        state: string = SHOW_ALL,
        action: Action
    ) => {
        switch (action.type) {
            case SET_VISIBILITY_FILTER:
                console.log(SET_VISIBILITY_FILTER);
                break
        }
        return state;
    }; // close filterReducer