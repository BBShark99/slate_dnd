const initalState = {
    object_array: [],
    sel_object_array: []
};

const ObjectReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_OBJECT":
            return {
                ...state,
                object_array: [...state.object_array, action.payload]
            };
        case "DESELECT_OBJECT":
            return {
                ...state,
                sel_object_array: action.payload
            }
        case "SELECT_OBJECT":
            return {
                ...state,
                sel_object_array: action.payload
            }
        default:
            return state;
    }
}

export default ObjectReducer;