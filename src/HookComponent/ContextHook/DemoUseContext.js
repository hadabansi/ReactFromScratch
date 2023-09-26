import React, { createContext } from 'react'
import ComponentOne from './ComponentOne';

export const UserContext=createContext();
export const ChannelContext=createContext();
function DemoUseContext() {
  return (
    <div>
        <UserContext.Provider value="UseContext">
            <ChannelContext.Provider value="Demo Of Hook">
               <ComponentOne/>
            </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
  )
}

export default DemoUseContext