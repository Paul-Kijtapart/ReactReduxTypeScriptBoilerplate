import {
    combineReducers
} from "redux";

// TodoList
import {
    todoListReducer,
    filterReducer,
    todoInputReducer
} from "./components/TodoList";

export let appReducer = combineReducers({
    todoList: todoListReducer,
    filterText: filterReducer,
    todoInput: todoInputReducer
});