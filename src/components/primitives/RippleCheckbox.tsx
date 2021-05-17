import React from "react";
import { Checkbox } from "antd";
import { Ripple } from "@rmwc/ripple";

type OnToggleHandler = () => void;

type JCheckboxProps = {
    label: string,
    checked: boolean,
    onToggle: OnToggleHandler,
    identifier: string,
    subtitle?: string
};

export default class RippleCheckbox extends React.Component<JCheckboxProps> {
    private generateClasses(): string {
        return `ripple-checkbox ${this.props.identifier}-checkbox mdc-ripple-surface--${this.props.identifier}`;
    }

    private renderSubtitle(): JSX.Element | null {
        if (this.props.subtitle === undefined) {
            return null;
        }

        return (
            <span className={"checkbox-subtitle"}>{this.props.subtitle}</span>
        );
    }

    public render(): JSX.Element {
        return (
            <Ripple>
                <div className={this.generateClasses()} onClick={() => this.props.onToggle()}>
                    <div className={"checkbox-content"}>
                        <Checkbox checked={this.props.checked} />
                        <span className={"checkbox-label"}>{this.props.label}</span>
                    </div>
                    {this.renderSubtitle()}
                </div>
            </Ripple>
        );
    }
}