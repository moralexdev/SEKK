import React, {useState, useEffect, useCallback} from 'react';
import { useLoadingActionsContext } from '../../context/LoadingContext';

import "./Page.css";
import { createCn } from 'bem-react-classname';
import { CurrencyInput } from '../currencyInput/CurrencyInput'

import { createConvertAmountUrl } from '../../utilities_methods/utilities'

import {
    LOCAL_STORAGE_AMOUNT_KEY,
    LOCAL_STORAGE_CURRENCY_KEY
} from '../../constants'

const cn = createCn('page');



const Page = () => {
    const [currencies, setCurrencies] = useState([])
    const [isSending, setIsSending] = useState(false)
    const setSpinner = useLoadingActionsContext()


    const onConvertClick = useCallback(async () => {
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        setSpinner(true)
        // send the actual request
        await fetch(createConvertAmountUrl(localStorage.getItem(LOCAL_STORAGE_AMOUNT_KEY), localStorage.getItem(LOCAL_STORAGE_CURRENCY_KEY)))
        // once the request is sent, update state again
        setIsSending(false)
        setSpinner(false)
    }, [isSending]) // update the callback if the state changes

    //useEffect(() => {
    //    (async () => {
    //        setSpinner(true)
    //        setIsSending(true)
    //        const result = await fetch(createConvertAmountUrl(LOCAL_STORAGE_AMOUNT_KEY, LOCAL_STORAGE_CURRENCY_KEY))
    //        const data = await result.json()
    //        setCurrencies(data)
    //        setSpinner(false)
    //        setIsSending(false)
    //    })()
    //}, [setSpinner]);
    console.log('22currencies',currencies)
    return (
        <section className={cn()}>
            <CurrencyInput />
            <button
                onClick={onConvertClick}
                type="button"
            >
                Convert
            </button>
            <div></div>
        </section>
    )
}

export default Page