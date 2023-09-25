import React from 'react'
import { UserProvider } from './UserContext'
import ComponentA from './ComponentA'

function ContextDemo() {
  return (
    <div>
        <UserProvider value="Vishvas">
            <ComponentA/>
        </UserProvider>
    </div>
  )
}

export default ContextDemo