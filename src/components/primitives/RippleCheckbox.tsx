import React from "react";
import { Checkbox } from "antd";

type OnToggleHandler = () => void;

type JCheckboxProps = {
    label: string,
    checked: boolean,
    onToggle: OnToggleHandler,
    additionalClasses?: string
};

export default class RippleCheckbox extends React.Component<JCheckboxProps> {
    private generateClasses(): string {
        return "md-ripples" + (this.props.additionalClasses !== undefined ? " " + this.props.additionalClasses : "");
    }

    public render(): JSX.Element {
        return (
            <div className={this.generateClasses()} onClick={() => this.props.onToggle()}>
                <Checkbox autoFocus={false} checked={this.props.checked} /> {this.props.label}
            </div>
        );
    }
}