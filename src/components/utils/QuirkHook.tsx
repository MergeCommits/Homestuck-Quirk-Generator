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

    public spreadableCheckboxProps(): { checked: boolean, onChange: () => void} {
        return {
            checked: this.enableHookState,
            onChange: () => {
                this.setEnabledStateDispatcher(prevState => !prevState);
            }
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

    public isEnabled(): boolean {
        return this.activeHookState;
    }

    public get identifier(): string {
        return this.mutator.identifier;
    }

    public constructor(activeHookState: boolean, setActiveStateDispatcher: ReactHookBooleanSetter, mutator: QuirkMutator) {
        this.activeHookState = activeHookState;
        this.setActiveStateDispatcher = setActiveStateDispatcher;
        this.mutator = mutator;
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
            }
        };
    }
}

export class CategoryHook {
    private readonly name: string;
    private readonly quirkHooks: QuirkHook[];

    public get quirks(): QuirkHook[] {
        return this.quirkHooks;
    }

    public constructor(name: string, quirkHooks: QuirkHook[]) {
        this.name = name;
        this.quirkHooks = quirkHooks;
    }
}

function useMutator(mutator: QuirkMutator) {
    const [enabled, setEnabled] = useState(mutator.active);
    return new QuirkMutatorHook(enabled, setEnabled, mutator);
}

function useQuirk(quirk: Quirk): QuirkHook {
    const [enabled, setEnabled] = useState(true);
    const mutatorHooks = quirk.mutators.map(mutator => useMutator(mutator));

    return new QuirkHook(quirk, enabled, setEnabled, mutatorHooks);
}

export default function useQuirkCategory(category: Category): CategoryHook {
    const quirkHooks = category.quirks.map(quirk => useQuirk(quirk));
    return new CategoryHook(category.name, quirkHooks);
}