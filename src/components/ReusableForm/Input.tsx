export const Input = ({ label, register, errors, type }) => {
  return (
    <div>
    <label className='block' htmlFor="name">{ label }</label>
    <input className='w-full' type={type} id="name" {...register } />
    {errors?.name && (<span className='text-xs text-red-500'>{errors.name.message}</span>)}
  </div>
  );
};