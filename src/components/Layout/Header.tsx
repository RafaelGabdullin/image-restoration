'use client'

import Link from 'next/link'
import Button from '../ui/Button/Button'
import { headerItems } from './types'

const Sample: React.FC = () => {
  return (
    <div className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg md:flex-wrap md:justify-start">
      <div className="flex w-full flex-wrap items-center justify-between px-10">
        <div className="flex items-center">
          <button className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"></button>
        </div>
        <ul className="mb-4 mr-auto flex flex-col lg:mb-0 lg:flex-row lg:pr-2">
          {headerItems.map((item) => (
            <li key={item.link}>
              <Link href={item.link} passHref>
                <div className="block lg:p-2">{item.title}</div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-[0.5rem]">
          <Link href={'/auth/login'} passHref>
            <Button>Login</Button>
          </Link>
          <Link href={'/auth/signup'} passHref>
            <Button style="outlinePrimary">SignUp</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sample
