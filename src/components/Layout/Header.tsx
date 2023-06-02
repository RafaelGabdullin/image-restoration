'use client'

import Link from 'next/link'
import Button from '../ui/Button/Button'
import { headerItems } from './types'
import { useStore } from '@/stores/StoreProvider'
import { useRouter } from 'next/navigation'
import { observer } from 'mobx-react-lite'

const Sample: React.FC = () => {
  const { userStore } = useStore()
  const router = useRouter()

  const logoutHandler = () => {
    userStore.logoutHandler()
    router.push('/')
  }

  return (
    <div className="fixed flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg md:flex-wrap md:justify-start">
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
          <div className="flex items-center gap-x-[1rem]">
            <svg
              viewBox="0 0 71 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[3rem] w-[3rem]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M59.6029 60.6592C63.0814 57.3907 65.8525 53.4435 67.745 49.0615C69.6374 44.6796 70.611 39.956 70.6054 35.1828C70.6054 15.8521 54.9362 0.182861 35.6055 0.182861C16.2747 0.182861 0.605492 15.8521 0.605492 35.1828C0.599969 39.956 1.57353 44.6796 3.46598 49.0615C5.35843 53.4435 8.12956 57.3907 11.608 60.6592C18.0945 66.7865 26.6826 70.1948 35.6055 70.1828C44.5283 70.1948 53.1165 66.7865 59.6029 60.6592ZM14.5875 56.0464C17.1078 52.8933 20.306 50.3485 23.9447 48.601C27.5833 46.8534 31.5689 45.9481 35.6055 45.9521C39.642 45.9481 43.6276 46.8534 47.2663 48.601C50.9049 50.3485 54.1031 52.8933 56.6234 56.0464C53.8738 58.8238 50.6 61.0276 46.992 62.5299C43.3841 64.0323 39.5137 64.8033 35.6055 64.7982C31.6972 64.8033 27.8269 64.0323 24.2189 62.5299C20.6109 61.0276 17.3372 58.8238 14.5875 56.0464V56.0464ZM49.067 24.4136C49.067 27.9838 47.6487 31.4078 45.1242 33.9324C42.5997 36.4569 39.1757 37.8752 35.6055 37.8752C32.0353 37.8752 28.6113 36.4569 26.0867 33.9324C23.5622 31.4078 22.1439 27.9838 22.1439 24.4136C22.1439 20.8434 23.5622 17.4194 26.0867 14.8949C28.6113 12.3704 32.0353 10.9521 35.6055 10.9521C39.1757 10.9521 42.5997 12.3704 45.1242 14.8949C47.6487 17.4194 49.067 20.8434 49.067 24.4136V24.4136Z"
                fill="#97A3B6"
              />
            </svg>
            <Button className="h-fit" onClick={logoutHandler} style="outlinePrimary">
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default observer(Sample)
