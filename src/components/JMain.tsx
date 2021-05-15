import React from "react";
import QuirkBox from "components/quirk-adapters/QuirkBox";
import Category from "quirks/Category";
import Alternia from "quirks/collections/Alternia";
import Beforus from "quirks/collections/Beforus";
import MutatorBox from "components/quirk-adapters/MutatorBox";
import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

import { Button, Checkbox, Input, Layout, Switch, Tabs, Typography } from "antd";
import ResponsiveDrawer from "components/responsive-sidebar/ResponsiveDrawer/ResponsiveDrawer";
import SideBar from "components/responsive-sidebar/SideBar";
import RippleCheckbox from "components/primitives/RippleCheckbox";
import Cherubs from "quirks/collections/Cherubs";
import Sprites from "quirks/collections/Sprites";
import Hiveswap from "quirks/collections/Hiveswap";
import { CheckboxChangeEventTarget } from "antd/es/checkbox/Checkbox";
import { Ripple } from "@rmwc/ripple";

interface JMainStates {
    inputText: string;
    // Tracks which quirks are enabled on the page, by their ID.
    activeQuirkMapper: Map<string, boolean>;
    // Forces the drawer to close. Used when the windows extends to no longer need it.
    forceDrawerClose: boolean;
}

export default class JMain extends React.Component<unknown, JMainStates> {
    private _mounted = false;

    private defaultTextWasWiped = false;

    private readonly categories: Category[];
    // Giant list of all quirks, mapped by their ID.
    private readonly quirkMap: Map<string, Quirk>;

    private readonly defaultText = "The quick brown fox jumps over the lazy dog. :D";

    public state: JMainStates;

    public constructor(props: never) {
        super(props);

        this.quirkMap = new Map<string, Quirk>();

        this.categories = [
            new Alternia(),
            new Beforus(),
            new Cherubs(),
            new Sprites(),
            new Hiveswap()
        ];

        const mapper = this.loadQuirksFromCategories();

        this.state = {
            inputText: this.defaultText,
            activeQuirkMapper: mapper,
            forceDrawerClose: false
        };
    }

    //region Business Logic
    public componentDidMount(): void {
        this._mounted = true;
    }

    public componentWillUnmount(): void {
        this._mounted = false;
    }

    private refreshProps(): void {
        if (this._mounted) {
            this.forceUpdate();
        }
    }

    private loadQuirksFromCategories(): Map<string, boolean> {
        for (const category of this.categories) {
            for (const [key, quirk] of category.quirks) {
                this.quirkMap.set(key, quirk);
            }
        }

        const map = new Map<string, boolean>();
        for (const key of this.quirkMap.keys()) {
            map.set(key, true);
        }

        return map;
    }

    private quirkIsActive(key: string): boolean {
        return this.state.activeQuirkMapper.get(key) as boolean;
    }

    private wipeDefaultText(): void {
        if (this.defaultTextWasWiped) {
            return;
        }

        this.handleInputText("");
        this.defaultTextWasWiped = true;
    }

    private updateQuirkFieldsWithNewText(newText: string) {
        this.setState({ inputText: newText });
    }

    private categoryCheckboxIsIndeterminate(category: Category): boolean {
        let firstQuirkIsActive: boolean | null = null;
        for (const quirkKey of category.quirks.keys()) {
            if (firstQuirkIsActive === null) {
                firstQuirkIsActive = this.quirkIsActive(quirkKey);
            } else {
                const isActive = this.quirkIsActive(quirkKey);
                if (isActive !== firstQuirkIsActive) {
                    return true;
                }
            }
        }

        return false;
    }

    private categoryCheckboxIsChecked(category: Category): boolean {
        for (const quirkKey of category.quirks.keys()) {
            if (!this.quirkIsActive(quirkKey)) {
                return false;
            }
        }

        return true;
    }

    private handleCategoryCheckboxChange(target: CheckboxChangeEventTarget, category: Category): void {
        const shallowMap = this.state.activeQuirkMapper;

        for (const quirkKey of category.quirks.keys()) {
            shallowMap.set(quirkKey, target.checked);
        }

        this.setState({ activeQuirkMapper: shallowMap });
    }

    private enableAllQuirks(): void {
        const shallowMap = this.state.activeQuirkMapper;

        for (const quirkKey of shallowMap.keys()) {
            shallowMap.set(quirkKey, true);
        }

        this.setState({ activeQuirkMapper: shallowMap });
    }

    private disableAllQuirks(): void {
        const shallowMap = this.state.activeQuirkMapper;

        for (const quirkKey of shallowMap.keys()) {
            shallowMap.set(quirkKey, false);
        }

        this.setState({ activeQuirkMapper: shallowMap });
    }

    //endregion

    //region Child Event-Handling Logic
    private handleInputText(newText: string) {
        this.updateQuirkFieldsWithNewText(newText);
    }

    private handleQuirkToggle(key: string): void {
        const shallowMap = this.state.activeQuirkMapper;
        shallowMap.set(key, !shallowMap.get(key));
        this.setState({ activeQuirkMapper: shallowMap });
    }

    private handleMutator(mutator: QuirkMutator): void {
        mutator.toggle();
        // Mutating a prop so no choice but to force a re-render here.
        this.refreshProps();
    }

    private handleSidebarCollapse(collapsed: boolean): void {
        this.setState({ forceDrawerClose: !collapsed });
    }

    //endregion

    //region Render Logic
    private renderQuirks(): JSX.Element {
        const items = [];
        for (const [key, quirk] of this.quirkMap) {
            if (this.quirkIsActive(key)) {
                items.push(<QuirkBox key={key} quirk={quirk} inputText={this.state.inputText}/>);
            }
        }

        return (
            <div>
                {items}
            </div>
        );
    }

    private renderCategory(cat: Category): JSX.Element {
        const quirks = Array.from(cat.quirks, ([, value]) => (value));

        return (
            <Tabs.TabPane key={cat.name} tab={cat.name} className={"category-section"}>
                <Checkbox
                    className={"category-checkbox"}
                    indeterminate={this.categoryCheckboxIsIndeterminate(cat)}
                    checked={this.categoryCheckboxIsChecked(cat)}
                    onChange={(e) => this.handleCategoryCheckboxChange(e.target, cat)}
                >
                    Enable all quirks in this category
                </Checkbox>
                {this.renderToggles(quirks)}
                {this.renderMutators(cat.quirkMutators)}
            </Tabs.TabPane>
        );
    }

    private renderToggles(quirks: Quirk[]): JSX.Element {
        const items = [];
        for (const quirk of quirks) {
            const quirkKey = quirk.identifier;
            const quirkIsActive = this.quirkIsActive(quirkKey);
            const key = quirkKey + "-active";

            items.push(
                <RippleCheckbox key={key} label={quirk.name} checked={quirkIsActive}
                    identifier={`${quirk.identifier}`}
                    onToggle={() => this.handleQuirkToggle(quirkKey)}
                />
            );
        }

        return (
            <React.Fragment>
                <Typography.Title level={5}>Quirks to Display:</Typography.Title>
                <div className={"checkbox-list"}>
                    {items}
                </div>
            </React.Fragment>
        );
    }

    private renderMutators(mutators: QuirkMutator[]): JSX.Element | null {
        const items = [];
        for (const mutator of mutators) {
            if (this.quirkIsActive(mutator.quirkIdentifier)) {
                items.push(<MutatorBox key={mutator.identifier} mutator={mutator} onMutate={(m) => this.handleMutator(m)}/>);
            }
        }

        if (items.length < 1) {
            return null;
        }

        return (
            <React.Fragment>
                <Typography.Title level={5}>Quirk Modifiers:</Typography.Title>
                <div className={"checkbox-list"}>
                    {items}
                </div>
            </React.Fragment>
        );
    }

    private renderSidebar(): JSX.Element {
        const categoryRenders = [];
        for (const category of this.categories) {
            categoryRenders.push(this.renderCategory(category));
        }

        return (
            <div className={"options-bar"}>
                <div className={"button-section"}>
                    <Ripple>
                        <Button className={"fluid-btn"} type={"primary"} onClick={() => this.enableAllQuirks()}>Enable All</Button>
                    </Ripple>
                    <Ripple>
                        <Button className={"fluid-btn"} type={"primary"} onClick={() => this.disableAllQuirks()}>Disable All</Button>
                    </Ripple>
                </div>
                <div className={"switch-section"}>
                    <label>Toggle Copy-To-Clipboard: <Switch size="small"/></label>
                    <label>Hide Labels: <Switch size="small"/></label>
                </div>
                <Tabs>
                    {categoryRenders}
                </Tabs>
            </div>
        );
    }

    //endregion

    public render(): JSX.Element {
        const sidebar = this.renderSidebar();

        return (
            <React.Fragment>
                <ResponsiveDrawer menu={sidebar} forceClose={this.state.forceDrawerClose}/>
                <Layout>
                    <Layout.Content className={"main-content"}>
                        <Input.TextArea
                            value={this.state.inputText}
                            onChange={event => this.handleInputText(event.target.value)}
                            onFocus={() => this.defaultTextWasWiped ? null : this.wipeDefaultText()}
                        />
                        {this.renderQuirks()}
                    </Layout.Content>
                    <SideBar menu={sidebar} onCollapse={(collapsed) => this.handleSidebarCollapse(collapsed)}/>
                </Layout>
            </React.Fragment>
        );
    }
}