import { useState } from "react"

function Contador() {
    const [valor, setValor] = useState(0)

    function aumentar() {
        setValor(valor + 1)
    }

    function diminuir() {
        setValor(valor <= 0? 0 : valor - 1)
    }

    return (
        <div>
            <h1>Contador: {valor}</h1>
            <div id="botoes">
                <button onClick={aumentar}>+</button>
                <button onClick={diminuir}>-</button>
            </div>
        </div>
    )
}

export default Contador