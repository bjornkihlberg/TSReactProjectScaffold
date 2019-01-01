import { IState, reducer } from './state'
import { DECREMENT, INCREMENT } from './state'

import { expect } from 'chai'

describe('state', () => {
    describe('reducer', () => {
        it('increments', () => {
            const state: IState = { i: 3 }

            const actual: IState = reducer(state, { type: INCREMENT })
            const expected: IState = { i: 4 }

            expect(actual).to.deep.equal(expected)
        })

        it('decrements', () => {
            const state: IState = { i: 3 }

            const actual: IState = reducer(state, { type: DECREMENT })
            const expected: IState = { i: 2 }

            expect(actual).to.deep.equal(expected)
        })
    })
})
