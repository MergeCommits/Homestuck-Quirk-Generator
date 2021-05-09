import React from "react";
import QuirkBox from "components/quirk-adapters/QuirkBox";
import Category from "quirks/Category";
import Alternia from "quirks/collections/Alternia";
import Beforus from "quirks/collections/Beforus";
import MutatorBox from "components/quirk-adapters/MutatorBox";
import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

import "color-codes/color-mixins.scss";

import { Input, Layout } from "antd";
import NavBar from "components/responsive-sidebar/NavBar/NavBar";
import SideBar from "components/responsive-sidebar/SideBar/SideBar";
import RippleCheckbox from "components/primitives/RippleCheckbox";

interface JMainStates {
    inputText: string
}

export default class JMain extends React.Component<unknown, JMainStates> {
    private readonly categories: Category[];
    private readonly quirkMap: Map<string, Quirk>;
    private readonly activeQuirkMapper: Map<string, boolean>;

    private readonly defaultText = "The quick brown fox jumps over the lazy dog. :D";

    public constructor(props: never) {
        super(props);
        this.state = {
            inputText: ""
        };

        this.quirkMap = new Map<string, Quirk>();
        this.activeQuirkMapper = new Map<string, boolean>();

        this.categories = [
            new Alternia(),
            new Beforus()
        ];

        this.populateQuirks();
        this.updateQuirkFields(this.defaultText);
    }

    private populateQuirks() {
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

    private inputTextHandler(newText: string) {
        this.updateQuirkFields(newText);
    }

    private updateQuirkFields(newText: string) {
        for (const quirk of this.quirkMap.values()) {
            quirk.inputText = newText;
        }
        this.forceUpdate();
    }

    private toggleHandler(key: string): void {
        this.activeQuirkMapper.set(key, !this.activeQuirkMapper.get(key));
        this.forceUpdate();
    }

    private mutatorHandler(mutator: QuirkMutator): void {
        mutator.toggle();
        this.forceUpdate();
    }

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
                    onToggle={() => this.toggleHandler(quirkKey)}
                />
            );
        }

        return (
            <div>
                <h2>Actives</h2>
                {items}
            </div>
        );
    }

    private renderMutators(mutators: QuirkMutator[]): JSX.Element {
        const items = [];
        for (const mutator of mutators) {
            if (this.quirkIsActive(mutator.quirkIdentifier)) {
                items.push(<MutatorBox key={mutator.label} mutator={mutator} onMutate={(m) => this.mutatorHandler(m)}/>);
            }
        }

        return (
            <div>
                <h2>Mutators</h2>
                {items}
            </div>
        );
    }

    private renderSidebar(): JSX.Element {
        const categoryRenders = [];
        for (const category of this.categories) {
            categoryRenders.push(this.renderCategory(category));
        }

        return (
            <React.Fragment>
                {categoryRenders}
            </React.Fragment>
        );
    }

    public render(): JSX.Element {
        const sidebar = this.renderSidebar();

        return (
            <React.Fragment>
                <NavBar menu={sidebar}/>
                <Layout>
                    <Layout.Content className="content">
                        <Input.TextArea onChange={event => this.inputTextHandler(event.target.value)} defaultValue={this.defaultText}/>
                        {this.renderQuirks()}
                    </Layout.Content>
                    <SideBar menu={sidebar}/>
                </Layout>
            </React.Fragment>
        );
    }
}