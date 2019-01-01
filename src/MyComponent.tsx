import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Action, IState } from './state'
import { DECREMENT, INCREMENT } from './state'

import { header } from './MyComponent.css'

import * as styles from './main.css'

interface IMyComponentProps {
    greeting: string
}

interface IMyComponentEvents {
    onIncrement: () => void
    onDecrement: () => void
}

const myComponent = ({ greeting, onIncrement, onDecrement }: IMyComponentProps & IMyComponentEvents) =>
    <>
        <h1 className={header}>{greeting}</h1>
        <button className={styles.mystyle} onClick={onIncrement}>Increment</button>
        <button className={styles.mystyle} onClick={onDecrement}>Decrement</button>
    </>

const mapStateToProps = ({ i }: IState): IMyComponentProps => ({ greeting: `Hello! i = ${i}` })

const mapDispatchToEvents = (dispatch: Dispatch<Action>): IMyComponentEvents => ({
    onDecrement: () => dispatch({ type: DECREMENT }),
    onIncrement: () => dispatch({ type: INCREMENT }),
})

export const MyComponent = connect(mapStateToProps, mapDispatchToEvents)(myComponent)
