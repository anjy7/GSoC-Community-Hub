import Navbar from "./events/Navbar"

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='flex min-h-screen flex-col items-center justify-center py-2 text-black'>
        <main className='mx-auto w-auto px-4 pb-8 pt-8 sm:pt-8 lg:px-8'>
          <div className='container mx-auto flex flex-col items-center gap-3 px-4 md:gap-5'>
            <div className='mt-2 flex flex-col items-center gap-2 py-5'>
              <h1 className='text-center text-4xl font-bold text-[#030c1a] md:text-5xl'>
                Welcome to our <span className='text-[#f5455c]'>community</span>
              </h1>
              <p className='w-10/12 text-center text-[clamp(16px,4.5vw,20px)] font-normal text-[#87898d] md:w-8/12'>
                {/* Let's dream, share, and collaborate in shaping the future of the Rocket.Chat
                ecosystem together */}
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
