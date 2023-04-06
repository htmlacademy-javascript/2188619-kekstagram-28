const PHOTO_DESCRIPTIONS = [
  'Лучшее фото этого ',
  'Премия за художественную фотографию',
  'Душевно',
  'Когда в школу',
  'ЗФотосессия',
  'Лучшее из 100500 фотографий',
  'Снял на тапок',
  'Уникальный кент',
  'Чайник на столе',
  'Отдыхаю на море',
  'Жизнь прекрасна',
  'Лежу на море',
  'Закат в лесу',
  'Любовь, это сила',
  'Привет мир!',
];

const NAMES = [
  'Иван Сизов',
  'Петя Петров',
  'Маша Иванова',
  'Клава смирнова',
  'Федя Си',
  'Андрей Шмон',
  'Настя Липа',
  'Биба Сыпа',
  'Боба Мыра',
  'Миша Чистов',
  'Даша Мамина',
  'Гриша Волков',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTO_COUNT = 25;

let photoId = 1;
let commentId = 1;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createMessage = () => {
  const message = Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES));
  return [... new Set(message)].join(' ');
};

const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${commentId}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
  commentId += 1;
  return comment;
};

const createPhoto = () => {
  const photo = {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(1, 6) }, createComment),
  };
  photoId += 1;
  return photo;
};

const CreatePhotos = () => Array.from({ length: PHOTO_COUNT }, createPhoto);

CreatePhotos();
