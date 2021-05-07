import React from "react";
import Quirk from "quirks/Quirk";

type TestProps = {
    quirk: Quirk;
    inputText: string;
};

export default class QuirkBox extends React.Component<TestProps> {
    public shouldComponentUpdate(nextProps: TestProps): boolean {
        return (this.props.inputText !== nextProps.inputText);
    }

    // eslint-disable-next-line
    public componentDidUpdate(prevProps: Readonly<TestProps>, prevState: Readonly<{}>, snapshot?: any): void {
        this.props.quirk.inputText = this.props.inputText;
    }

    public render(): JSX.Element {
        return (
            <div>
                {this.props.quirk.outputText}
            </div>
        );
    }
}