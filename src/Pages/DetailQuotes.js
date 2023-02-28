import React from 'react'
import { Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const Dummy_QUOTES= [
    {
        id:1 ,author:'uzair' ,text:'learning react is not so easy'
    }
    ,{
        id:2,author:'Hansnain' ,text:'lets get same snacks'
    }

]
const DetailQuotes = () => {

  const params=  useParams()
  const quote=Dummy_QUOTES.find(quote => quote.id==params.quoteId)
   if(!quote){
    return <p>this is not quote</p>
   }
  return (
    <>
    <HighlightedQuote  author={quote.author} text={quote.text}/>
    
    <div>{params.quoteId}</div>
    <Route path={`/quotes/${params.quoteId}/Comments`} >
<Comments/>
    </Route>

    </>
  )
}

export default DetailQuotes