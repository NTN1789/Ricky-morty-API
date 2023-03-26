import React from "react";
import { API } from "./data";
import { Global } from "./styles/Global";
import { Card, Main} from "./styles/Main";
export default class App extends React.Component {
  state = {
    info: []
  };
  //uma função assyncrona que recebe uma promessa implicita como resposta, (de que alguma coisa deu certo errado)
  pegarPersonagens = async () => {
    const resposta = await API.get();
    console.log(resposta);

    //mapear itens da API
     const itensApi = resposta.data.results.map((item) => {
      return {
        ...item //spread
      };
    });
    //Atualizando o estado com os itens da api
    this.setState({
      info: itensApi
    });
  };
  //pré-montando a função que pega a API
  componentDidMount() {
    this.pegarPersonagens();
  }

  componentDidUpdate() {
    this.pegarPersonagens();
  }

  render() {
    return (
      <>
      
      
      
      <Global/>
   
      <Main>
      <article className="container-cards">
        {this.state.info.map((item) => (
          <>
            <Card>
            <h2>{item.name}</h2>
            <h2> estado:  {item.status}</h2>
            <h2> genero: {item.gender}</h2>
            <img src={item.image}  alt={item.name} />
            </Card>


            


          </>
        ))}
        </article>
        

    </Main>
    
    <button> next</button>
      </>

      
    );
  }
}
