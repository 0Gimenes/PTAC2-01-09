import { useParams } from "react-router-dom"
export default function Detalhe(){
    const {id} = useParams();
    const lista = JSON.parse( localStorage.getItem("lista"));
    const atividade = lista.filter( (ativ) => {
if(ativ.id == id){
    return ativ;
}
return null;
    }
    )
console.log(lista);

return(
    <div>
    <h1>Olá {id}</h1>
    </div>
);


}