import { returnObject } from './utils.mjs'
import  CustomHelpers from '../helpers/helpers.mjs'

const {
    data: {name}, 
    data: {address: {str, number}}, 
    data: {hobbies: [gaming, fishing, pixel]},
    data
} = returnObject();

CustomHelpers.log('Hello is working');
console.log('----------');
console.log(name);
console.log('----------');
console.log(str, number);
console.log('----------');
console.log(gaming, fishing, pixel);
console.log('----------');
console.log(data);
console.log('----------');
