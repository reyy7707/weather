import { useForm } from 'react-hook-form'

const SignUp = () => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    const oneHandleData = (data) => {
        console.log(data);
        reset()
    }

    return (
        <>
            <div className="flex items-center w-full h-auto m-0 p-0 justify-center">
                <div className="flex items-center flex-col w-8/12 pt-36">
                    <h1 className="text-5xl font-mono"> Регистрация </h1>

                    <div className="flex flex-col pt-12 items-center">
                        <form className='flex flex-col w-full h-auto gap-y-4' onSubmit={handleSubmit(oneHandleData)}>
                            <div className='flex flex-col items-start'>
                                <h1 className='font-mono text-2xl'>Имя</h1>
                                <input className='w-[787px] rounded-lg h-[52px] border-[2px] border-[#1D50D3]' type='text' {...register('name', {
                                    required: true
                                })} />
                                {errors.name && <p> Error name </p>}
                            </div>
                            <div className='flex flex-col items-start'>
                                <h1 className='font-mono text-2xl'>Фамилия</h1>
                                <input className='w-[787px] rounded-lg h-[52px] border-[2px] border-[#1D50D3]' type='text' {...register('last_name', {
                                    required: true
                                })} />
                                {errors.last_name && <p> Error surname </p>}
                            </div>
                            <div className='flex flex-col items-start'>
                                <h1 className='font-mono text-2xl'>Почта</h1>
                                <input className='w-[787px] rounded-lg h-[52px] border-[2px] border-[#1D50D3]' type='email' {...register('email', {
                                    required: true
                                })} />
                                {errors.email && <p> Error email </p>}
                            </div>
                            <div className='flex flex-col items-start'>
                                <h1 className='font-mono text-2xl'>Номер телефона</h1>
                                <input className='w-[787px] rounded-lg h-[52px] border-[2px] border-[#1D50D3]' type='number' {...register('mobile_phone', {
                                    required: true
                                })} />
                                {errors.mobile_phone && <p> Error phone number </p>}
                            </div>
                            <div className='flex flex-col items-start'>
                                <h1 className='font-mono text-2xl'>Пароль</h1>
                                <input className='w-[787px] rounded-lg h-[52px] border-[2px] border-[#1D50D3]' type='password' {...register('password', {
                                    required: true
                                })} />
                                {errors.password && <p> Error password </p>}
                            </div>

                            <button className='w-[787px] rounded-lg h-[52px] border-[2px] border-[#11BE18] bg-[#11BE18] text-white' type='submit'> Зарегистрироваться </button>
                        </form>

                        <select className='w-[787px] rounded-lg h-[52px] bg-white border-[2px] border-[#1D50D3] mt-6 p-2'>
                            <option>Чуйская область</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp