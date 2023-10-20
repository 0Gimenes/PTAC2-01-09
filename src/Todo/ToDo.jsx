import { useState } from "react";
import { Link} from "react-router-dom";
import "./style.css";
import { useEffect } from "react";


export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState( listaLocalStorage || []);
    const [id, setId] = useState(1);
    const [album, setalbum] = useState("");
    const [musica, setmusica] = useState("");
    const [tempo, settempo] = useState("");

useEffect(()=>{localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
            musica: musica,
            album: album,
            tempo: tempo
        }]);
        setId(id + 1);
        setAtividade("");
    };
    const remover = (id) => {

        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/

        const auxLista = [];
        lista.map((list) => {
            if (list.id !== id) {
                auxLista.push(list);
            }
        });
        setLista(auxLista);
    }
    return (
        <div class="container">
            <Link to="/">home</Link>
            <img class = "jukebox" src="https://o.remove.bg/downloads/34c3af20-9a3c-4b9a-9b36-42690e5dcbeb/jukebox-classic-pequeno-_27296-01-removebg-preview.png"></img>
            <h1>Lista de Musicas 🎸</h1>
            <form onSubmit={salvar}>

                <h4><i>Album</i></h4>  
                <input type="text"
                    value={album}
                    onChange={(e) => { setalbum(e.target.value) }} />
               
          
      
<h4><i>Musica</i></h4>
            <input type="text"
                    value={musica}
                    onChange={(e) => { setmusica(e.target.value) }} />

<h4><i>Tempo</i></h4>
                       <input type="text"
                    value={tempo}
                    onChange={(e) => { settempo(e.target.value) }} />
<br></br>
<br></br>
                <button>ADICIONAR</button>
            </form>

            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <li>
                        <p>Album: {ativ.album}</p>
                        <p>Musica: {ativ.musica}</p>
                        <p>Tempo: {ativ.tempo}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}