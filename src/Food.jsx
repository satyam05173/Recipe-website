// import React from 'react'
// import { useState } from 'react'
// import Cart from './Cart';
// import { Link } from 'react-router-dom';

// const Food = ({addToCart,cart}) => {
   
// const [text, setText] = useState('');
// const [meals, setMeals] = useState([]);

// const searcch=async()=>
// {
//     const api= await fetch(  `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
   
    
//     const data= await api.json();
//     setMeals(data.meals || []);
//     setText('')
// }
 
//   return (
//     <div className='flex items-center justify-center flex-col ' >
// <div  className='flex items-center justify-center bg-blue-600  w-96 h-10 rounded mx-auto'  style={{marginTop:'50px'}}>
//     <input  className=' w-full h-full bg-blue-600  text-white' type="text" value={text} placeholder='Please Enter Your Items' onChange={(e)=>setText(e.target.value)} id="" />

//     <button className=' w-1/2 h-full bg-black text-white' type='search' onClick={searcch} placeholder='Please Search ' >Search </button>
    
  

// </div>
// <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
//     {meals.map((meal ) =>
//      (
//  <div className="border p-4 shadow-lg" key={meal.idMeal}>
// <h1 style={{textAlign:'center'}}> {meal.strMeal}  </h1>
// <img src={meal.strMealThumb} alt="ok" />
// <p>{meal.strInstructions.substring(0, 55)}....  </p>
// <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"   onClick={()=>addToCart(meal)} >addToCart</button>
         
     
// </div> 

//      )
//    )}
  
// </div>

//     </div>
//   )
// }

import React from 'react'
import { useState } from 'react'
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Food = ({ addToCart, cart }) => {
  const [text, setText] = useState('');
  const [meals, setMeals] = useState([]);

  // renamed to a clearer function name and made it safe for empty text
  const searchMeals = async (query) => {
    const q = (query ?? text).trim();
    if (!q) return; // don't call API for empty queries

    try {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(q)}`);
      const data = await api.json();
      setMeals(data.meals || []);
    } catch (err) {
      console.error('Search error:', err);
      setMeals([]);
    }
    setText('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMeals();
  }

  return (
    <div className='flex items-center justify-center flex-col p-4'>
      {/* Responsive search bar: stacks on small screens, horizontal on sm+ */}
      <form onSubmit={handleSubmit} className='w-full max-w-lg mt-12'>
        <div className='flex flex-col sm:flex-row items-stretch gap-2 bg-blue-600 rounded mx-auto p-2'>
          <label htmlFor='meal-search' className='sr-only'>Search meals</label>
          <input
            id='meal-search'
            className='flex-1 h-12 px-3 bg-blue-600 text-white placeholder-white outline-none'
            type='text'
            value={text}
            placeholder='Please Enter Your Items'
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className='h-12 px-5 bg-black text-white rounded sm:rounded-md'
            type='submit'
            aria-label='Search meals'
          >
            Search
          </button>
        </div>
      </form>

      {/* Results grid */}
      <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 px-4'>
        {meals.length === 0 && (
          <p className='col-span-full text-center text-gray-600'>No meals to show. Try searching for "chicken", "beef", etc.</p>
        )}

        {meals.map((meal) => (
          <div className="border p-4 shadow-lg rounded-md overflow-hidden" key={meal.idMeal}>
            <h2 className='text-center font-semibold mb-2'>{meal.strMeal}</h2>
            <div className='w-full h-40 mb-3 overflow-hidden rounded'>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className='w-full h-full object-cover'
              />
            </div>
            <p className='text-sm text-gray-700 mb-3'>{(meal.strInstructions || '').substring(0, 100)}{(meal.strInstructions && meal.strInstructions.length > 100) ? '...' : ''}</p>
            <div className='flex items-center justify-between'>
              <button
                className='border-2 bg-green-600 text-white px-4 py-1 rounded'
                onClick={() => addToCart(meal)}
              >
                Add to cart
              </button>
              <Link to={`/meal/${meal.idMeal}`} className='text-blue-600 hover:underline text-sm'>View</Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Food