import React, { useEffect, createContext, useReducer } from 'react';
import { reducer, initialState } from './UserReducer'
import { useHistory } from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = (props) => {

    const history = useHistory()
    const [state, dispatch] = useReducer(reducer, initialState)



    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))


        if (user) {
            dispatch({ type: "USER", payload: user })

        } else {
            if (!history.location.pathname.startsWith('/reset'))
                history.push('/signin')
        }
    }, []);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )

}