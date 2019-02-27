const initialState = {
    loading: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'START_LOADING':
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}
