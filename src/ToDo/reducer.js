
export const initState = {
    job: '',
    jobs: []
};

function reducer(state, action) {
    switch(action.type) {
        case 'SET_JOB':
            return {
                ...state,
                job: action.payload
            };
        case 'ADD_JOB':
            return {
                ...state,
                jobs: [...state.jobs, state.job],
                job: ''
            };
        case 'DELETE_JOB':
            return {
                ...state,
                jobs: state.jobs.filter((job, index) => index !== action.payload)
            };
        default:
            return new Error('Action type not found');
    }
}

export default reducer;