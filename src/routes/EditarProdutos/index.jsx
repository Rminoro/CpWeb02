import { useParams } from "react-router-dom"
import { listaProdutos } from "../../../listaProdutos"
import "./style.css"


export default function EditarProdutos(){
    
    const lista = listaProdutos
    // const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter (prod => prod.id == id)
    const produto = proc[0]

    // const salvar = () =>{
    //     alert('Produto: ${produto.nome} editado com sucesso!')
    //     return navegacao('/Produtos')
    // }

    return(
        <main>
            <h1>{produto.nome}</h1>
            <p>Fotos do {produto.nome} abaixo </p>
            {/* <button onClick={salvar}> Salvar</button> */}
            <p> Descrição: {produto.descricao} </p>
            <p> Preço: {produto.preco} </p>
            
            <img id="imgProd"src={produto.foto}></img>
            
        </main>
    
    )

}