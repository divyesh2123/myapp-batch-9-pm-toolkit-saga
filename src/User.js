import React, { useEffect } from 'react'
import {connect, useDispatch,useSelector} from 'react-redux'
import { UserRequest } from './slice/userslice';
//

const mapStateToProps = (state) => ({

  user: state.user

})

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    userRequest: () => dispatch(UserRequest())
  
  }
}



 function User({user,userRequest}) {

   
    console.log(user);


    useEffect(()=>{

      userRequest();
    },[])
  return (
    <div>User</div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(User);
