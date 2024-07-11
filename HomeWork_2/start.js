const randomData = require("random_data_generator_365");

// Генерация случайного имени.
const randomName = randomData.generateRandomName();
console.log(randomName);

// Генерация случайного адреса.
const randomAddress = randomData.generateRandomAddress();
console.log(randomAddress);

// Генерация случайной даты.
const randomDate = randomData.generateRandomDate();
console.log(randomDate);

// Генерация случайного числа в диапазоне от 1 до 100.
const randomNumber = randomData.generateRandomNumber(1, 100);
console.log(randomNumber);
