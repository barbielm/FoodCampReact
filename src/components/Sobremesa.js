export default function Sobremesa(props){
    const {nome, descricao, preco, id, img} = props
    return(
        <li class="sobremesa" id={id} onclick="marcar_opcao('sobremesa1','sobremesa')">
            <img src={img}/>
            <div class="nome">{nome}</div>
            <div class="descricao">{descricao}</div>
            <div class="preco">{preco}</div>
            <ion-icon name="checkmark-circle" class="ion-icon oculto"></ion-icon>
        </li>
    )
}