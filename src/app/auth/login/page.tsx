import LoginForm from '@/components/LoginForm'

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="px-[1rem] py-[1.5rem]">
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
