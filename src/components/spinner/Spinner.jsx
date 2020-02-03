import React from 'react'
import './Spinner.css'
import { useLoadingContext } from '../../context/LoadingContext'

import { createCn } from 'bem-react-classname';


const cn = createCn('spinner');

const Spinner = () => {
    const isLoading = useLoadingContext()
    return isLoading ? (
        <div className={cn()}>
            <p>Loading...</p>
        </div>
    ) : null
}

export default Spinner