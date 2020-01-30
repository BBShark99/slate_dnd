export function setSelector(param) {
    return {
        type: 'SET_SELECTOR',
        selector: param
    }
}

export function addNewCategory(param) {
    return {
        type: 'ADD_CATEGORY',
        category: param
    }
}

export function updateCategory(param) {
    return {
        type: 'UPDATE_CATEGORY',
        category: param
    }
}

export function showUploadDialog(param) {
    return {
        type: 'SHOW_UPLOAD_DIALOG',
        flag: param
    }
}

export function setChildSelector(param) {
    return {
        type: 'SET_CHILD_SELECTOR',
        childSelector: param
    }
}