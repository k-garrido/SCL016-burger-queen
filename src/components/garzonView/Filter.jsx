import React from 'react'

function Filter(props) {
    const filterTable = ()  => {
        console.log('me diste click')
    }

    return (
        <React.Fragment>
            <input type="button" value="Mostrar mesa" className={props.class} onClick={ filterTable }/>
        </React.Fragment>
    )
}

export default Filter
