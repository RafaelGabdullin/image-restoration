'use client'

import Button from '@/components/ui/Button/Button'
import Dropzone from '@/components/ui/Dropzone'
import Spinner from '@/components/ui/Spinner'
import { appApiUrl, appStaticUrl } from '@/services/api/ApiConnection'
import { useStore } from '@/stores/StoreProvider'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import saveAs from 'file-saver'

const Home: React.FC = () => {
  const { userStore } = useStore()

  const downloadFileHandler = (url: string, name: string) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        saveAs(blob, name)
      })
  }

  return (
    <>
      {userStore.isAuthorized ? (
        <div className="flex flex-col gap-[2rem] px-[5rem] pt-[10rem]">
          <Button onClick={() => userStore.uploadImagesHadler()}>Process Image</Button>

          <div className="flex w-full gap-x-[1rem]">
            <Dropzone />
            {userStore.status == 'fullfilled' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-20 w-20"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            ) : (
              <Spinner />
            )}

            <div className="flex min-h-[400px] w-full flex-col gap-[2.5rem] rounded-xl border-4 border-dashed border-neutral-300 p-[2rem]">
              {userStore.processedImagesLinks.map((link) => (
                <div className="flex flex-col gap-y-[1rem]" key={link}>
                  <img src={`${appStaticUrl}${link}`} />
                  <Button onClick={() => downloadFileHandler(`${appApiUrl}${link}`, link)}>
                    Скачать фотографию
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      ) : (
        <div className="relative flex h-full w-full items-center overflow-hidden bg-neutral-50">
          <div className="absolute left-0 top-0 h-full w-[5%] bg-sky-600"></div>
          <div
            className="absolute bottom-0 right-[3%] top-0 my-auto select-none text-[20vw] 
            font-bold tracking-tight text-sky-100"
          >
            {Array(40)
              .fill('401')
              .map((val, idx) => (
                <p key={idx} className="-mt-[3.75vw] leading-none">
                  {' '}
                  {val}{' '}
                </p>
              ))}
          </div>
          <div className="z-10 w-full px-[15vw] py-12">
            <div className="w-full space-y-6">
              <div className="text-[2.75vh] font-medium text-neutral-900 lg:text-[2.75vw]">
                Войдите в систему для дальнейшей работы!
              </div>

              <div className="pr-[5vw] text-[1.4vh] text-neutral-600 lg:text-[1.4vw]">
                <Link href={'/auth/login'} passHref>
                  <Button>Войти</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default observer(Home)
