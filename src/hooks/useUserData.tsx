import {useEffect, useState} from "react";

export const useUserData = () => {
  const controller = new AbortController()
  const url = 'https://jsonplaceholder.typicode.com/users'

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async() => {

    try{
      setLoading(true)
      const res = await fetch(url,{signal: controller.signal})
      console.log(res, 'data')
      const data = await res.json()
      setLoading(false)
      setUsers(data)
      console.log(data, 'data')
    }catch(err){setError(true)}
  }

  useEffect(() => {
    getUsers()
    return () => {
      controller.abort()
    }
  }, []);

  return {users, error, loading}
}
