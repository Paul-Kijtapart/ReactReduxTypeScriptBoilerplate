import * as React from "react";

export interface TodoMenuProps {
    addItem: any,
    todoInput: string
    updateInput: any
} // close TodoMenuProops interface

export class TodoMenu extends React.Component<TodoMenuProps, undefined> {
    constructor(props: TodoMenuProps) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
    }

    handleOnSubmit(event: any) {
        const currentInput = this.props.todoInput;
        this.props.addItem(currentInput);
    }

    handleOnInputChange(event: any) {
        this.props.updateInput(event.target.value);
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
                    <input type="text" name="description"
                        onChange={(e) => {
                            this.handleOnInputChange(e);
                        }}
                        value={this.props.todoInput}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    } // close render
} // close TodoMenu class
