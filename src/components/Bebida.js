export default function Bebida(props){
    const {nome, descricao, preco, id, img} = props
    return(
        <li class="bebida" id={id} onclick="marcar_opcao('bebida1','bebida')">
            <img src={img}/>
            <div class="nome">{nome}</div>
            <div class="descricao">{descricao}</div>
            <div class="preco">{preco}</div>
            <ion-icon name="checkmark-circle" class="ion-icon oculto"></ion-icon>
        </li>
    )
}