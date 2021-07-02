import React from 'react'
import GarzonHeader from './GarzonHeader.jsx'
import Filter from './Filter.jsx'
import State from './State.jsx'
import '../componentsCSS/GarzonPage.css'

function GarzonPage() {
    return (
        <div className="garzonContainer">
            <GarzonHeader />
            <div className="secondDiv">
                <h2 className="subtitle">Cuentas abiertas</h2>
                <Filter class="filterDiv"/>   
            </div>
            <div className="pendingOrders"></div>
            <State />
        </div>
    )
}

export default GarzonPage
