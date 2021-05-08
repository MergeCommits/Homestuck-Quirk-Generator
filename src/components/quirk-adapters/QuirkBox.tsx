import React, { CSSProperties } from "react";
import Quirk from "quirks/Quirk";

type QuirkBoxProps = {
    quirk: Quirk;
};

class QuirkBox extends React.Component<QuirkBoxProps> {
    private generateStyles(): CSSProperties {
        const colorVar = `--${this.props.quirk.identifier}-color`;

        return {
            color: `var(${colorVar})`
        };
    }

    public render(): JSX.Element {
        return <div style={this.generateStyles()}>
            {this.props.quirk.outputText}
        </div>;
    }
}

export default QuirkBox;