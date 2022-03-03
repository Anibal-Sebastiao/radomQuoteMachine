import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faTumblr } from "@fortawesome/free-brands-svg-icons"
import {faQuoteLeft, faQuoteRight, faArrowsRotate} from "@fortawesome/free-solid-svg-icons"

import { Card } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import axios from 'axios'

const getQuotes = async () => {
  const res = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  return await res.data.quotes;
}

function App() {
  
  const [quotes, setQuotes] = useState([])

  //const [quote, setQuote] = useState({})

  const quote  = useMemo(() => {

    /* .then(e => {
      setQuotes(e)
      const random = Math.floor(Math.random() * (Math.floor(quotes.length) - 0 + 1)) + 0
       data = quotes[0]
    }) */

    return getQuotes().then(e => e)
    
  });

  
  return (
    <div className="App">
      <main className="main d-flex justify-content-center align-items-center">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Text>
            
            <div>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <span class="px-2 p-5">
              {
                console.log(quote)
              }
              </span>
              
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
          </Card.Text>
          <Card.Link className="btn btn-primary" href="#"><FontAwesomeIcon icon={faTwitter} /></Card.Link>
          <Card.Link className="btn btn-primary" href="#"><FontAwesomeIcon icon={faTumblr} /></Card.Link>
          <Card.Link className="btn btn-primary" href="#"><FontAwesomeIcon icon={faArrowsRotate} /></Card.Link>
        </Card.Body>
      </Card>
      </main> 
    </div>
  )
}

export default App
