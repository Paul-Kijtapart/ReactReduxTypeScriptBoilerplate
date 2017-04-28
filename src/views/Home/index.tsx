import * as React from "react";

// Components
import { 
    TodoList,
    default as VisibleTodoList
} from "../../components/TodoList";

export const Home = (props: any) => {
    console.log(props);
    return (
        <div className="home">
            <p> Home </p>
            <VisibleTodoList />
        </div>
    );
}; // close Home