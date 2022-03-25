import './App.css';
import React,{useState,useEffect} from 'react';
import Card from "./Card";
import axios from "axios";
import faker from '@faker-js/faker';
function App() {
    const [name,setName] = useState('Wolverine')
    const [showCard,setShowCard] = useState(true)

    //const [cards,setCards] = useState([])
    const [card,setCard] = useState([])
    const [id,setId] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).
        then(res=>{
            //setCards(res.data)
            setCard(res.data)
        },[id])
    })
    const tombol=(
        <div>
            <button className="w3-button w3-red">Delete</button>
        </div>
    )

    const changeNameHandler= (name) => {
        setName(name)
    }
    const changeInputHandler = (event,id) => {
        /*
        //card yang mana yang mau diupdate
        const cardIndex = cards.findIndex(card=>card.id==id)
        //membuat copy dari cards
        const cards_copy=[...cards]
        //lalu mengubah data dari card yang sesuai
        cards_copy[cardIndex].name = event.target.value
        //update cards dengan setCards
        setCards(cards_copy)
        //setName(event.target.value) */
    }
    const toggleShowCard = ()=> setShowCard(!showCard)
    const deleteCardHandler=(cardIndex)=> {
        /*
        const cards_copy = [...cards]
        cards_copy.splice(cardIndex,1)
        console.log('cards_copy',cards_copy)
        console.log('cards',cards)
        setCards(cards_copy) */
    }
    const cardsMarkup = showCard?
        (
            //seperti for each, jadi untuk setiap card di dalam cards, akan ditampilkan datanya
            //cards.map((card,index)=><Card name={card.name}
                <Card name={card.name}
                  phone={card.phone}
                  key={card.id}
                  onChangeInput={(event)=>changeInputHandler(event,card.id)}
                      //onDelete={()=>deleteCardHandler(index)}
                >{tombol}</Card>
            //)
        ): null

  return (
    <div className="App">
        <button className="w3-button w3-purple" onClick={toggleShowCard}>Show/Hide</button>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        {cardsMarkup}
    </div>
  );
}

export default App;
