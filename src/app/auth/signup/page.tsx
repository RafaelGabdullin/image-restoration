import SignUpForm from '@/components/SignUpForm'

const SignUpPage: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="px-[1rem] py-[1.5rem]">
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUpPage
