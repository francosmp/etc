import { combineReducers } from 'redux'
import ordenes from './ordenes'
import usuarios from './usuarios'

/*function reducer(state = [], action) {
    return {
        ordenes: ordenes(state.ordenes, action),
        usuarios: usuarios(state.usuarios, action)
    }

}*/

const reducer = combineReducers({
    ordenes,
    usuarios
})

export default reducer