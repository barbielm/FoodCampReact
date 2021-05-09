import Prato from './Prato'

import frango from "../imgs/frango_yin_yang 1.png"
import lamem from "../imgs/Lamem_naruto.jpg"
import pastel from "../imgs/pastel.png"

const pratos = [{nome: "Frango Yin Yang", descricao: "Um pouco de batata, um pouco de salada", preco: "R$ 14,90", id: "prato1", img: frango},
                {nome: "Lamém do naruto", descricao: "Venha sentir o sabor da nostalgia", preco: "R$ 20,90", id: "prato2", img: lamem},
                {nome: "Pastelzin de carne", descricao: "O bom e velho", preco: "R$ 4,90", id: "prato3", img: pastel}]

export default function Pratos(){
    return(
        <div class="cardapio ">
            <p>Primeiro, seu prato</p>
            <ul class="pratos">
                {pratos.map(p => <Prato nome={p.nome} descricao={p.descricao} preco={p.preco} id={p.id} img={p.img} />)}
            </ul>
        </div>
    )
}