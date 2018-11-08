import React from 'react'
import { QUOTES } from '../utils/quotes'

const styles = {
  author: {
    color: '#909198',
    fontStyle: 'italic',
  },
  quote: {
    color: '#3a3c48',
    fontFamily: "ff-dagny-web-pro",
    fontSize: '2em',
    lineHeight: '55px',
    fontStyle: 'italic',
    fontWeight: 900,
  },
  quoteWrapper: {
    borderLeft: '5px solid #e22d60',
    borderRadius: '10px',
    padding: '10px 40px',
    margin: '20px 0'
  }
}

const Quote = () => {
  const quote = QUOTES[Math.floor(Math.random()*QUOTES.length)];
  return (
    <div style={styles.quoteWrapper}>
      <p style={styles.quote}>{quote.quote}</p>
      <p style={styles.author}>{quote.author}</p>
    </div>
  )
}

export default Quote;