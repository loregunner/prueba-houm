import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import "./styles/selectbox.css"
function Select(props) {

  const handleInputChange = (event) => {
    const objeto = event.target.value;
    props.listset([])
    let arrayFiltrado = [];
    if (objeto) {
      const tipo = objeto.title;
       Object.values(props.dataorigin).forEach(archivo => {
        if (archivo.type === tipo) {
          console.log(archivo)
          arrayFiltrado.push({ key: archivo.mal_id, title: archivo.title, image_url: archivo.image_url, type: archivo.type, episodes: archivo.episodes, synopsis: archivo.synopsis }) 
        } 
        props.listset(arrayFiltrado)
      })
    }else{
      props.listset(props.dataorigin)
    }
  }

  return (
    <Autocomplete
      className="box"
      id="combo-box-demo"
      options={props.tipo}
      value={props.tipo.title}
      getOptionLabel={(option) => option.title}
      onChange={(event, newVal) =>
        handleInputChange({ target: { value: newVal, name: "Tipo" } })
      }
      style={{ width: 200,}}
      renderInput={(params) => <TextField {...params} label="Tipo" variant="outlined" name="type" onChange={handleInputChange} />}
    />
  )
}

export default Select