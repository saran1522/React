import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Jokes from './Jokes'
import jokesData from './jokesData'

//Instead of passing argument 1 by 1 we are taking argument from Jokes.jsx file as an array of objects (jokesData)
//Then we are passing array's data to Jokes componant through a map(it will call the Jokes componant for all the Jokes objects present in array) which is returning a new array 'renderJokes'
//Now this renderJokes consist of all the data to print on the document so we can print it

function App() {
    const renderJokes=jokesData.map(joke=>{
        return (
            <Jokes
            setup={joke.setup}
            punchline={joke.punchline}/>
        )
    }  
    )


  return (
    <div className="jokesClass">
        {renderJokes}
    </div>
)
}

export default App
