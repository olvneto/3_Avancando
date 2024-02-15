import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  //const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", km:0, color:"Amarela", newCar:true},
    {id: 2, brand: "Kia", km:25633, color:"Branco", newCar:false},
    {id: 3, brand: "Renault", km: 2536, color:"Azul", newCar:false},
  ];

  const pessoas = [
    {id: 1, name: "Paulo", age:22, job:"Engenheiro"},
    {id: 2, name: "Maria", age:16, job:"Estudante"},
    {id: 3, name: "Lucrécia", age: 45, job:"Advogada"},
  ];

  function showMessage(){
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");
  
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <div>
        <h1>Seção 3</h1>
        {/* Imagem em public*/}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />  
      <ListRender />
      <CondicionalRender />
      {/* Props */}
      <ShowUserName name= {userName} />
      {/* Destructuring */}
      <CarDetails brand="Honda" km={25000} color="Azul" newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Branco" newCar={true} />
      <CarDetails brand="Fiat" km={5000} color="Vermelho" newCar={false}/>

      {/* Looping em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
      ))}

      {/* Fragments */}
      <Fragment propFrag="Parágrafo"/>

      {/* Children */}
      <Container myValue="Testando">
        <p>Este é o conteúdo</p>
      </Container>

      {/* Executar função */}
        <ExecuteFunction myFunction= {showMessage} />

      {/*  */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* Desafio */}
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} name={pessoa.name} age={pessoa.age} job={pessoa.job} />
      ))}
    </>
  );
}

export default App;
