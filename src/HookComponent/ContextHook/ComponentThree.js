import { useContext } from 'react'
import { ChannelContext, UserContext } from './DemoUseContext'



function ComponentThree() {
    const user=useContext(UserContext);
    const Channel=useContext(ChannelContext);
  return (
  <>
   {user}-{Channel}
   {/* <UserContext.Consumer>
    {
        user=>{
            return(

            <ChannelContext.Consumer>
                {
                    Channel=>{
                        return(
                            <div>{user}-{Channel}</div>
                        )
                    }
                }
            </ChannelContext.Consumer>
            )
        }
    }
   </UserContext.Consumer> */}
   </>
  )
}

export default ComponentThree