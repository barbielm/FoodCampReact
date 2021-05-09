import Topo from './Topo'
import Footer from './Footer'
import Pratos from './Pratos'
import Bebidas from './Bebidas'
import Sobremesas from './Sobremesas'

export default function App(){
    return(
        <div class="conteudo">
            <Topo />
            <Footer />
            <Pratos />
            <Bebidas />
            <Sobremesas />
        </div>
    )
}