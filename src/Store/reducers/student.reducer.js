const initialState ={
    students : [
        {
            firstname: 'karim',
            lastname: 'mahammad',
            gender: 'male'
        },
        {
            firstname: 'sravani',
            lastname: 'dokala',
            gender: 'female'
        },
        {
            firstname: 'jaism',
            lastname: 'mahammad',
            gender: 'male'
        }
        
    ]
}

function studentReducer(state=initialState, action){
    return state
}
export default studentReducer;