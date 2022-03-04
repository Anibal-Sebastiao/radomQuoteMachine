import React, { useEffect } from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons"
import {faQuoteLeft, faQuoteRight, faArrowsRotate, faUserAlt} from "@fortawesome/free-solid-svg-icons"


import { Card } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios'


function App() {
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState([])
  
  const requestQuote = async () => { 
    const _quotes = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    await setQuotes(_quotes.data.quotes)
    await getQuotes()
  }

  const getQuotes = () => {
    const random = Math.floor(Math.random() * (Math.floor((quotes.length - 1)) - 0 + 1)) + 0
    setQuote(quotes[random])
  }

  useEffect(() => {
    requestQuote()
  }, [])
  
 

  const handleQuote = (e) => { 
    e.preventDefault()
    getQuotes()
  }
  

  
  return (
    <div className="App">
      <main className="main d-flex justify-content-center align-items-center">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Text>  
            <div>
              { quote &&  
                <>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                  <span className="px-2 p-2">{quote.quote}</span>
                  <FontAwesomeIcon icon={faQuoteRight} />
                  <p className="px-0 p-2">{/* <FontAwesomeIcon icon={faUserAlt} /> */} ~{quote.author}</p>
                </>
              }
            </div>
          </Card.Text>
          <Card.Link className="btn btn-primary" href="#"><FontAwesomeIcon icon={faTwitter} /></Card.Link>
          <Card.Link className="btn btn-primary" href="#"><FontAwesomeIcon icon={faTumblr} /></Card.Link>
          <Card.Link className="btn btn-primary" href="#" onClick={handleQuote}><FontAwesomeIcon icon={faArrowsRotate} /></Card.Link>
        </Card.Body>
      </Card>
      </main> 
    </div>
  )
}

export default App
