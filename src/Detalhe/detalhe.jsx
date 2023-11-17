import { useParams } from "react-router-dom";
import Card from "../../Componente/Card";

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
    <Card atividade={atividade[0]}/>
);


}