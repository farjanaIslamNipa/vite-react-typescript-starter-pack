import { FieldValues, useForm } from 'react-hook-form'
import cn from '../../utils/cn';
import Button from '../ui/Button';
import { zodResolver } from '@hookform/resolvers/zod'
import {SignUpSchema, TNormalForm} from './zodValidation';

const NormalForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema) 
  })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  const double = true

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('border w-full max-w-5xl p-5 mx-auto', {
      'max-w-5xl' : double,
      'max-w-md' : !double
    })}>
      <div className={cn('grid grid-cols-1 gap-5', {
        'md:grid-cols-2' : double
      })}>
        <div >
          <label className='block' htmlFor="name">Name</label>
          <input className='w-full' type="text" id="name" {...register('name') } />
          {errors?.name && (<span className='text-xs text-red-500'>{errors.name.message}</span>)}
        </div>
        <div>
          <label className='block' htmlFor="email">Email</label>
          <input className='w-full' type="text" id="email" {...register('email')} />
          {errors?.email && (<span className='text-xs text-red-500'>{errors.email.message}</span>)}
        </div>
        <div>
          <label className='block' htmlFor="password">Password</label>
          <input className='w-full' type="password" id="password" {...register('password')} />
          {errors?.password && (<span className='text-xs text-red-500'>{errors.password.message}</span>)}
        </div>
      </div>
      <div className='flex justify-end'>
        <Button type='submit'>Submit</Button>
      </div>
    </form>
  );
};

export default NormalForm;