const checkWhitespace = (value) => value.trim().length > 0

const checkBoolean = (value) => typeof value === 'boolean'

const checkLengthInRange = (value, minLength, maxLength) => v.trim().length >= minLength && v.trim().length <= maxLength

const checkValidLength = (value, length) => v.trim().length == length

const checkEmail = (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)

const checkDateInput = (value) => value instanceof Date && !isNaN(value)

export default { checkWhitespace, checkBoolean, checkEmail, checkLengthInRange, checkValidLength, checkDateInput };