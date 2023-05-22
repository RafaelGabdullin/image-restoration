'use client'

import Button from '@/components/ui/Button/Button'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex justify-center">
        <Button onClick={() => alert('Преобразовываем')}>Process Image</Button>
      </div>

      <div className="flex gap-x-[1rem]">
        <div className="h-[400px] w-full border-4 border-dashed border-neutral-300"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-15 w-15"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>

        <div className="h-[400px] w-full border-4 border-dashed border-neutral-300"></div>
      </div>
      <div></div>
    </div>
  )
}

export default Home
