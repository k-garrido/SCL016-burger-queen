import React from 'react'
import ComandaHeader from './ComandaHeader.jsx'
import Menu from './Menu.jsx'

function ComandaPage() {
    return (
        <div className="comandaContainer">
            <ComandaHeader titleName="Comanda actual"/>
            <Menu />
        </div>  
    )
}

export default ComandaPage
