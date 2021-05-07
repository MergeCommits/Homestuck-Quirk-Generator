import React from "react";
import QuirkBox from "components/quirk-adapters/QuirkBox";
import Category from "quirks/Category";
import Alternia from "quirks/collections/Alternia";
import Beforus from "quirks/collections/Beforus";
import MutatorBox from "components/quirk-adapters/MutatorBox";
import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

interface JMainStates {
    inputText: string
}

export default class JMain extends React.Component<unknown, JMainStates> {
    private readonly quirkMap: Map<string, Quirk>;
    private readonly quirkMutators: QuirkMutator[];

    private readonly defaultText = "The quick brown fox jumps over the lazy dog. :D";

    public constructor(props: never) {
        super(props);
        this.state = {
            inputText: ""
        };

        this.quirkMap = new Map<string, Quirk>();
        this.quirkMutators = [];
        this.populateQuirks(
            new Alternia()
        );

        this.updateQuirkFields(this.defaultText);
    }

    private populateQuirks(...categories: Category[]) {
        for (const category of categories) {
            for (const [key, quirk] of category.quirks) {
                this.quirkMap.set(key, quirk);
            }
            this.quirkMutators.push(...category.quirkMutators);
        }
    }

    private inputTextHandler(newText: string) {
        this.updateQuirkFields(newText);
    }

    private updateQuirkFields(newText: string) {
        for (const quirk of this.quirkMap.values()) {
            quirk.inputText = newText;
        }
        this.forceUpdate();
    }

    private renderQuirks(): JSX.Element {
        const items = [];
        for (const [key, quirk] of this.quirkMap) {
            items.push(<QuirkBox key={key} quirk={quirk} />);
        }

        return (
            <div>
                {items}
            </div>
        );
    }

    private renderMutators(): JSX.Element {
        const items = [];
        for (const mutator of this.quirkMutators) {
            items.push(<MutatorBox key={mutator.label} mutator={mutator} onMutate={(m) => this.mutatorHandler(m)} />);
        }

        return (
            <div>
                {items}
            </div>
        );
    }

    private mutatorHandler(mutator: QuirkMutator): void {
        mutator.toggle();
        this.forceUpdate();
    }

    public render(): JSX.Element {
        return (
            <div>
                <textarea onChange={event => this.inputTextHandler(event.target.value)} defaultValue={this.defaultText} />
                {this.renderQuirks()}
                {this.renderMutators()}
            </div>
        );
    }
}

// Example usage: <ShoppingList name="Mark" />