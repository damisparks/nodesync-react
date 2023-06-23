import React from 'react'
import { IUserDTO } from '@/types'

interface UserContextProps {
  users: IUserDTO[]
  addUser: (user: IUserDTO) => void
}

export const UserContext = React.createContext<UserContextProps>({
  users: [],
  addUser: () => {
    // Provide a default implementation or throw an error if not overridden
    throw new Error('addUser function not implemented')
  },
})
