import React from 'react'
import yellowState from '../images/yellowState.png'
import blueState from '../images/blueState.png'
import redState from '../images/redState.png'
import greenState from '../images/greenState.png'
import blackState from '../images/blackState.png'
import '../componentsCSS/state.css'

function State() {
    return (
        <div className="states">
        <h3 className="stateMainTitle">Estados de la comanda</h3>
        <div className="stateContainer">
            <div className="state">
                <img src= {yellowState} alt="Yellow State" className="stateImg" />
                <p className="stateTitle">Productos en preparación.</p>
            </div>
            <div className="state">
                <img src= {blueState} alt="Blue State" className="stateImg"/>
                <p className="stateTitle">Productos listos para retirar en cocina.</p>
            </div>
            <div className="state">
                <img src= {redState} alt="Red State" className="stateImg"/>
                <p className="stateTitle">Problemas en la comanda.</p>
            </div>
            <div className="state">
                <img src= {greenState} alt="Green State" className="stateImg"/>
                <p className="stateTitle">Productos entregados al cliente.</p>
            </div>
            <div className="state">
                <img src= {blackState} alt="Black State" className="stateImg"/>
                <p className="stateTitle">Problemas en la comanda.</p>
            </div>
        </div>
        </div>
    )
}

export default State
