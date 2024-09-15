import { useState } from "react"

const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? '👍' : '👎'}
    </li>
  )
}


export const ListadoApp = () => {

  const addTask = () => {
    setArreglo([...arreglo, { nombre: "nuevisimo", visto: false }])
  }

  let listado = [
    { nombre: "desayuno", visto: false },
    { nombre: "muy bonita", visto: true },
    { nombre: "me pongo bonita", visto: true },
    { nombre: "me baño", visto: false },
    { nombre: "tiendo mi camita", visto: true },
    { nombre: "me levanto", visto: true },
    { nombre: "suena la alarma", visto: true },
  ]

  const [arreglo, setArreglo] = useState(listado)

  return (
    <div>
      <ol>
        {arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} visto={item.visto} ></Item>)}
      </ol>
      <button onClick={addTask}>click</button>
    </div>
  )
}
