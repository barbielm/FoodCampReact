import Bebida from './Bebida'

import coca from "../imgs/coquinha_gelada 1.png"
import saoGeraldo from "../imgs/sao_geraldo.jpg"
import pitu from "../imgs/pitu.jpg"

const bebidas = [{nome: "Coquinha gelada", descricao: "Lata 350ml", preco: "R$ 4,90", id: "bebida1", img: coca},
                {nome: "São Geraldo", descricao: "Pitchulinha de 250ml", preco: "R$ 2,50", id: "bebida2", img: saoGeraldo},
                {nome: "Cachaça Pitú", descricao: "1 litro de cana", preco: "R$ 10,00", id: "bebida3", img: pitu}]

export default function Bebidas(){
    return(
        <div class="cardapio ">
            <p>Agora, sua bebida</p>
            <ul class="pratos">
                {bebidas.map(b => <Bebida nome={b.nome} descricao={b.descricao} preco={b.preco} id={b.id} img={b.img} />)}
            </ul>
        </div>
    )
}