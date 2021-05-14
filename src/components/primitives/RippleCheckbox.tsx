import React from "react";
import { Checkbox } from "antd";
import { Ripple } from "@rmwc/ripple";

type OnToggleHandler = () => void;

type JCheckboxProps = {
    label: string,
    checked: boolean,
    onToggle: OnToggleHandler,
    identifier: string
};

export default class RippleCheckbox extends React.Component<JCheckboxProps> {
    private generateClasses(): string {
        return `ripple-checkbox ${this.props.identifier}-checkbox mdc-ripple-surface--${this.props.identifier}`;
    }

    public render(): JSX.Element {
        return (
            <Ripple>
                <div className={this.generateClasses()} onClick={() => this.props.onToggle()}>
                    <div className={"checkbox-content"}>
                        <Checkbox autoFocus={false} checked={this.props.checked} />
                        <span className={"checkbox-label"}>{this.props.label}</span>
                    </div>
                </div>
            </Ripple>
        );
    }
}