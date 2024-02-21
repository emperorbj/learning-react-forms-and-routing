import { createContext } from "react"
import { useContext } from "react"
import { TheContext } from "./App"

function Context(){
    let insert = useContext(TheContext)

    return(

        <h1> Hello {insert} </h1>
    )
}

export default Context