import * as React from "react";

export interface TodoMenuProps {

} // close TodoMenuProops interface

export class TodoMenu extends React.Component<TodoMenuProps, undefined> {

    handleOnSubmit(event: any) {
        // TODO: update State's todoList
    }

    render() {
        return (
            <div className="todoMenu">
                <p> TodoMenu </p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.handleOnSubmit(e);
                    }}
                >
                <input type="text" name="description" placeholder="Description..."/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    } // close render
} // close TodoMenu class
