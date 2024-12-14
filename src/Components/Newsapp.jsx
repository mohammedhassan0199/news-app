import React, { useEffect, useState } from 'react'
import Cards from './Cards'

function Newsapp() {
    const[search,setSearch] = useState("india")
    const[news,setNews] = useState(null)
    const API_KEY =`784f80ec122040558914c8fc2bffd47e`;

    const getData =async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}` )
        const jsonData =await response.json()    
       console.log(jsonData);
       console.log(jsonData.articles);
       setNews(jsonData.articles)
       
    }

    useEffect(() => {
        getData()
    },[])

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const userInput = (e) => {
        setSearch(e.target.value)
    }

  return (
    <>
    
    <div className='relative'>

        <nav className='flex justify-between px-[11%] items-center py-6 bg-[#d6eaf8] xl:px-[7%] lg:px-[4%] md:px-[4%] sm:px-[3%] xl:py-5 lg:py-4 md:my-3 sm:my-2'>
            <div className=' '>
                <h1 className='font-semibold text-2xl md:text-xl sm:text-lg'>LatestNEWS</h1>
            </div>

            <ul className='sm:text-sm'>

                <a href="" className='mr-5'>All News</a>
                <a href="">Trending</a>

            </ul>

            <div className='sm:absolute sm:top-24 flex sm:left-[10%] sm:right-[10%]'>
                <input type="text" placeholder='Search News' className='mr-3 px-3 py-1 border-2 border-black outline-none sm:w-[80%]'value={search} onChange={handleInput}/>
                <button onClick={getData} className='bg-[#2e86c1] px-3 py-1 text-white '>Search</button>
            </div>

        </nav>

        <div>
            <p className='text-center font-semibold text-2xl my-8 sm:mt-16 md:text-xl sm:text-lg'>Stay Update with LatestNEWS</p>
        </div>

        <div className='flex justify-between px-[25%] lg:px-[17%] md:px-[8%] sm:px-[3%]'>

            <button onClick={userInput} value='sports' className='bg-[#2e86c1] px-5 py-1 text-white rounded-full md:px-3 sm:px-1 sm:py-0'>Sports</button>
            <button onClick={userInput} value='politics' className='bg-[#2e86c1] px-5 py-1 text-white rounded-full md:px-3 sm:px-1 sm:py-0'>Politics</button>
            <button onClick={userInput} value='entertainment' className='bg-[#2e86c1] px-5 py-1 text-white rounded-full sm:hidden'>Entertainment</button>
            <button onClick={userInput} value='health' className='bg-[#2e86c1] px-5 py-1 text-white rounded-full md:px-3 sm:px-1 sm:py-0'>Health</button>
            <button onClick={userInput} value='fitness' className='bg-[#2e86c1] px-5 py-1 text-white rounded-full md:px-3 sm:px-1 sm:py-0'>Fitness</button>

        </div>

            {news ? <Cards data={news}/> : null}
        

    </div>

    </>
  )
}

export default Newsapp