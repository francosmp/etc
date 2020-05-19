const defaultState = [
    {
        nombre: 'leo'
    },
    {
        nombre: 'juan'
    }
]

function reducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }

}

export default reducer