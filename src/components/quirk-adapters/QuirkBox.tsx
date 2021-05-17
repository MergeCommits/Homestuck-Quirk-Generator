import React, { CSSProperties } from "react";
import Quirk from "quirks/Quirk";
import { Divider, message, Typography } from "antd";
import copy from "copy-to-clipboard";

type QuirkBoxProps = {
    quirk: Quirk;
    inputText: string;
    hideLabel: boolean;
    copyOnClick: boolean;
};

class QuirkBox extends React.PureComponent<QuirkBoxProps> {
    private generateTextStyles(): CSSProperties {
        const colorVar = `--${this.props.quirk.identifier}-color`;

        return {
            color: `var(${colorVar})`
        };
    }

    private handleOnClick(e: React.MouseEvent<HTMLSpanElement>): void {
        if (!this.props.copyOnClick) {
            return;
        }

        copy(this.props.quirk.outputText,
            {
                format: "text/plain",
                onCopy: () => message.success("Selected text copied.", 1.5)
            }
        );

        // Select text.
        const el = e.target;
        const range = document.createRange();
        range.selectNodeContents(el as Node);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
    }

    public render(): JSX.Element {
        this.props.quirk.inputText = this.props.inputText;
        
        let label = null;
        if (!this.props.hideLabel) {
            label = this.props.quirk.name;
        }

        return (
            <div className={"quirk-box"}>
                <Divider plain orientation={"left"}>
                    {label}
                </Divider>
                <Typography.Text style={this.generateTextStyles()}>
                    <span onClick={(e) => this.handleOnClick(e)}>{this.props.quirk.outputText}</span>
                </Typography.Text>
            </div>
        );
    }
}

export default QuirkBox;