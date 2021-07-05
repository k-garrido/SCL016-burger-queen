import React from 'react'

function Form() {
  return (
    <div>
      <form>
        <input 
          type="text" 
          placeholder= "Observaciones"
          className= "remark"
        />
        <input 
          type="text" 
          placeholder= "Nombre del Garzon"
          className= "waiterName"
        />
          <input 
          type="text" 
          placeholder= "N° de mesa"
          className= "tableNumber"
        />
          <button>Enviar a cocina</button>
      </form>
    </div>
  )
}

export default Form
