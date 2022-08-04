 const reducer = (state=0,action) =>{
        if(action.type =="depost"){
            return state+action.payload
        }
        else if(action.type =="withdraw"){
                return state-action.payload
        }
        else{
            return state
        }
}
export default reducer