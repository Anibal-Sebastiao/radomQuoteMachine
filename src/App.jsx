import React, { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons"
import {faArrowsRotate, faAt} from "@fortawesome/free-solid-svg-icons"
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
  }, quote)
  
 

  const handleQuote = (e) => { 
    e.preventDefault()
    getQuotes()
  }
  

  
  return (
    <div className="App">
      <main className="main d-flex justify-content-center align-items-center">
        <Card style={{ width: '30rem' }} id="quote-box" className="shadow-lg p-4 mb-5 bg-body rounded-0">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p id="text"><i>{ quote && quote.quote}</i></p>
              <footer className="blockquote-footer">
                <cite id="author" title="Quote Author">{quote && quote.author}</cite>
              </footer>
            </blockquote>
            
            <div className="my-2 border border-light bg-light"></div>
          
            <div className="text-end">
              <Card.Link className="text-dark text-decoration-none " href="https://www.linkedin.com/in/anibal-antonio/"
              target="_blank"> By <FontAwesomeIcon icon={faAt} />anibal.antonio
              </Card.Link>
            </div>
            
          </Card.Body>
          <div id="quote-buttons" className="btn-group" role="group">
            <Card.Link className="btn btn-primary" href="#" id="new-quote" onClick={handleQuote}><FontAwesomeIcon icon={faArrowsRotate} /></Card.Link>
            <Card.Link className="btn btn-primary" id="tweet-quote" href={quote &&
              `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= 
              encodeURIComponent( "${quote.quote}"${quote.author})`
            }
            target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </Card.Link>
            <Card.Link className="btn btn-primary" href={quote && 
            `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=
            ${encodeURIComponent(quote.quote)} 
            &content= ${encodeURIComponent(quote.author)}
            &canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
            } 
            target="_blank">
              <FontAwesomeIcon icon={faTumblr} />
            </Card.Link>
            </div>
        </Card>
      </main> 
    </div>
  )
}

export default App
