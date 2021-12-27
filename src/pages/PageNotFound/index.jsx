import React from 'react'
import { Redirect } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            {<Redirect to='/'/>}
        </div>
    )
}

export default PageNotFound;
