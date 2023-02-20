export type ReactSetter<T> = (newState: T | ((prevState: T) => T)) => void;
