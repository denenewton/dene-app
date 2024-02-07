import { Montserrat } from "next/font/google";
import Feed from "@components/Feed";

const montserrat = Montserrat({subsets:['latin'], style: ['normal']})

export default function Home() {
  return (
    <section className="section-main pt-24">
      <div className={montserrat.className }>
        <h1 className='head_text dark_gradient text-center px-2'>
          Denenewton App
          <br className='max-md:hidden' />
          <span className='blue_gradient text-center'> Application for Posting</span>
        </h1>
        </div>
        <p className='mt-5 px-3 text-lg text-gray-600 text-center  sm:text-xl max-w-2xl'>
          My App denenewton is an open-source App posting tool for my own posttings. It can be use to reunite every tool like posting my own photos e postting posts to see and remember later on.
        </p>
        <Feed />
    </section>

  );
}
