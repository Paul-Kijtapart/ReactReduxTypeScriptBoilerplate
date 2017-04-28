import * as React from "react";

// Components
import { 
    TodoList,
    default as VisibleTodoList
} from "../../components/TodoList";

export const Home = (props: any) => {
    return (
        <div className="home">
            <p> Home </p>
            <VisibleTodoList />
        </div>
    );
}; // close Home