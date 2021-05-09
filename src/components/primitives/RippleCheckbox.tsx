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
        return `${this.props.identifier}-checkbox mdc-ripple-surface--${this.props.identifier}`;
    }

    public render(): JSX.Element {
        return (
            <Ripple>
                <div className={this.generateClasses()} onClick={() => this.props.onToggle()}>
                    <Checkbox autoFocus={false} checked={this.props.checked} /> {this.props.label}
                </div>
            </Ripple>
        );
    }
}