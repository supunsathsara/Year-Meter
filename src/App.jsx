import { useEffect, useState } from 'react';
import { differenceInDays, format } from 'date-fns';

function App() {

  const [progress, setProgress] = useState(0);

  const calulateProgress = () => {
    const year = new Date().getFullYear();
    const start = new Date(year, 0, 1);
    const end = new Date(year, 11, 31);
    const today = new Date();
    const totalDays = differenceInDays(end, start);
    const daysPassed = differenceInDays(today, start);
    const progress = daysPassed / totalDays * 100;
    setProgress(progress);
  }

  useEffect(() => {
    calulateProgress();
  }, [])

  return (
    <div className="bg-[#030014] min-h-screen w-full flex flex-col justify-center">
      <h1 className="text-6xl text-white font-bold py-5 mb-5 text-center">Year Meter 🗓️</h1>
      <div className="flex justify-center items-center">
        <div className="bg-white w-1/2 h-5 rounded-full shadow-2xl">
          <div className="bg-[#FFD600] h-full rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="flex flex-col my-5 justify-center items-center gap-2 text-center">
        <p className="text-white text-2xl text-center mx-2">We are {progress.toFixed(2)}% through
          {progress < 50 ? ' the year' : progress < 90 ? ' the year, and we are more than halfway through.' : ' the year, and We are almost at the end!'}
          <span role="img" aria-label="celebration" className='animate-pulse'> 🎉</span>
        </p>
        <p className="text-white text-xl mx-auto">Today is {format(new Date(), 'MMMM d, yyyy')}</p>
        <p className="text-white text-xl mx-2 text-center">We have passed {Math.floor(progress * 0.01 * 365)} days, and there are approximately {Math.ceil((100 - progress) * 0.01 * 365)} days left in the current year.</p>
      </div>
      <footer className='absolute bottom-0 w-full py-5 mt-1'>
      <p className="text-white text-center">Made with ❤️ by <a href="https://supunsathsara.com" target="_blank" rel="noreferrer" className="text-[#FFD600] hover:text-[#FFD700]">Supun Sathsara</a></p>
      </footer>
    </div>
  )
}

export default App
