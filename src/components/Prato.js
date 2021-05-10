import React from 'react'

export default function Prato(props){
    const {nome, descricao, preco, id, img, escolheuPrato, escolheuBebida, escolheuSobremesa, setEscolheuPrato} = props
    const [qtd, setQtd] = React.useState(1)
    const [isSelected, setIsSelected] = React.useState(false)

    function selecionarItem(){
        if(isSelected || escolheuPrato){
            return
        }
        const item = document.querySelector('#' + id)
        item.classList.add("selecionado")
        item.querySelector(".quantidade").classList.remove("oculto")
        setIsSelected(true)
        setEscolheuPrato(true)
        if(escolheuBebida && escolheuSobremesa){
            liberarPedido()
        }
    }

    function liberarPedido(){
        let nomePrato, nomeBebida, nomeSobremesa
        let valorPrato, valorBebida, valorSobremesa
        let numeroPratos, numeroBebidas, numeroSobremesas
        let textoNumeroPratos = "", textoNumeroBebidas = "", textoNumeroSobremesas = ""
        let valorTotal
        let mensagem
        let url

        const pratos = document.querySelectorAll(".prato")
        const bebidas = document.querySelectorAll(".bebida")
        const sobremesas = document.querySelectorAll(".sobremesa")

        for(let i = 0; i < pratos.length; i++){
            if(pratos[i].classList.contains("selecionado")){
                nomePrato = pratos[i].querySelector(".nome").innerText
                valorPrato = pratos[i].querySelector(".preco").innerText
                valorPrato = valorPrato.replace(",",".")
                valorPrato = valorPrato.slice(3,)
                valorPrato = parseFloat(valorPrato)
                numeroPratos = pratos[i].querySelector(".preco .quantidade span").innerText
                numeroPratos = parseInt(numeroPratos)
                numeroPratos++
            }
        }

        for(let i = 0; i < bebidas.length; i++){
            if(bebidas[i].classList.contains("selecionado")){
                nomeBebida = bebidas[i].querySelector(".nome").innerText
                valorBebida = bebidas[i].querySelector(".preco").innerText
                valorBebida = valorBebida.replace(",",".")
                valorBebida = valorBebida.slice(3,)
                valorBebida = parseFloat(valorBebida)
                numeroBebidas = bebidas[i].querySelector(".preco .quantidade span").innerText
                numeroBebidas = parseInt(numeroBebidas)
            }
        }

        for(let i = 0; i < sobremesas.length; i++){
            if(sobremesas[i].classList.contains("selecionado")){
                nomeSobremesa = sobremesas[i].querySelector(".nome").innerText
                valorSobremesa = sobremesas[i].querySelector(".preco").innerText
                valorSobremesa = valorSobremesa.replace(",",".")
                valorSobremesa = valorSobremesa.slice(3,)
                valorSobremesa = parseFloat(valorSobremesa)
                numeroSobremesas = sobremesas[i].querySelector(".preco .quantidade span").innerText
                numeroSobremesas = parseInt(numeroSobremesas)
            }
        }
        valorTotal = numeroPratos*valorPrato + numeroBebidas*valorBebida + numeroSobremesas*valorSobremesa
        valorTotal = valorTotal.toFixed(2)

        if(numeroPratos > 1){
            textoNumeroPratos = `(${numeroPratos}x)`
        }
        if(numeroBebidas > 1){
            textoNumeroBebidas = `(${numeroBebidas}x)`
        }
        if(numeroSobremesas > 1){
            textoNumeroSobremesas = `(${numeroSobremesas}x)`
        }

        mensagem = 
        `Olá, gostaria de fazer o pedido:
        - Prato: ${nomePrato} ${textoNumeroPratos}
        - Bebida: ${nomeBebida} ${textoNumeroBebidas}
        - Sobremesa: ${nomeSobremesa} ${textoNumeroSobremesas}
        Total: R$ ${valorTotal}`

        url = "https://wa.me/" + "5585985633070" + "?text=" + encodeURIComponent(mensagem)
        
        document.querySelector(".inferior #habilitado a").href = url
        habilitarPedido()
    }

    function habilitarPedido(){
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
            setEscolheuPrato(false)
            return
        }
        setQtd(qtd - 1)
    }

    function adicionarItem(){
        setQtd(qtd + 1)
        if(escolheuBebida && escolheuSobremesa){
            liberarPedido()
        }
    }

    return(
        <li class="prato" id={id} onClick={selecionarItem}>
            <img src={img}/>
            <div class="nome">{nome}</div>
            <div class="descricao">{descricao}</div>
            <div class="preco">
                <span>{preco}</span>
                <div class="quantidade oculto">
                    <button class="minus" onClick={excluirItem}>-</button>
                    <span>{qtd}</span>
                    <button class="plus" onClick={adicionarItem}>+</button>
                </div>
            </div>
            <ion-icon name="checkmark-circle" class="ion-icon oculto"></ion-icon>
        </li>
    )
}