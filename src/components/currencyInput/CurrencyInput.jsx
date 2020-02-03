import React, {useState, useEffect} from 'react'
import { useLoadingActionsContext } from '../../context/LoadingContext'

import "./CurrencyInput.css";
import { createCn } from 'bem-react-classname';

import {
    LOCAL_STORAGE_AMOUNT_KEY,
    LOCAL_STORAGE_CURRENCY_KEY
} from '../../constants'

const cn = createCn('currency-input');

export const CurrencyInput = props => {
    const [currencies, setCurrencies] = useState([])
    const setSpinner = useLoadingActionsContext()
    useEffect(() => {
        (async () => {
            setSpinner(true)
            const result = await fetch('https://openexchangerates.org/api/currencies.json')
            const data = await result.json()
            setCurrencies(data)
            setSpinner(false)
        })()
    }, [setSpinner]);

    return (
        <div className={cn()}>
            <input
                onChange={(e) => {localStorage.setItem(LOCAL_STORAGE_AMOUNT_KEY, e.target.value)}}
                type="number"
                defaultValue={localStorage.getItem(LOCAL_STORAGE_AMOUNT_KEY) || 0}
            />SEK to ->
            <select
                onChange={(e) => {localStorage.setItem(LOCAL_STORAGE_CURRENCY_KEY, e.target.value)}}
            >
                <option
                    key='empty-currency'
                    value=""
                >
                    --Please choose an option--
                </option>
                {Object.keys(currencies).map((currencyAbbr) => (
                    <option
                        key={currencyAbbr}
                        value={currencyAbbr}
                        selected={currencyAbbr === localStorage.getItem(LOCAL_STORAGE_CURRENCY_KEY)}
                    >
                        {`${currencyAbbr} (${currencies[currencyAbbr]})`}
                    </option>
                ))}
            </select>
        </div>
    )
}
