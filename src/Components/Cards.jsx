import React from 'react';

function Cards({ data }) {
  if (!data || !Array.isArray(data)) {
    // Handle cases where data is null, undefined, or not an array
    return <p>No data available</p>;
  }

    const readMore = (url) => {
      window.open(url)
    }

  return (
    <div className="grid grid-cols-3 px-[11%]  gap-8 xl:px-[7%] lg:px-[4%] md:px-[4%]  md:grid-cols-2 sm:grid-cols-1">

      {data.map((currentItem, index) => {

        if(!currentItem.urlToImage ){
            return null
        }

        else if(!currentItem.title){
          return null
        }

       else if(!currentItem.description){
          return null
        }

        else{

          return(

            <div key={index} className="mt-5 sm:mt-3">
          {/* Ensure currentItem has the expected structure */}
          <img src={currentItem.urlToImage}  className=" aspect-videos mb-5 h-64 object-fill sm:h-52 sm:mb-2" />

          <div className="">
            <a href={currentItem.url} className="font-semibold text-lg hover:underline sm:text-base">
              {currentItem.title }
            </a>
            <p className="my-5 sm:my-2 sm:text-sm">
              {currentItem.description }
            </p>
            <button className="bg-[#2e86c1] text-white px-3 py-1 sm:py-[2px] sm:text-sm" onClick={() =>readMore(currentItem.url)}>Read More</button>
          </div>
        </div>

          )

        }
})}
    </div>
  );
}

export default Cards;
