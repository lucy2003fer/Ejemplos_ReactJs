import { useState } from "react"

export const Tareas = ({ tareas }) => {
    const [inputValue, setInputValue] = useState("")
    const onInputChangue = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        tareas(inputValue)
        setInputValue("")
    }
    return (
        <div>
            <form onSubmit={onSubmit} >
                <input type="text" placeholder="escriba" value={inputValue} onChange={onInputChangue} />
            </form>
        </div>
    )
}
