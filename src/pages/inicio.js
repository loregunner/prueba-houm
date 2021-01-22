import React, { useEffect } from "react"
import axios from "axios"
import "./styles/inicio.css"

function Anime(props) {
  async function agarrando (){
try{
const respuesta = await axios({
url: "https://api.jikan.moe/v3/search/anime?q=terror",
method: "GET"
})
return respuesta
}catch(e){
console.log(e);
}
    }


useEffect( () => {
        async function load(){
            const respuesta = await agarrando()
            const datAnime= await respuesta.data.results
            props.listset(datAnime)
            props.setdataorigin(datAnime)
            return respuesta
        }

        load()
    
    }, [])
  
  return (<div className="init">
      <h1 className="titulo">RECOMENDACIONES:</h1>
    <div className="data">
      <div className="arreglo">
        {
          props.data.map(item =>(
            <div className="listaData" key={item.mal_id}>
              <h2>{item.title} </h2>
              <img className="img" src={item.image_url}/>
              <div className="opciones">
                <div className="type">{item.type}</div>
                <div className="episodios">{item.episodes}</div>
                <p>{item.synopsis}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
</div>
)
    
}
  export default Anime
