'use client'

import Button from '@/components/ui/Button/Button'
import Dropzone from '@/components/ui/Dropzone'
import Spinner from '@/components/ui/Spinner'
import { appApiUrl } from '@/services/api/ApiConnection'
import { useStore } from '@/stores/StoreProvider'
import { observer } from 'mobx-react-lite'

const Home: React.FC = () => {
  const { userStore } = useStore()

  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex justify-center">
        <Button onClick={() => userStore.uploadImagesHadler()}>Process Image</Button>
      </div>

      <div className="flex gap-x-[1rem]">
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

        <div className="flex min-h-[400px] w-full flex-col gap-4 border-4 border-dashed border-neutral-300 p-[2rem]">
          {userStore.processedImagesLinks.map((link) => (
            <img key={link} src={`${appApiUrl}${link}`} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default observer(Home)
