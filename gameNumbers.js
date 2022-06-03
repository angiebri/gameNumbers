const generateRandomNumber = () => { // Функция генерации случайного числа
  return Math.round(Math.random() * 100); 
}

const isEven = (number) => { // Функция для проверки четности
  return number % 2 === 0; 
}

const startRound = () => {
  const randomNumber = generateRandomNumber(); // Генерируем случайное число

  const answer = prompt(`Является ли число ${randomNumber} чётным? Отвечай "да" или "нет".`); // Получаем ответ от игрока
  
  const correctAnswer = isEven(randomNumber) ? 'да' : 'нет'; // Получаем правильный ответ

  if (answer === correctAnswer) { // Сравниванием правильный ответ с ответом игрока
    alert("Ответ правильный!"); // Если правильный - говорим
    return true; // Возвращаем что ответ правильный
  } else {
    alert(`Ответ неправильный! Правильный ответ: "${correctAnswer}".`); // Говорим
    return false; // Возвращаем что ответ неправильный
  }
}

const playGame = () => {
  for (let i = 0; i < 3; i++) { // Цикл от 0 до 2
    const isCorrectAnswer = startRound(); // Вызов функции раунда и получение правильности ответа
    if (!isCorrectAnswer) { // Если ответ неправильный - заканчиваем игру
      alert("Игра окончена!");
      return;
    }
  }
  alert("Поздравляем, вы победили!"); // Если ответили правильно на все три - поздравляем
}
