import axios from "axios";
import { useState } from "react";
import 'tailwindcss/tailwind.css';


type QuoteState = {
       content: string;
}
export default function Index() {
    const [quote, setQuote] = useState<QuoteState>({
        content: '',
    })

  
    function getQuote() {
        axios.get('https://api.quotable.io/random')
            .then(res => {
                // console.log(res.data.content,res.data.id )
                setQuote(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
      
         <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="sm:text-xl font-bold mb-8">Get a quote</h1>
        <button
          onClick={getQuote}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Quote
        </button>
        <p className="m-8 p-4 decoration-primary-500 'sm':'text-xl' md:text-2xl">{quote.content}</p>
      </div>
    </div>
      
    )
}
