export const sectionId = (str) => {
    return str.substring(0,50)
}

export const linkId = (id) => {
    return `/guide/${id}`
}

export const linkEditId = (id) => {
    return `/guide/${id}/edit`
}
