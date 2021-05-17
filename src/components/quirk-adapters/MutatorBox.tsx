import React from "react";
import QuirkMutator from "quirks/QuirkMutator";
import RippleCheckbox from "components/primitives/RippleCheckbox";

type OnMutateHandler = (mutator: QuirkMutator) => void;

type MutatorBoxProps = {
    mutator: QuirkMutator;
    onMutate: OnMutateHandler;
};

export default class MutatorBox extends React.Component<MutatorBoxProps> {
    private changeHandler(): void {
        this.props.onMutate(this.props.mutator);
    }

    public render(): JSX.Element {
        return (
            <RippleCheckbox label={this.props.mutator.label} checked={this.props.mutator.active} identifier={this.props.mutator.quirkIdentifier}
                subtitle={this.props.mutator.description} onToggle={() => this.changeHandler()}
            />
        );
    }
}