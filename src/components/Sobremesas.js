import Sobremesa from './Sobremesa'

import pudim from "../imgs/pudim 2.png"
import petitGateau from "../imgs/petit-gateau.jpg"
import queijo from "../imgs/queijo.jpg"

const sobremesas = [{nome: "Pudim", descricao: "Apenas, pudim", preco: "R$ 7,90", id: "sobremesa1", img: pudim},
                {nome: "Petit Gateau", descricao: "Caro, mas simples de fazer", preco: "R$ 16,90", id: "sobremesa2", img: petitGateau},
                {nome: "Queijo com melaço", descricao: "Simples e bom", preco: "R$ 5,50", id: "sobremesa3", img: queijo}]

export default function Sobremesas(props){
    return(
        <div class="cardapio ">
            <p>Por fim, sua sobremesa</p>
            <ul class="pratos">
                {sobremesas.map(b => <Sobremesa nome={b.nome} descricao={b.descricao} preco={b.preco} id={b.id} img={b.img} 
                escolheuPrato={props.escolheuPrato} setEscolheuPrato={props.setEscolheuPrato} 
                escolheuBebida={props.escolheuBebida} setEscolheuBebida={props.setEscolheuBebida}
                escolheuSobremesa={props.escolheuSobremesa} setEscolheuSobremesa={props.setEscolheuSobremesa}
                />)}
            </ul>
        </div>
    )
}