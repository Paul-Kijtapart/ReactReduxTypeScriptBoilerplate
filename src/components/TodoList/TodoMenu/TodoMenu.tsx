import * as React from "react";

export interface TodoMenuProps {

} // close TodoMenuProops interface

export class TodoMenu extends React.Component<TodoMenuProps, undefined> {
    render() {
        return (
            <div className="todoMenu">
                <p> TodoMenu </p>
            </div>
        )
    } // close render
} // close TodoMenu class
