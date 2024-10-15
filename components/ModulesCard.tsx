import React from 'react'
import { Switch } from './ui/switch'

const ModulesCard = () => {
  return (
   <main className='bg-gradient-to-r from-frog-green to-pond-blue p-2 rounded-2xl'>
    <section className='flex flex-col gap-[100px]'>
        <h1 className='text-text-lilly-pad-white text-3xl font-bold underline'>Leveling Module</h1>
        <div></div>
        <div className='pl-3'>
            <h2 className='text-xl text-text-lilly-pad-white font font-bold '>XP Per Message</h2>
        </div>
    </section>

   </main>
  )
}

export default ModulesCard