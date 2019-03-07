const filmsData = new Map([
  [`title`, new Array(15).fill().map((val, i)=> `movie № ${i + 1}`)],
  [`year`, new Array(10).fill().map((val, i)=> 2009 + i)],
  [`country`, [`USA`, `Italy`, `Canada`, `France`, `Germany`]],
  [`duration`, [`1h&nbsp;10m`, `1h&nbsp;30m`, `2h&nbsp;10m`, `2h&nbsp;30m`]],
  [`poster`, [`accused`, `blackmail`, `blue-blazes`, `fuga-da-new-york`, `moonrise`, `three-friends`]]]);

const randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.
Aliquam id orci ut lectus varius viverra.
Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.
Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`. `);
const genres = [`Adventure`, `Comedy`, `Horror`, `Crime`, `Detective story`, `Fantasy`, `Drama`, `Romance`, `Thriller`, `Animation`];

/**
 * @description получить случайный элемент массива
 *
 * @param {Array} arr массив
 *
 * @return {String|Number} элемент массива
 */
const getRandomEl = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * @description получить случайное число в диапазоне
 *
 * @param {Number} num максимум
 *
 * @return {Number} случайное число от 0 до num
 */
export const getRandomNumber = (num) => Math.floor(Math.random() * num);

/**
 * @description создать данные для случайного фильма
 *
 * @return {Object} film
*/
const makeFilm = () => {
  let film = {description: ``,
    genre: [],
    rating: [getRandomNumber(100) / 10]};

  filmsData.forEach((value, key) => {
    film[key] = getRandomEl(value);
  });

  // добавить в описание от 1 до 3 случайных предложений из текста
  for (let i = 0; i < 1 + getRandomNumber(3); i++) {
    film.description += getRandomEl(randomText);
    film.genre.push(getRandomEl(genres));
  }

  return film;
};

/**
 * @description создать список произвольных фильмов
 *
 * @param {Number} num кол-во
 *
 * @return {Array}
 */
export default (num) => new Array(num).fill().map(makeFilm);
