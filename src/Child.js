import React, { useContext } from 'react'
import AppContext from './AppContext'
import OtherChild from './OtherChild'

export default function Child() {
  const { machine } = useContext(AppContext)
  return (
    <div>
      <div>Child state: {machine.state.matches('Off') ? 'Off' : 'On'}</div>
      <div>Child count: {machine.context.counter}</div>
      <OtherChild />
    </div>
  )
}