import Topo from './Topo'
import Footer from './Footer'
import Pratos from './Pratos'
import Bebidas from './Bebidas'
import Sobremesas from './Sobremesas'

import React from 'react'

export default function App(){
    const [escolheuPrato, setEscolheuPrato] = React.useState(false)
    const [escolheuBebida, setEscolheuBebida] = React.useState(false)
    const [escolheuSobremesa, setEscolheuSobremesa] = React.useState(false)


    return(
        <div class="conteudo">
            <Topo />
            <Footer />
            <Pratos escolheuPrato={escolheuPrato} setEscolheuPrato={setEscolheuPrato} 
            escolheuBebida={escolheuBebida} setEscolheuBebida={setEscolheuBebida} 
            escolheuSobremesa={escolheuSobremesa} setEscolheuSobremesa={setEscolheuSobremesa} />

            <Bebidas escolheuPrato={escolheuPrato} setEscolheuPrato={setEscolheuPrato} 
            escolheuBebida={escolheuBebida} setEscolheuBebida={setEscolheuBebida} 
            escolheuSobremesa={escolheuSobremesa} setEscolheuSobremesa={setEscolheuSobremesa} />

            <Sobremesas escolheuPrato={escolheuPrato} setEscolheuPrato={setEscolheuPrato} 
            escolheuBebida={escolheuBebida} setEscolheuBebida={setEscolheuBebida} 
            escolheuSobremesa={escolheuSobremesa} setEscolheuSobremesa={setEscolheuSobremesa} />
        </div>
    )
}