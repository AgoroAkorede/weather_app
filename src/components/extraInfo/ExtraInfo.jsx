
import React from 'react'
import './ExtraInfo.scss'
import {ReactComponent as PressureIcon } from '../../assets/pressure.svg'

function ExtraInfo({info}) {
    return (
        <div className="extra_info">
            { info }
           
        </div>
    )
}

export default ExtraInfo
