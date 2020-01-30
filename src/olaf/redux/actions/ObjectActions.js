export function addObject(param) {
    return {
        type: 'ADD_OBJECT',
        payload: param
    }
}

export function deselectObject() {
    return {
        type: 'DESELECT_OBJECT',
        payload: []
    }
}

export function selectObject(param) {
    return {
        type: 'SELECT_OBJECT',
        payload: param
    }
}