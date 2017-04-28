import {
    combineReducers
} from "redux";

// TodoList
import {
    todoListReducer,
    filterReducer
} from "./components/TodoList";

export let appReducer = combineReducers({
    todoList: todoListReducer,
    filterText: filterReducer
});