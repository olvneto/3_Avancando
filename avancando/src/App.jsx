import './App.css';

import City from './assets/city.jpg';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {


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
    </>
  );
}

export default App;
