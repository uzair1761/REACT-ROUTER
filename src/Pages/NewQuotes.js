import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom'

const NewQuotes = () => {
    const history=useHistory();
const addQuoteHandler =QuoteData=>{
   console.log(QuoteData)
   history.push('/quotes')
}
  return (
    <div>
       <h1>add</h1>
        <QuoteForm  onAddQuote={addQuoteHandler}/>
    </div>
  )
}

export default NewQuotes