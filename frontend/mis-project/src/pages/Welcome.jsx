import React from 'react'
import
function Welcome() {
  return (
   <section class="bg-gray-50 dark:bg-gray-900 min-h-[80vh] flex items-center">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    !-- Top badge banner --
    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
      <span class="text-xs bg-indigo-600 rounded-full text-white px-3 py-1.5 mr-3">New</span> 
      <span class="text-sm font-medium">Check out what is new in version 2.0!</span> 
      <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://w3.org"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    </a>
    
    !-- Main Headline --
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      The smart way to build your website
    </h1>
    
    !-- Subtitle text --
    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      We help developers, creators, and teams ship projects faster with beautifully styled components.
    </p>
    
    !-- Quick Search Action Form --
    <div class="px-4 mx-auto max-w-xl">
      <form action="#" class="bg-white p-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex items-center">
        <input type="text" placeholder="Search templates, components..." class="w-full bg-transparent px-4 py-2 text-gray-900 dark:text-white outline-none" required />
        <button type="submit" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md px-6 py-2 transition-colors">
          Search
        </button>
      </form>
    </div>
  </div>
</section>

  )
}

export default Welcome
