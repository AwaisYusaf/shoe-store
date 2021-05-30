import React,{createContext, useReducer} from 'react';

const cartItems  = [
];

const Reducer = (state,action)=>{
    if(action.type==='ADD'){
        let newState = [...state];
        let found = false;
        for(let i = 0;i<newState.length ;i++){
            if(newState[i].slug===action.payload){
                found=true;
                newState[i].quantity+=1;
                console.log(newState);
                break;
            }
        }
        if(!found){
            newState.push({slug:action.payload,quantity:1});
        }
        return newState;
    }
    else if(action.type==='REMOVE'){
        let newState = [];
        
        for(let i = 0;i<state.length ;i++){
            if(state[i].slug===action.payload){
               continue;
            }
            newState.push(state[i]);
        }
        return newState;
    }
}

export const MyContext = createContext(cartItems);

export const GlobalContext =({children})=>{
    const [state,dispatch] = useReducer(Reducer,cartItems);
        return(
            <MyContext.Provider value={{state,dispatch}}>
                {children}
            </MyContext.Provider>)
}