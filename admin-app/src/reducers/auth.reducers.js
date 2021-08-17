import { authContants } from "../actions/constants";

const initState={
   token:null,
   user:{
       firstName:'',
       lastName:'',
       email:'',
       picture:''
   },
   auhenticate:false,
   authenticating:false
};

export default (state=initState,action)=>{

    console.log(action);

    switch(action.type){
        case authContants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating:true
            }
            break; 
        case authContants.LOGIN_SUCCESS:
            state={
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                authenticate:true,
                authenticating:false
            }
            break;
        case authContants.LOGOUT_REQUEST:
            state={
                ...initState
            }
            break;
    }
    return state;
   

}