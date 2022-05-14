
import React from 'react'
import {Route,useNavigate} from 'react-router-dom'
import './error.scss'

function ErrorPage() {
    const navigate= useNavigate()
    return (
        <div className='errorpage'>
            <h1 className='title'>404</h1>    
            
            <div className='errorpage_info'>Looks like you aren't on earth</div>
            <button className='errorpage_button' onClick={()=>navigate('/')}>Go Home</button>
        </div>
    )
}

export default ErrorPage
