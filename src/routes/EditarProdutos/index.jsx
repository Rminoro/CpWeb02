import { useParams } from "react-router-dom";
import { listaProdutos } from "../../../listaProdutos";
import "./style.css";
import Zflip4 from "../../assets/Zflip4.png";
import iphone14promax from "../../assets/iphone14promax.png";
import SamsungFES20 from "../../assets/SamsungFES20.png";
import Airpod from "../../assets/Airpod.png";
import Teclado from "../../assets/tecladoHyperX.png"

export default function EditarProdutos() {

    const lista = listaProdutos
    // const navegacao = useNavigate()
    const { id } = useParams();

    const proc = lista.filter(prod => prod.id == id)
    const produto = proc[0];

    // const salvar = () =>{
    //     alert('Produto: ${produto.nome} editado com sucesso!')
    //     return navegacao('/Produtos')
    // }

    return (
        <main>
            <h1 id="container">{produto.nome}</h1>
           
            {/* <button onClick={salvar}> Salvar</button> */}
            <p> Descrição: {produto.descricao} </p>
            <p> Preço: {produto.preco} </p>

            {produto.nome === "Iphone 14 Pro max" && (
                <img id="imgProd" src={iphone14promax} alt={produto.nome} />
            )}
            {produto.nome === "Samsung Zflip" && (
                <img id="imgProd" src={Zflip4} alt={produto.nome} />
            )}
             {produto.nome === "Samsung FE S20" && (
                <img id="imgProd" src={SamsungFES20} alt={produto.nome} />
            )}
             {produto.nome === "AirPods" && (
                <img id="imgProd" src={Airpod} alt={produto.nome} />
            )}
            {produto.nome === "Teclado HyperX Alloy" && (
                <img id="imgProd" src={Teclado} alt={produto.nome} />
            )}
        </main>
            
        
    
    )

}