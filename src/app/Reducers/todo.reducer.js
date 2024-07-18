const initialstate={
    todo:["jasim", "karim"]
}

function todoreducer(state=initialstate, action){
    if(action.type==="adding"){
        return {...state, todo:[...state.todo, action.payload]}
    }

    if(action.type==="delete"){
        let temp = [...state.todo]

        temp.splice(action.payload, 1)
        return {...state, todo:[...temp]}
    }


    return state
}
export default todoreducer