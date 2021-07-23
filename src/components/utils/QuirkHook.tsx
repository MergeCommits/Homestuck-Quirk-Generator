import React, { useState } from "react";
import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";
import Category from "quirks/Category";

type ReactHookBooleanSetter = React.Dispatch<React.SetStateAction<boolean>>;

class QuirkHook {
    private readonly quirk: Quirk;

    private readonly enableHookState: boolean;
    private readonly setEnabledStateDispatcher: ReactHookBooleanSetter;

    public readonly mutatorHooks: QuirkMutatorHook[];

    public constructor(quirk: Quirk, enableHookState: boolean, setEnabledStateDispatcher: ReactHookBooleanSetter, mutatorHooks: QuirkMutatorHook[]) {
        this.quirk = quirk;
        this.enableHookState = enableHookState;
        this.setEnabledStateDispatcher = setEnabledStateDispatcher;
        this.mutatorHooks = mutatorHooks;
    }
}

class QuirkMutatorHook {
    private readonly activeHookState: boolean;
    private readonly setActiveStateDispatcher: ReactHookBooleanSetter;
    private readonly mutator: QuirkMutator;

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
    public readonly quirkHooks: QuirkHook[];

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