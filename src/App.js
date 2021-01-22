import React, {useState} from "react"
import './App.css';
import Header from './componentes/header';
import Anime from "./pages/inicio";
import Select from "./componentes/selectbox";
import Footer from "./componentes/footer";
function App() {
  const[lista, setLista]=useState([]); 
  const [dataOriginal, setDataOriginal]=useState([]);
  const data = Array.from(lista);
  const [tipo, setTipo] = useState([
    {title:"OVA"},
    {title:"TV"},
    {title:"Movie"},
    {title:"Special"},
    {title:"Unknown"}
])

  return (
    <div className="App">
      <Header/>
      <Select  data={data} listset={setLista} tipo={tipo} settipo={setTipo} dataorigin={dataOriginal}/>
      <Anime data={data} listset={setLista} tipo={tipo} settipo={setTipo} dataorigin={dataOriginal} setdataorigin={setDataOriginal}/>
    <Footer/>
    </div>
  );
}

export default App;
