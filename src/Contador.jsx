import { useState } from "react"

function Contador() {
    const [valor, setValor] = useState(0)

    function aumentar() {
        setValor(prev => {
            if (prev >= 999) {
                window.alert("Valor máximo alcançado!");
                return 998;
            }
            return prev + 1;
        });
    }

    function diminuir() {
        setValor(prev => (prev <= 0 ? 0 : prev - 1));
    }

    return (
        <div>
            <h1>Contador: {valor}</h1>
            <div id="botoes-do-contador">
                <button onClick={aumentar}>+</button>
                <button onClick={diminuir}>-</button>
            </div>
        </div>
    )
}

export default Contador