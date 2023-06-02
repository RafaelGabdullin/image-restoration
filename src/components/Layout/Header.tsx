'use client'

import Link from 'next/link'
import Button from '../ui/Button/Button'
import { headerItems } from './types'
import { useStore } from '@/stores/StoreProvider'

const Sample: React.FC = () => {
  const { userStore } = useStore()

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
        {!userStore.isAuthorized ? (
          <div className="flex gap-x-[0.5rem]">
            <Link href={'/auth/login'} passHref>
              <Button>Login</Button>
            </Link>
            <Link href={'/auth/signup'} passHref>
              <Button style="outlinePrimary">SignUp</Button>
            </Link>
          </div>
        ) : (
          <div className="gax-[0.5rem] flex">
            <svg
              width="70"
              height="76"
              viewBox="0 0 70 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M58.8504 64.8994C62.2688 61.4253 64.9921 57.2297 66.8519 52.5721C68.7117 47.9145 69.6684 42.8938 69.663 37.8204C69.663 17.2737 54.2643 0.618774 35.2673 0.618774C16.2703 0.618774 0.871605 17.2737 0.871605 37.8204C0.866178 42.8938 1.82293 47.9145 3.6827 52.5721C5.54248 57.2297 8.26576 61.4253 11.6842 64.8994C18.0586 71.4121 26.4985 75.0348 35.2673 75.022C44.0361 75.0348 52.476 71.4121 58.8504 64.8994ZM14.6122 59.9964C17.089 56.645 20.232 53.9401 23.8078 52.0826C27.3837 50.2251 31.3005 49.2628 35.2673 49.2671C39.2342 49.2628 43.1509 50.2251 46.7268 52.0826C50.3026 53.9401 53.4456 56.645 55.9224 59.9964C53.2202 62.9485 50.0029 65.2909 46.4573 66.8877C42.9116 68.4846 39.1081 69.3041 35.2673 69.2987C31.4265 69.3041 27.623 68.4846 24.0773 66.8877C20.5317 65.2909 17.3144 62.9485 14.6122 59.9964ZM48.4964 26.3738C48.4964 30.1686 47.1026 33.8079 44.6217 36.4913C42.1408 39.1746 38.7759 40.6821 35.2673 40.6821C31.7587 40.6821 28.3938 39.1746 25.9129 36.4913C23.432 33.8079 22.0382 30.1686 22.0382 26.3738C22.0382 22.579 23.432 18.9396 25.9129 16.2562C28.3938 13.5729 31.7587 12.0654 35.2673 12.0654C38.7759 12.0654 42.1408 13.5729 44.6217 16.2562C47.1026 18.9396 48.4964 22.579 48.4964 26.3738Z"
                fill="#97A3B6"
              />
            </svg>
            <Link href={'/about'}>
              <Button onClick={() => userStore.deleteHadler} style="outlinePrimary">
                Logout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sample
