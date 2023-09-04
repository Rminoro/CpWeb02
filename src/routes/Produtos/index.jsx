import{ Link } from "react-router-dom"
import { listaProdutos } from "../../../listaProdutos"


export default function Produtos(){

    return(
        <>
            <h1>Produtos</h1>
            {listaProdutos.map(prod =>(
                <div key={prod.id}>
                    <Link to ={'/Produtos/editar/${prod.id}'}>
                        Editar o produto : {prod.nome}
                    </Link>
                </div>
            ))}
        </>
    )
}