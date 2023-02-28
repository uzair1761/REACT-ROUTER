import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
   

const Dummy_QUOTES= [
    {
        id:1 ,author:'uzair' ,text:'learning react is not so easy'
    }
    ,{
        id:2,author:'Hansnain' ,text:'lets get same snacks'
    }

]


const AllQuotes = () => {
  return (
    <div>
        <QuoteList quotes={Dummy_QUOTES}/>
    </div>
  )
}

export default AllQuotes