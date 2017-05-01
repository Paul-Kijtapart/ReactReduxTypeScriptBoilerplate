import * as React from "react";

// Components and their interfaces 
import { TodoItem, TodoItemProps } from "./TodoItem";
import { TodoMenu, TodoMenuProps } from "./TodoMenu";

// Styles
import "./style.scss";

export const TodoList = (props: any) => {
    const todoList = props.todoList;

    const todoItems = todoList && todoList.map((
        item: TodoItemProps,
        index: number
    ) => {
        return (
            <TodoItem
                key={item.id}
                id={item.id}
                detail={item.detail}
                completed={item.completed}
                deleteItem={props.deleteItem}
                toggleItem={props.toggleItem}
            />
        );
    });

    return (
        <div className="todoList">
            <TodoMenu
                todoInput={props.todoInput}
                addItem={props.addItem}
                updateInput={props.updateInput}
            />
            <ul className="todoContent">
                {todoItems}
            </ul>
            <p>current input: {props.todoInput} </p>
        </div>
    );
}; // close TodoList

import {
    connect
} from "react-redux";

import {
    addTodoItemAction,
    deleteTodoItemAction,
    setVisibilityFilter,
    toggleTodoItemAction,
    updateTodoInput
} from "./action";


/*  Subscribe to Redux State: 
    TodoList chooses which states it is interested in 
*/
const mapStateToProps =
    (state: any) => {
        return {
            todoList: state.todoList,
            filterText: state.filterText,
            todoInput: state.todoInput
        }
    };

/*  Dispatch Redux actions:
    TodoList will notify store  
*/
const mapDispatchToProps =
    (dispatch: any) => {
        return {
            addItem: (description: string) => {
                dispatch(addTodoItemAction(description));
            },
            deleteItem: (id: number) => {
                dispatch(deleteTodoItemAction(id));
            },
            toggleItem: (id: number) => {
                dispatch(toggleTodoItemAction(id));
            },
            setVisibilityFilter: (filter: string) => {
                dispatch(setVisibilityFilter(filter));
            },
            updateInput: (input: string) => {
                dispatch(updateTodoInput(input));
            }
        };
    };

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;