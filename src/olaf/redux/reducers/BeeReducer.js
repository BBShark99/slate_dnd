const initialState = {
    selector: 0,
    childSelector: -1,
    categories: [
        { id: 0, text: 'Category A' },
        { id: 1, text: 'Category B' },
        { id: 2, text: 'Category C' },
        { id: 3, text: 'Category D' },
    ],
    showUploadDialog: false
};

const BeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_SELECTOR":
            return {
				...state,
				selector: action.selector
            };
        case "ADD_CATEGORY":
            return {
                ...state,
                categories: [...state.categories, action.category]
            }
        case "UPDATE_CATEGORY":
            return {
                ...state,
                categories: state.categories.map(
                    (category, i) => i === action.category.id ? {...category, text: action.category.text}
                                            : category)
            }
        case "SHOW_UPLOAD_DIALOG":
            return {
                ...state,
                showUploadDialog: action.flag
            }
        case "SET_CHILD_SELECTOR":
            return {
                ...state,
                childSelector: action.childSelector
            }
        default:
            return state;
    }
};

export default BeeReducer;