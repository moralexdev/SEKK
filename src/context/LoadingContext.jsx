import React, {useState, createContext, useContext} from 'react'

const LoadingContext = createContext()
const LoadingActionsContext = createContext()

/* eslint-disable */
const useContextFactory = (name, context) => {
    return () => {
        const ctx = useContext(context)
        if (ctx === undefined) {
            throw new Error(`Context must be provided for context provider`)
        }
        return ctx
    }
}
/* eslint-enable */

export const useLoadingContext = useContextFactory('LoadingContext', LoadingContext)
export const useLoadingActionsContext = useContextFactory('LoadingActionsContext', LoadingActionsContext)

const LoadingContextProvider = (props) => {
    const [isLoading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={isLoading}>
            <LoadingActionsContext.Provider value={setLoading}>
                {props.children}
            </LoadingActionsContext.Provider>
        </LoadingContext.Provider>
    )
}

export default LoadingContextProvider