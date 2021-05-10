import React from 'react'

export default function Sobremesa(props){
    const {nome, descricao, preco, id, img, escolheuPrato, escolheuBebida, escolheuSobremesa, setEscolheuSobremesa} = props
    const [qtd, setQtd] = React.useState(1)
    const [isSelected, setIsSelected] = React.useState(false)

    function selecionarItem(){
        if(isSelected || escolheuSobremesa){
            return
        }
        const item = document.querySelector('#' + id)
        item.classList.add("selecionado")
        item.querySelector(".quantidade").classList.remove("oculto")
        setIsSelected(true)
        setEscolheuSobremesa(true)
        if(escolheuPrato && escolheuBebida){
            liberarPedido()
        }
    }

    function liberarPedido(){
        document.querySelector(".inferior #habilitado").classList.remove("oculto")
        document.querySelector(".inferior #desabilitado").classList.add("oculto")
    }

    function desabilitarPedido(){
            document.querySelector(".inferior #habilitado").classList.add("oculto")
            document.querySelector(".inferior #desabilitado").classList.remove("oculto")
    }

    function desmarcarItem(){
        const item = document.querySelector('#' + id)
        item.classList.remove("selecionado")
        item.querySelector(".quantidade").classList.add("oculto")
    }

    function excluirItem(){
        if(qtd === 1){
            desmarcarItem()
            desabilitarPedido()
            setIsSelected(false)
            setEscolheuSobremesa(false)
            return
        }
        setQtd(qtd - 1)
    }

    return(
        <li class="sobremesa" id={id} onClick={selecionarItem}>
            <img src={img}/>
            <div class="nome">{nome}</div>
            <div class="descricao">{descricao}</div>
            <div class="preco">
                <span>{preco}</span>
                <div class="quantidade oculto">
                    <button class="minus" onClick={excluirItem}>-</button>
                    <span>{qtd}</span>
                    <button class="plus" onClick={() => setQtd(qtd + 1)}>+</button>
                </div>
            </div>
        </li>
    )
}