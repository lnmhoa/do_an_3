const checkWhitespace = (value) => value.trim().length > 0;

const checkBoolean = (value) => typeof value === 'boolean';

const checkNumber = (value) => typeof value === 'number' && !isNaN(value);

const checkNumberInRange = (value, minNumber, maxNumber) =>
    typeof value === 'number' && value > minNumber && value < maxNumber;

const checkLengthInRange = (value, minLength, maxLength) =>
    value.trim().length >= minLength && value.trim().length <= maxLength;

const checkValidLength = (value, length) => value.trim().length == length;

const checkEmail = (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

const checkDateInput = (value) => value instanceof Date && !isNaN(value);

export default {
    checkNoneNumber,
    checkWhitespace,
    checkBoolean,
    checkNumber,
    checkNumberInRange,
    checkEmail,
    checkLengthInRange,
    checkValidLength,
    checkDateInput,
};
