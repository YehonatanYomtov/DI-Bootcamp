"use strict";
const allowedTypes = ["string", "number"];
function validateUnionType(value, arr) {
    for (const allowedType of arr) {
        if (typeof value === allowedType) {
            return true;
        }
    }
    return false;
}
console.log(validateUnionType("hi", allowedTypes));
console.log(validateUnionType(true, allowedTypes));
console.log(validateUnionType(8888, allowedTypes));
