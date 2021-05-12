import React, { CSSProperties } from "react";
import Quirk from "quirks/Quirk";
import { Divider, Typography } from "antd";

type QuirkBoxProps = {
    quirk: Quirk;
    inputText: string;
};

const titleStyles: CSSProperties = {
    marginBottom: 0
};

class QuirkBox extends React.PureComponent<QuirkBoxProps> {
    private generateTextStyles(): CSSProperties {
        const colorVar = `--${this.props.quirk.identifier}-color`;

        return {
            color: `var(${colorVar})`
        };
    }

    public render(): JSX.Element {
        this.props.quirk.inputText = this.props.inputText;

        return (
            <div className={"quirk-box"}>
                <Divider plain orientation={"left"} style={titleStyles}>
                    {this.props.quirk.name}
                </Divider>
                <Typography.Text style={this.generateTextStyles()}>
                    {this.props.quirk.outputText}
                </Typography.Text>
            </div>
        );
    }
}

export default QuirkBox;