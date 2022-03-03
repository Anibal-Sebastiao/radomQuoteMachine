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
  useEffect(() => {
    getQuotes().then(e => console.log(e))
  });

  
  return (
    <div className="App">
      <main className="main d-flex justify-content-center align-items-center">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          {quotes.map((e,i) => <p key={i}>e</p>)}
          <Card.Text>
            <blockquote >
              <FontAwesomeIcon icon={faQuoteLeft} />
              <span class="px-2 p-5">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </span>
              
              <FontAwesomeIcon icon={faQuoteRight} />
            </blockquote>
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
