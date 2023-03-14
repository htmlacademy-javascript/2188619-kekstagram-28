// Строка короче 20 символов
getLengthString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
getLengthString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
getLengthString('проверяемая строка', 10); // false


function getLengthString(text, maxLengthString) {
  if (text.length <= maxLengthString) {
    return true;
  } else {
    return false;
  }
}

// Строка является палиндромом
checkPalindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
checkPalindrom('ДовОд'); // true
// Это не палиндром
checkPalindrom('Кекс'); // false
// Это палиндром
checkPalindrom('Лёша на полке клопа нашёл '); // true


function checkPalindrom(text) {
  let textWithOutSpaces = '';

  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      textWithOutSpaces += text[i];
    }
  }

  text = textWithOutSpaces.toLowerCase();

  let start = 0;
  let end = text.length - 1;

  while (start < end) {
    if (text[start] !== text[end]) {
      return false;
    }

    start++;
    end--;
  }
  return true;
}


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

fetchDigits('2023 год'); // 2023
fetchDigits('ECMAScript 2022'); // 2022
fetchDigits('1 кефир, 0.5 батона'); // 105
fetchDigits('агент 007'); // 7
fetchDigits('а я томат'); // NaN

// предусмотрите случай, когда вместо строки приходит число.
fetchDigits(2023); // 2023
fetchDigits(-1); // 1
fetchDigits(1.5); // 15

function fetchDigits(text) {
  let numbersInString = '';

  if (typeof text === 'number') {
    const parseNumber = text
      .toString(10)
      .replaceAll('.', '');
    return Math.abs(parseInt(parseNumber, 10));
  }
  for (let i = 0; i < text.length; i++) {
    if (!isNaN(parseInt(text[i], 10))) {
      numbersInString += text[i];
    }
  }

  return parseInt(numbersInString, 10);
}

// Добавочный символ использован один раз
addSymbol('1', 2, '0'); // '01'

// Добавочный символ использован три раза
addSymbol('1', 4, '0'); // '0001'

// Добавочные символы обрезаны с конца
addSymbol('q', 4, 'werty'); // 'werq'

// Добавочные символы использованы полтора раза
addSymbol('q', 4, 'we'); // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
addSymbol('qwerty', 4, '0'); // 'qwerty'

function addSymbol(text, minLengthString, symbols) {
  if (text.length > minLengthString) {
    return text;
  }

  const cyclesCount = minLengthString - text.length;
  let j = 0;
  let textBegin = '';

  for (let i = 0; i < cyclesCount; i++) {
    textBegin += symbols[j];

    if (j < symbols.length - 1) {
      j++;
    } else {
      text = textBegin + text;
      j = 0;
      textBegin = '';
    }
  }

  return textBegin + text;
}
