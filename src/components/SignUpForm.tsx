'use client'

import { useState } from 'react'
import { Input } from './ui/Input'
import Title from './ui/Title'
import Button from './ui/Button/Button'
import { useStore } from '@/stores/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/navigation'
import { toJS } from 'mobx'

const SignUpForm: React.FC = () => {
  const router = useRouter()

  const { userStore } = useStore()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleUsernameChanges = (username: string) => {
    setFormData({
      ...formData,
      username: username,
    })
  }

  const handlePasswordChanges = (password: string) => {
    setFormData({
      ...formData,
      password: password,
    })
  }

  const submitForm = async () => {
    await userStore.signUpHadler(formData)
    console.log('1234')
    router.push('/')
    console.log(toJS(userStore))
  }

  return (
    <div className="min-w-[25rem] rounded-3xl border border-slate-200 px-[2rem] py-[2.5rem] shadow-lg">
      <Title className="mb-[3rem] w-full text-center">Регистрация</Title>
      <div className="flex flex-col gap-y-[1rem]">
        <Input
          value={formData.username}
          label="Имя пользователя"
          placeHolder="pupa"
          onChange={handleUsernameChanges}
        />
        <Input
          value={formData.password}
          label="Пароль"
          placeHolder="*******"
          onChange={handlePasswordChanges}
          type="password"
        />
      </div>
      <Button onClick={submitForm} className="mt-[2rem] w-full">
        Зарегистривоваться
      </Button>
    </div>
  )
}

export default observer(SignUpForm)
