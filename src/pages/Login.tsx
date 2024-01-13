import axios from "axios";
import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({username: '', password: ''})
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    setUserInfo({...userInfo, [e.target.name]:e.target.value})
  }

  // username: 'kminchelle',
  // password: '0lelplR',

  const handleSignIn = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{

     const {data} = await axios.post('https://dummyjson.com/auth/login', userInfo)
      setUser(data)
      localStorage.setItem('token', data.token)
      navigate('/dashboard')
    }catch(err){
      console.error(err)
    }
  }


  return (
    <div>
        <div className='bg-white h-screen flex items-center justify-center w-full'>
      <div className='w-full'>
        <div className="bg-white max-w-[320px] xs:max-w-[400px] sm:max-w-[444px] mx-auto pt-[54px] pb-16 px-5  xs:px-10 sm:px-[62px] border border-[#EEE] rounded-2xl shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.03),0px_20px_24px_-4px_rgba(16,24,40,0.08)]">
        <div className="flex gap-[10px] mb-[22px]">
            <h1 className='text-defaultGray text-[28px] font-bold'>Stack</h1>
          </div>
          <p className='text-dark text-xl leading-6 font-semibold'>Sign in to join with Stack</p>
          <div className="mt-[52px]">
            <form onSubmit={handleSignIn}>
              {/* Email */}
              <div className="mb-5">
                <label className='text-defaultGray text-sm font-medium mb-[6px] block'>Username</label>
                <input 
                type='text'
                name='username'
                onChange={handleInputChange}
                placeholder='Enter Email'
                className="h-11 
                w-[100%]
                bg-white 
                border 
                rounded-lg 
                px-[14px] 
                py-[10px]  
                placeholder:text-[##A9ACB5] 
                placeholder:text-base 
                focus:outline-none 
                focus:border-brand
                shadow-[0px_0px_0px_4px_#FEE4E2,0px_1px_2px_0px_rgba(16, 24, 40, 0.05)]"
                />
              </div>

              {/* Password */}
              <div className="mb-5">
                <label className='text-defaultGray text-sm font-medium mb-[6px] block'>Password</label>
                <input 
                type='password'
                name='password'
                onChange={handleInputChange} 
                placeholder='Enter Password'
                className="h-11 
                w-[100%]
                bg-white 
                border 
                rounded-lg 
                px-[14px] 
                py-[10px]  
                placeholder:text-[##A9ACB5] 
                placeholder:text-base 
                focus:outline-none 
                focus:border-brand
                shadow-[0px_0px_0px_4px_#FEE4E2,0px_1px_2px_0px_rgba(16, 24, 40, 0.05)]"
                />
              </div>
              <div className="mt-[17px] mb-8 mx-auto max-w-[320px]">
                <button className="bg-[#6941C6] text-white text-base font-semibold leading-6 capitalize flex justify-center items-center h-11 w-[100%] rounded-lg" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;