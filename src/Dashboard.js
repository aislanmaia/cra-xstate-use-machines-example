import React, {useContext} from 'react'
import AppContext from './AppContext'

export default props => {
    const {user, logout} = useContext(AppContext)

    return (
        <>
            <h1>Hello mr. {user.username}</h1>

            <button onClick={e => logout(e)}>
                Logout
            </button>
        </>
    )
}
