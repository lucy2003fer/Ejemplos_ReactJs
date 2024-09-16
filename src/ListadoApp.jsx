import { useState } from "react"
import { Tareas } from './components/Tareas';


const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? '👍' : '👎'}
    </li>
  )
}


export const ListadoApp = () => {
  let listado = [
    { id:0, nombre: "desayuno", visto: false },
    { id:1, nombre: "muy bonita", visto: true },
    { id:2, nombre: "me pongo bonita", visto: true },
    { id:3, nombre: "me baño", visto: false },
    { id:4, nombre: "tiendo mi camita", visto: true },
    { id:5, nombre: "me levanto", visto: true },
    { id:6, nombre: "suena la alarma", visto: true },
  ]

  const [arreglo, setArreglo] = useState(listado)

  const onAgregarTarea = (val) => {
    let valor = val.trin //es para que no lea espacios
    if (val < 1) return // para queel string no se envie vacio, por lo menos un caracter
    const envio = {
      id: arreglo.length,
      nombre: val,
      visto: false
    }
    setArreglo([...arreglo, envio]) //(...)para que no se elimine la lista y siga agregando
  }

  return (
    <div>
      <Tareas tareas={onAgregarTarea}></Tareas>
      <ol>
        {arreglo.map(item => <Item key={item.id} nombre={item.nombre} visto={item.visto} ></Item>)}
      </ol>
    </div>
  )
}
