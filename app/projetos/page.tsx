
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import CardCim from './project-componets/cardcim'
import CardCep from './project-componets/cardcep'
import CardPinterest from './project-componets/cardpinterest'
import CardBugTracker from './project-componets/bugtracker'



const inter = Inter({ subsets: ['latin'] })

export default function Projetos() {
  return (
    <main className=" h-full bg-white text-black pb-2 overflow-x-hidden ">
      <section className=" min-h-screen relative "  >
        <NavBar></NavBar>


        {/* --WORK SECTION START--  */}

        <div className=' text-black-800 flex-col lg:flex gap-10 md:py-10 margin-auto'>
          <h1 className='flex justify-center py-10 text-2xl font-semibold '>Work</h1>
          <div className=' flex flex-wrap justify-center gap-14 md:justify-center lg:justify-center'>
            <CardCim></CardCim>
            <CardCep></CardCep>
            <CardPinterest></CardPinterest>
            <CardBugTracker></CardBugTracker>
          </div>

        </div>
        {/* --WORK SECTION EDN-- */}
      </section>

    </main>
  )
}

