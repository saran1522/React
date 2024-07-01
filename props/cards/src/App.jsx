import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contact from './Contact'

//we are calling Contact componant with 4 arguments which we can reuse in componant
function App() {
  return (
    <div className="contacts">
        <Contact 
            img="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg" 
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
        />
        <Contact 
            img="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
        />
        <Contact 
            img="https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973_1280.jpg"
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        <Contact 
            img="https://cdn.pixabay.com/photo/2015/02/19/12/48/indian-642055_1280.jpg"
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
        />
    </div>
)
}

export default App
