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

const getItemIndex = (A: Array<any>, id: number) => {
    return A.findIndex(item => item.id === id);
};

export const todoListReducer: Reducer<any> =
    (
        state: Array<any> = [],
        action: any
    ) => {

        let newState = state.slice();
        let payload = action.payload;
        let targetIndex;

        switch (action.type) {
            case ADD_TODO:
                console.log(ADD_TODO);
                newState.push({
                    id: payload.id,
                    detail: payload.detail,
                    completed: false
                });
                return newState;
            case DELETE_TODO:
                console.log(DELETE_TODO);
                targetIndex = getItemIndex(newState, payload);
                if (targetIndex === -1) {
                    break;
                }
                newState.splice(targetIndex, 1);
                return newState;
            case TOGGLE_TODO:
                console.log(TOGGLE_TODO);
                targetIndex = getItemIndex(newState, payload);
                if (targetIndex === -1) {
                    break;
                }
                newState[targetIndex].completed = !newState[targetIndex].completed;
                return newState;
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