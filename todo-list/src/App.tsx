import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { useState } from 'react'

export default function App() {
 

  const [cart, setCart] = useState<string[]>([]);
  const [inputValue, setinputValue] = useState("");
  /* const cart = ["watermeloon", "apple", "orange", "banana"] */

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://ava.sesisenai.org.br/course/view.php?id=17811" target="_blank">
          <img src="lab365.png" className="logo" alt="Lab Logo" />
        </a>
      </div>
      <Header 
      Title=  '🔥 Lista de Compras 🔥'
      Subtitle="adicione itens no seu carrinho!"/>
      <br/>
      <div style={{display:"flex", flexDirection:"column"}}>
        <span style={{fontSize:30}}>item a ser adicionado: {inputValue}</span>
      <input type="text" onChange={(e)=> setinputValue(e.target.value)}/>
      <br/>
      <button
      onClick={()=> {
        setCart([...cart, inputValue]);
        setinputValue("");
      }}
      
      >Adicionar ao Carrinho</button>


      <a
          href={`https://api.whatsapp.com/send/?phone=48988090292&text=ola+a+sua+compra+e+${cart.join(
            "+"
          )}`}
      >
        <button>🍅 Enviar por whatsapp 🍅</button>
      </a>

      </div>
      
      
      <ul>

        {cart.map((item)=>(<ol style={{fontSize:22}}>{item}</ol>))}
    
      </ul>
      {cart.length > 0 ? (
      <span style={{fontSize:22}}>
      Total de Itens: {cart.length}
      <br/>
      </span>
      ) : (
      <span style={{fontSize:22}}>
      Seu Carrinho está vazio 🤗 <br/>
      Venha conferir nossas ofertas 🎅 
      </span>)}
           
      
      
    </>
  )
}

//TODO: 1:38.40


