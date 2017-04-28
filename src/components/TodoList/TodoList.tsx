import * as React from "react";

// Components and their interfaces 
import { TodoItem, TodoItemProps } from "./TodoItem";
import { TodoMenu, TodoMenuProps } from "./TodoMenu";

export const TodoList = (props: any) => {
    console.log(props);
    const todoList = props.todoList;

    const todoItems = todoList && todoList.map((
        item: TodoItemProps,
        index: number
    ) => {
        return (
            <TodoItem
                key={index}
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
            <TodoMenu />
            <div className="todoContent">
                {todoItems}
            </div>
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
    toggleTodoItemAction
} from "./action";


/*  Subscribe to Redux State: 
    TodoList chooses which states it is interested in 
*/
const mapStateToProps =
    (state: any) => {
        return {
            todoList: state.todoList,
            filterText: state.filterText
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
            }
        };
    };

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;