import React from 'react'
import { useNavigate } from 'react-router-dom'
import recipe from '../src/assets/recipe.jpg'

const Home = () => {
  const navigate = useNavigate();
  const click = () => navigate('/food')

  return (
    <main className='w-full px-4 md:px-8 lg:px-16 mt-32'>
      <section className='max-w-6xl mx-auto mt-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12'>
        {/* Text column */}
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>Welcome to Your Recipe Hub</h1>
          <p className='text-md sm:text-lg md:text-xl text-gray-700 mb-6'>Where every meal tells a story — discover recipes, save favorites, and order ingredients easily.</p>
          <button
            onClick={click}
            className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition'
          >
            Explore Recipes
          </button>
        </div>

        {/* Image column */}
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <div className='w-full max-w-md md:max-w-lg rounded-lg overflow-hidden shadow-lg'>
            <img src={recipe} alt='Delicious Food' className='w-full h-64 sm:h-72 md:h-80 object-cover' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home