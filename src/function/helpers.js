export function isEmpty(obj = {}) {
    return Object.keys(obj).length === 0
}

export function isString(value) {
    return typeof value === 'string' || value instanceof String
}

export function isNumber(value) {
    return typeof value == 'number' && !isNaN(value)
}

export function isBoolean(value) {
    return value === true || value === false
}

export function isNil(value) {
    return typeof value === 'undefined' || value === null
}

export function convertType(value) {
    if (isNumber(value)) {
        return value.toString()
    }

    if (isBoolean(value)) {
        return value ? '1' : '-1'
    }

    return value
}

export function sortRows(datas, sort) {
    return datas.sort((a, b) => {
        const { order, orderBy } = sort

        if (isNil(a[orderBy])) return 1
        if (isNil(b[orderBy])) return -1

        const aLocale = convertType(a[orderBy])
        const bLocale = convertType(b[orderBy])

        if (order === 'asc') {
            return aLocale.localeCompare(bLocale, 'en', { numeric: isNumber(b[orderBy]) })
        } else {
            return bLocale.localeCompare(aLocale, 'en', { numeric: isNumber(a[orderBy]) })
        }
    })
}

export function paginateRows(sortedRows, currentPage, rowsPerPage) {
    return [...sortedRows].slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
}