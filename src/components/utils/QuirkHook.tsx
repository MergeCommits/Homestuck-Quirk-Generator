import React, { useState } from "react";
import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";
import Category from "quirks/Category";

type ReactHookBooleanSetter = React.Dispatch<React.SetStateAction<boolean>>;

export class QuirkHook {
    private readonly quirk: Quirk;

    private readonly enableHookState: boolean;
    private readonly setEnabledStateDispatcher: ReactHookBooleanSetter;

    public readonly mutatorHooks: QuirkMutatorHook[];

    public get name(): string {
        return this.quirk.name;
    }

    public get identifier(): string {
        return this.quirk.identifier;
    }

    public get color(): string {
        return `var(--${this.quirk.identifier}-color)`;
    }

    public isEnabled(): boolean {
        return this.enableHookState;
    }

    public getQuirkText(input: string): string {
        return this.quirk.quirkifyText(input);
    }

    public constructor(quirk: Quirk, enableHookState: boolean, setEnabledStateDispatcher: ReactHookBooleanSetter, mutatorHooks: QuirkMutatorHook[]) {
        this.quirk = quirk;
        this.enableHookState = enableHookState;
        this.setEnabledStateDispatcher = setEnabledStateDispatcher;
        this.mutatorHooks = mutatorHooks;
    }

    public spreadableCheckboxProps(): { checked: boolean, onChange: () => void, label: string, color: string} {
        return {
            checked: this.enableHookState,
            onChange: () => {
                this.setEnabledStateDispatcher(prevState => !prevState);
            },
            label: this.quirk.name,
            color: this.color
        };
    }

    public memoizationDependencies(): boolean[] {
        return [
            this.enableHookState,
            ...(this.mutatorHooks.map(mh => mh.isEnabled()))
        ];
    }
}

class QuirkMutatorHook {
    private readonly activeHookState: boolean;
    private readonly setActiveStateDispatcher: ReactHookBooleanSetter;
    private readonly mutator: QuirkMutator;
    private readonly quirkIdentifier: string;

    public isEnabled(): boolean {
        return this.activeHookState;
    }

    public get identifier(): string {
        return this.mutator.identifier;
    }

    public get color(): string {
        return `var(--${this.quirkIdentifier}-color)`;
    }

    public constructor(activeHookState: boolean, setActiveStateDispatcher: ReactHookBooleanSetter, mutator: QuirkMutator, quirkIdentifier: string) {
        this.activeHookState = activeHookState;
        this.setActiveStateDispatcher = setActiveStateDispatcher;
        this.mutator = mutator;
        this.quirkIdentifier = quirkIdentifier;
    }

    public spreadableCheckboxProps() {
        return {
            checked: this.activeHookState,
            onChange: () => {
                this.setActiveStateDispatcher(prevState => {
                    const newState = !prevState;
                    this.mutator.active = newState;
                    return newState;
                });
            },
            label: this.mutator.label,
            description: this.mutator.description,
            color: this.color
        };
    }
}

export class CategoryHook {
    public readonly name: string;
    private readonly quirkHooks: QuirkHook[];

    public get quirks(): QuirkHook[] {
        return this.quirkHooks;
    }

    public constructor(name: string, quirkHooks: QuirkHook[]) {
        this.name = name;
        this.quirkHooks = quirkHooks;
    }
}

function useMutator(mutator: QuirkMutator, quirkIdentifier: string) {
    const [enabled, setEnabled] = useState(mutator.active);
    return new QuirkMutatorHook(enabled, setEnabled, mutator, quirkIdentifier);
}

function useQuirk(quirk: Quirk): QuirkHook {
    const [enabled, setEnabled] = useState(true);
    const mutatorHooks = quirk.mutators.map(mutator => useMutator(mutator, quirk.identifier));

    return new QuirkHook(quirk, enabled, setEnabled, mutatorHooks);
}

export default function useQuirkCategory(category: Category): CategoryHook {
    const quirkHooks = category.quirks.map(quirk => useQuirk(quirk));
    return new CategoryHook(category.name, quirkHooks);
}