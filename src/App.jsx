import './App.css'
import { Carro } from './carro'
import Header from './Header'
import { HelloWorld } from './HelloWorld'
import { ListaCarros } from './ListaCarros'
import { Pessoa } from './Pessoa'

function App() {

  return (
    <>
      <h1>QA</h1>
      <Header/>  
      <HelloWorld/>
      <Carro/>
      <ListaCarros
        marca="Ferrari"
        anoLancamento="2023"
      />
      <Pessoa
        foto='https://i.pinimg.com/originals/6f/b0/6f/6fb06fa4ce58151e9c98fa40b5e58132.gif'
        nome="Firmino"
        idade={30}
        profissao="QA"
      />
    </>
  )
}

export default App
