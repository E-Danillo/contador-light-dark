import { useState } from "react"
import Tema from './Tema.jsx'

function Contador() {
    const [display, setDisplay] = useState(0)
    const [valor, setValor] = useState("") // input sempre vem como string, quando prescisarmos, convertemos com Number()

    function aumentar() {
        setDisplay(prev => {
            if (prev >= 999) {
                alert("Limite Atingido! ( Número 999 )");
                return 999;
            }
            return prev + 1;
        });
    }

    function adicionarValor() {
    let valorCerto = Number(valor) 

        setDisplay(prev => {
            if (valorCerto >= 999 || valorCerto + prev >= 999) {
            alert("Limite Atingido! ( Número 999 )")
            return 999 
        }
    return prev + valorCerto
        })

    setValor("")
    }

    function diminuir() {
        setDisplay(prev => (prev <= 0 ? 0 : prev - 1));
    }

    function reset() {
        setDisplay(0)
    }

    return (
        <div id="conteiner-principal">
            <h1>Contador: <span className={display === 0? '' : display % 2 === 0? "par" : "impar"}>{display}</span></h1>
            <div id="botoes-do-contador">
                <button onClick={aumentar}>+</button>
                <button onClick={diminuir}>-</button>
                <button onClick={reset}>Resetar</button>
                <input type="number" value={valor}
                onChange={e => setValor(e.target.value)}/>
                <button type="submit" onClick={adicionarValor}>Adicionar</button>
                <Tema />
            </div>
        </div>
    )
}

export default Contador