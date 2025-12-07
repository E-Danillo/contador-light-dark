import { useState } from "react"

function Tema() {
    const [tema, setTema] = useState(false)

    function mudarTema() {
    setTema(prev => {
        const novoTema = !prev
        document.body.classList.toggle("light-mode", novoTema)
        return novoTema
    })
    }

    return (
    <>
        <button id="botao-tema" onClick={mudarTema}>Mudar Tema</button>
    </>
    )
}

export default Tema
