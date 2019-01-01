export interface IState { i: number }

export const INCREMENT: unique symbol = Symbol()
export const DECREMENT: unique symbol = Symbol()

export type Action =
    | { type: typeof INCREMENT }
    | { type: typeof DECREMENT }

export const reducer = (state: IState | undefined, action: Action): IState => {
    if (state === undefined)
        return { i: 0 }

    switch (action.type) {
        case INCREMENT: return { ...state, i: state.i + 1 }
        case DECREMENT: return { ...state, i: state.i - 1 }
    }
}
