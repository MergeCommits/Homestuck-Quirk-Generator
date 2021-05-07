import React from "react";
import QuirkBox from "components/quirk-adapters/QuirkBox";
import Category from "quirks/Category";
import Alternia from "quirks/collections/Alternia";
import Beforus from "quirks/collections/Beforus";

interface JMainStates {
    inputText: string
}

export default class JMain extends React.Component<unknown, JMainStates> {
    private readonly categories: Category[];

    public constructor(props: never) {
        super(props);
        this.state = {
            inputText: ""
        };

        this.categories = [
            new Alternia(),
            new Beforus()
        ];
    }

    private updateQuirkText(value: string) {
        this.setState({
            inputText: value
        });
    }

    private renderQuirks(): JSX.Element {
        const items = [];
        for (const category of this.categories) {
            for (const quirk of category.quirkCollection) {
                items.push(<QuirkBox key={quirk.name} quirk={quirk} inputText={this.state.inputText}/>);
            }
        }

        return (
            <div>
                {items}
            </div>
        );
    }

    public render(): JSX.Element {
        return (
            <div>
                <input type="text" name="name" onChange={event => this.updateQuirkText(event.target.value)} />
                {this.renderQuirks()}
            </div>
        );
    }
}

// Example usage: <ShoppingList name="Mark" />