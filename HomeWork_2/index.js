// Генерация случайного имени.
function generateRandomName() {
  const names = ["Ivan", "Alexandr", "Sergey", "Sveta", "Emma", "Oleg", "Olga"];
  return names[Math.floor(Math.random() * names.length)];
}

// Генерация случайного адреса.
function generateRandomAddress() {
  const addresses = [
    "78 Karl Marks St",
    "56 Tambovskay St",
    "79 Sovetskay St",
    "11 School St",
  ];
  return addresses[Math.floor(Math.random() * addresses.length)];
}

// Генерация случайной даты.
function generateRandomDate() {
  return new Date(Date.now() - Math.floor(Math.random() * 10000000000));
}

// Генерация случайного числа.
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  generateRandomName,
  generateRandomAddress,
  generateRandomDate,
  generateRandomNumber,
};
