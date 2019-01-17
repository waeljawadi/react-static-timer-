import React from 'react'
import {verybold,thinner} from './TimerStyle.css'

const Timer = () => 
{
    const separateur = <span className="verybold">:</span>
return(
    <div>
        <span className="verybold one">00</span>
        {separateur}
        <span className="verybold two">30</span>
        {separateur}
        <span className="verybold three">00</span>
    </div>
)
}
export default Timer