import React from "react";
import QuirkBox from "components/quirk-adapters/QuirkBox";
import Category from "quirks/Category";
import MutatorBox from "components/quirk-adapters/MutatorBox";
import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

import { Button, Checkbox, Divider, Input, Layout, Switch, Tabs, Typography } from "antd";
import ResponsiveDrawer from "components/responsive-sidebar/ResponsiveDrawer/ResponsiveDrawer";
import SideBar from "components/responsive-sidebar/SideBar";
import RippleCheckbox from "components/primitives/RippleCheckbox";
import { CheckboxChangeEventTarget } from "antd/es/checkbox/Checkbox";
import { Ripple } from "@rmwc/ripple";
import getQuirkCategories from "components/quirk-adapters/QuirkLoader";

interface JMainStates {
    inputText: string;
    hideQuirkLabels: boolean;
    // Tracks which quirks are enabled on the page, by their ID.
    enabledQuirks: Map<string, boolean>;
    // Forces the drawer to close. Used when the windows extends to no longer need it.
    forceDrawerClose: boolean;
    copyOnClick: boolean;

}

const LOCAL_STORAGE_ENABLED_QUIRKS_KEY = "enabledQuirksMap";

// eslint-disable-next-line @typescript-eslint/ban-types
export default class JMain extends React.Component<unknown, JMainStates> {
    private _mounted = false;

    private defaultTextWasWiped = false;

    private readonly categories: Category[];
    // Giant list of all quirks, mapped by their ID.
    private readonly quirkMap: Map<string, Quirk>;

    private readonly defaultText = "The quick brown fox jumps over the lazy dog :) .";

    public state: JMainStates;

    // eslint-disable-next-line @typescript-eslint/ban-types
    public constructor(props: never) {
        super(props);

        this.quirkMap = new Map<string, Quirk>();

        this.categories = getQuirkCategories();

        const enabledQuirksJSON = localStorage.getItem(LOCAL_STORAGE_ENABLED_QUIRKS_KEY);
        const localStorageEnabledQuirks = enabledQuirksJSON === null
            ? new Map<string, boolean>()
            : new Map<string, boolean>(JSON.parse(enabledQuirksJSON));
        const mapper = this.loadQuirksFromCategoriesAndGetEnabledQuirks(localStorageEnabledQuirks);

        this.state = {
            inputText: this.defaultText,
            hideQuirkLabels: false,
            enabledQuirks: mapper,
            forceDrawerClose: false,
            copyOnClick: true
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

    private updateEnabledQuirks(newMap: Map<string, boolean>): void {
        this.setState({ enabledQuirks: newMap },
            () => {
                localStorage.setItem(LOCAL_STORAGE_ENABLED_QUIRKS_KEY, JSON.stringify(Array.from(newMap.entries())));
            }
        );
    }

    private loadQuirksFromCategoriesAndGetEnabledQuirks(localStorageEnabledQuirks: Map<string, boolean>): Map<string, boolean> {
        for (const category of this.categories) {
            for (const [key, quirk] of category.quirks) {
                this.quirkMap.set(key, quirk);
            }
        }

        const map = new Map<string, boolean>();
        for (const key of this.quirkMap.keys()) {
            const localStorageValue = localStorageEnabledQuirks.get(key);
            map.set(key, localStorageValue !== undefined ? localStorageValue : true);
        }

        return map;
    }

    private quirkIsEnabled(key: string): boolean {
        return this.state.enabledQuirks.get(key) as boolean;
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
        let firstQuirkIsEnabled: boolean | null = null;
        for (const quirkKey of category.quirks.keys()) {
            if (firstQuirkIsEnabled === null) {
                firstQuirkIsEnabled = this.quirkIsEnabled(quirkKey);
            } else {
                const isEnabled = this.quirkIsEnabled(quirkKey);
                if (isEnabled !== firstQuirkIsEnabled) {
                    return true;
                }
            }
        }

        return false;
    }

    private categoryCheckboxIsChecked(category: Category): boolean {
        for (const quirkKey of category.quirks.keys()) {
            if (!this.quirkIsEnabled(quirkKey)) {
                return false;
            }
        }

        return true;
    }

    //endregion

    //region Child Event-Handling Logic
    private handleInputText(newText: string) {
        this.updateQuirkFieldsWithNewText(newText);
    }

    private handleQuirkToggle(key: string): void {
        const shallowMap = this.state.enabledQuirks;
        shallowMap.set(key, !shallowMap.get(key));
        this.updateEnabledQuirks(shallowMap);
    }

    private handleMutator(mutator: QuirkMutator): void {
        mutator.toggle();
        // Mutating a prop so no choice but to force a re-render here.
        this.refreshProps();
    }

    private handleSidebarCollapse(collapsed: boolean): void {
        this.setState({ forceDrawerClose: !collapsed });
    }

    private handleCategoryCheckboxChange(target: CheckboxChangeEventTarget, category: Category): void {
        const shallowMap = this.state.enabledQuirks;

        for (const quirkKey of category.quirks.keys()) {
            shallowMap.set(quirkKey, target.checked);
        }

        this.updateEnabledQuirks(shallowMap);
    }

    private handleEnableAll(): void {
        const shallowMap = this.state.enabledQuirks;

        for (const quirkKey of shallowMap.keys()) {
            shallowMap.set(quirkKey, true);
        }

        this.updateEnabledQuirks(shallowMap);
    }

    private handleDisableAll(): void {
        const shallowMap = this.state.enabledQuirks;

        for (const quirkKey of shallowMap.keys()) {
            shallowMap.set(quirkKey, false);
        }

        this.updateEnabledQuirks(shallowMap);
    }

    private handleCopyOnClickChange(checked: boolean): void {
        this.setState({ copyOnClick: checked });
    }

    private handleHideLabelChange(checked: boolean): void {
        this.setState({ hideQuirkLabels: checked });
    }

    //endregion

    //region Render Logic
    private static renderIntroText(): JSX.Element {
        return (
            <div className="info-fields">
                <Typography.Title level={3}>Homestuck Quirk Generator</Typography.Title>
                <div>Generator for Homestuck/Hiveswap typing quirks. Created by QuaternionMark.</div>
                <div>
                    Want to check out the source or report issues?
                    See the <a href="https://github.com/QuaternionMark/Homestuck-Quirk-Generator/">GitHub repo</a>.
                </div>
            </div>
        );
    }

    private renderInputText(): JSX.Element {
        return (
            <>
                <Divider plain orientation={"left"}>Input Text</Divider>
                <Input.TextArea
                    className={"input-text"}
                    value={this.state.inputText}
                    onChange={event => this.handleInputText(event.target.value)}
                    onFocus={() => this.defaultTextWasWiped ? null : this.wipeDefaultText()}
                />
            </>
        );
    }
    
    private renderQuirks(): JSX.Element {
        const items = [];
        for (const [key, quirk] of this.quirkMap) {
            if (this.quirkIsEnabled(key)) {
                items.push(
                    <QuirkBox
                        key={key} quirk={quirk} inputText={this.state.inputText}
                        hideLabel={this.state.hideQuirkLabels} copyOnClick={this.state.copyOnClick}
                    />
                );
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
            const quirkIsEnabled = this.quirkIsEnabled(quirkKey);
            const key = quirkKey + "-enabled";

            items.push(
                <RippleCheckbox
                    key={key} label={quirk.name} checked={quirkIsEnabled}
                    identifier={`${quirk.identifier}`}
                    onToggle={() => this.handleQuirkToggle(quirkKey)}
                />
            );
        }

        return (
            <>
                <Typography.Title level={5}>Quirks to Display:</Typography.Title>
                <div className={"checkbox-list"}>
                    {items}
                </div>
            </>
        );
    }

    private renderMutators(mutators: QuirkMutator[]): JSX.Element | null {
        const items = [];
        for (const mutator of mutators) {
            if (this.quirkIsEnabled(mutator.quirkIdentifier)) {
                items.push(<MutatorBox key={mutator.identifier} mutator={mutator} onMutate={(m) => this.handleMutator(m)} />);
            }
        }

        if (items.length < 1) {
            return null;
        }

        return (
            <>
                <Typography.Title level={5}>Quirk Modifiers:</Typography.Title>
                <div className={"checkbox-list"}>
                    {items}
                </div>
            </>
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
                        <Button className={"fluid-btn"} type={"primary"} onClick={() => this.handleEnableAll()}>Enable All</Button>
                    </Ripple>
                    <Ripple>
                        <Button className={"fluid-btn"} type={"primary"} onClick={() => this.handleDisableAll()}>Disable All</Button>
                    </Ripple>
                </div>
                <div className={"switch-section"}>
                    <label className={"switch-label"}>Toggle Copy-on-Click:
                        <Switch 
                            size="small"
                            defaultChecked={this.state.copyOnClick}
                            onChange={(checked) => this.handleCopyOnClickChange(checked)}
                        />
                    </label>
                    <label className={"switch-label"}>Hide Labels:
                        <Switch 
                            size="small" 
                            defaultChecked={this.state.hideQuirkLabels}
                            onChange={(checked) => this.handleHideLabelChange(checked)}
                        />
                    </label>
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
            <>
                <ResponsiveDrawer menu={sidebar} forceClose={this.state.forceDrawerClose} />
                <Layout>
                    <Layout.Content className={"main-content"}>
                        {JMain.renderIntroText()}
                        {this.renderInputText()}
                        {this.renderQuirks()}
                    </Layout.Content>
                    <SideBar menu={sidebar} onCollapse={(collapsed) => this.handleSidebarCollapse(collapsed)} />
                </Layout>
            </>
        );
    }
}