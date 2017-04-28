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
    SET_VISIBILITY_FILTER,
    INPUT_CHANGE
} from "./action";

const todo =
    (
        state = {},
        action: any
    ) => {
        let payload;
        switch (action.type) {
            case ADD_TODO:
                payload = action.payload;
                return {
                    id: payload.id,
                    detail: payload.detail,
                    completed: false
                }
            case TOGGLE_TODO:
                console.log("Toggle");
                break;
        }
        return state;
    };

export const todoListReducer: Reducer<any> =
    (
        state: Array<any> = [],
        action: any
    ) => {
        switch (action.type) {
            case ADD_TODO:
                console.log(ADD_TODO);
                return [
                    ...state,
                    todo(undefined, action)
                ];
            case DELETE_TODO:
                console.log(DELETE_TODO);
                break;
            case TOGGLE_TODO:
                console.log(TOGGLE_TODO);
                return state.map(t =>
                    todo(t, action)
                )
        }
        return state;
    }; // close addTodoItemReducer

export const todoInputReducer: Reducer<any> =
    (
        state: string = "Description...",
        action: any
    ) => {
        switch (action.type) {
            case INPUT_CHANGE:
                console.log(INPUT_CHANGE);
                return action.payload
        }
        return state;
    };

export const filterReducer: Reducer<any> =
    (
        state: string = SHOW_ALL,
        action: any
    ) => {
        switch (action.type) {
            case SET_VISIBILITY_FILTER:
                console.log(SET_VISIBILITY_FILTER);
                return action.payload;
        }
        return state;
    }; // close filterReducer