import { UserContext } from '@/context/UserContext'
import { AppBasicTable } from '@/shared/AppBasicTable'
import React from 'react'

export const UserList: React.FC = () => {
  const { users } = React.useContext(UserContext)
  return (
    <React.Fragment>
      <AppBasicTable fields={['name', 'surname', 'country', 'birthdate']} data={users} />
    </React.Fragment>
  )
}
