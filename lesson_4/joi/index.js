const Joi = require('joi'); // валидатор

const schema = Joi.string();

const result = schema.validate('Hello, World');
const result1 = schema.validate(3); // выдаст объект ошибки ибо это  число а не строка
const result2 = schema.validate([]); // выдаст объект ошибки ибо это  число а не строка

console.log(result);
console.log(result1);
console.log(JSON.stringify(result1, null, 2)); // более полное отображение
console.log(result2.error.details); 