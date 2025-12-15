import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../Context/AuthContext'



// const useRole = () => {
//   const { user, loading } = useAuth()


//   const { data: role, isLoading: isRoleLoading } = useQuery({
//     enabled: !loading && !!user?.email,
//     queryKey: ['role', user?.email],
//     queryFn: async () => {
//       const result = await axios.get(`/user/role`)
//       console.log(result)
//       return result.data.role
//     },
//   })

//   //   return { role, isRoleLoading }
//   return [role, isRoleLoading]
// }

// export default useRole

const useRole = () => {
  const { user, loading } = useAuth()

  const { data: role = null, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['role', user?.email],
    queryFn: async () => {
      const token = await user.getIdToken()
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/role`,
        { headers: { authorization: `Bearer ${token}` } }
      )
      return data.role
    },
  })

  return [role, isRoleLoading]
}

export default useRole