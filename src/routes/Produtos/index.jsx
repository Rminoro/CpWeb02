import{ Link } from "react-router-dom"
import { listaProdutos } from "../../../listaProdutos"


export default function Produtos(){

    return(
        <main>
            <h1>Produtos</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to ={`/Produtos/EditarProdutos/${prod.id}`}>
                        {prod.nome}
                        
                        
                    </Link>
                </div>
            ))}
        </main>
    )
}