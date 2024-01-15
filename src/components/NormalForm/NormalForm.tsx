import { useForm } from 'react-hook-form'
import cn from '../../utils/cn';

const NormalForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const double = true

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('border border-red-400 w-full max-w-5xl p-5 mx-auto', {
      'max-w-5xl' : double,
      'max-w-md' : !double
    })}>
      <div className={cn('grid grid-cols-1 gap-5', {
        'md:grid-cols-2' : double
      })}>
        <div >
          <label className='block' htmlFor="name">Name</label>
          <input className='w-full' type="text" id="name" {...register('name')} />
        </div>
        <div>
          <label className='block' htmlFor="email">Email</label>
          <input className='w-full' type="text" id="email" {...register('email')} />
        </div>
        <div>
          <label className='block' htmlFor="password">Password</label>
          <input className='w-full' type="text" id="password" {...register('password')} />
        </div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default NormalForm;