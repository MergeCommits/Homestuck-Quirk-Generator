import React from "react";
import QuirkMutator from "quirks/QuirkMutator";

type OnMutateHandler = (mutator: QuirkMutator) => void;

type MutatorBoxProps = {
    mutator: QuirkMutator;
    onMutate: OnMutateHandler;
};

export default class MutatorBox extends React.Component<MutatorBoxProps> {
    private val = false;

    private changeHandler(): void {
        this.props.onMutate(this.props.mutator);
    }

    public render(): JSX.Element {
        return (
            <div>
                <label>{this.props.mutator.label} <input type="checkbox" checked={this.props.mutator.active} onChange={() => this.changeHandler()} /></label>
            </div>
        );
    }
}