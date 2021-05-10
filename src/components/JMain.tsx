import React from "react";
import QuirkBox from "components/quirk-adapters/QuirkBox";
import Category from "quirks/Category";
import Alternia from "quirks/collections/Alternia";
import Beforus from "quirks/collections/Beforus";
import MutatorBox from "components/quirk-adapters/MutatorBox";
import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

import { Input, Layout } from "antd";
import ResponsiveDrawer from "components/responsive-sidebar/ResponsiveDrawer/ResponsiveDrawer";
import SideBar from "components/responsive-sidebar/SideBar/SideBar";
import RippleCheckbox from "components/primitives/RippleCheckbox";

interface JMainStates {
    inputText: string
}

export default class JMain extends React.Component<unknown, JMainStates> {
    private readonly categories: Category[];
    // Giant list of all quirks, mapped by their ID.
    private readonly quirkMap: Map<string, Quirk>;
    // Tracks which quirks are enabled on the page, by their ID.
    private readonly activeQuirkMapper: Map<string, boolean>;

    private readonly defaultText = "The quick brown fox jumps over the lazy dog. :D";

    private forceDrawerClose = false;

    public constructor(props: never) {
        super(props);

        this.quirkMap = new Map<string, Quirk>();
        this.activeQuirkMapper = new Map<string, boolean>();

        this.categories = [
            new Alternia(),
            new Beforus()
        ];

        this.loadQuirksFromCategories();
        this.updateQuirkFieldsWithNewText(this.defaultText);
    }

    //region Business Logic
    private loadQuirksFromCategories() {
        for (const category of this.categories) {
            for (const [key, quirk] of category.quirks) {
                this.quirkMap.set(key, quirk);
            }
        }

        for (const key of this.quirkMap.keys()) {
            this.activeQuirkMapper.set(key, true);
        }
    }

    private quirkIsActive(key: string): boolean {
        return this.activeQuirkMapper.get(key) as boolean;
    }

    private updateQuirkFieldsWithNewText(newText: string) {
        for (const quirk of this.quirkMap.values()) {
            quirk.inputText = newText;
        }
        this.forceUpdate();
    }
    //endregion

    //region Child Event-Handling Logic
    private handleInputText(newText: string) {
        this.updateQuirkFieldsWithNewText(newText);
    }

    private handleQuirkToggle(key: string): void {
        this.activeQuirkMapper.set(key, !this.activeQuirkMapper.get(key));
        this.forceUpdate();
    }

    private handleMutator(mutator: QuirkMutator): void {
        mutator.toggle();
        this.forceUpdate();
    }

    private handleSidebarCollapse(collapsed: boolean): void {
        this.forceDrawerClose = !collapsed;
        this.forceUpdate();
    }
    //endregion

    //region Render Logic
    private renderQuirks(): JSX.Element {
        const items = [];
        for (const [key, quirk] of this.quirkMap) {
            if (this.quirkIsActive(key)) {
                items.push(<QuirkBox key={key} quirk={quirk}/>);
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
            <div key={cat.name}>
                {this.renderToggles(quirks)}
                {this.renderMutators(cat.quirkMutators)}
            </div>
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
                <h2>Actives</h2>
                <div className={"checkbox-list"}>
                    {items}
                </div>
            </React.Fragment>
        );
    }

    private renderMutators(mutators: QuirkMutator[]): JSX.Element {
        const items = [];
        for (const mutator of mutators) {
            if (this.quirkIsActive(mutator.quirkIdentifier)) {
                items.push(<MutatorBox key={mutator.label} mutator={mutator} onMutate={(m) => this.handleMutator(m)}/>);
            }
        }

        return (
            <React.Fragment>
                <h2>Mutators</h2>
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
            <div>
                {categoryRenders}
            </div>
        );
    }
    //endregion

    public render(): JSX.Element {
        const sidebar = this.renderSidebar();

        return (
            <React.Fragment>
                <ResponsiveDrawer menu={sidebar} forceClose={this.forceDrawerClose} />
                <Layout>
                    <Layout.Content>
                        <Input.TextArea onChange={event => this.handleInputText(event.target.value)} defaultValue={this.defaultText}/>
                        {this.renderQuirks()}
                    </Layout.Content>
                    <SideBar menu={sidebar} onCollapse={(collapsed) => this.handleSidebarCollapse(collapsed)} />
                </Layout>
            </React.Fragment>
        );
    }
}