import Component from './component.js';
import moment from 'moment';

export default class Film extends Component {
  constructor(data, withDescription) {
    super();
    this._title = data.title;
    this._release = moment(data.release).format(`YYYY`);
    this._duration = data.duration;
    this._genre = data.genre;
    this._poster = data.poster;
    this._description = data.description;
    this._rating = data.rating;
    this._commentsNumber = data.comments.length;
    this._withDescription = withDescription;

    this.isFavourite = data.isFavourite;
    this.isWatched = data.isWatched;
    this.inWatchlist = data.inWatchlist;
  }

  get minutesFormated() {
    return `${Math.floor(this._duration / 60)}h&nbsp;${this._duration % 60}m`;
  }

  get template() {
    const card = document.createElement(`article`);
    card.className = `film-card`;
    if (this._withDescription) {
      card.classList.add(`film-card--no-controls`);
    }

    card.innerHTML = `<h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._release}</span>
        <span class="film-card__duration">${this.minutesFormated}</span>
        <span class="film-card__genre">${this._genre.join(`, `)}</span>
      </p>
      <img src="./images/posters/${this._poster}.jpg" alt="" class="film-card__poster">
      ${this._withDescription ? `<p class="film-card__description">${this._description}</p>` : ``}
      <button class="film-card__comments">${this._commentsNumber} comments</button>

      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>`;
    return card;
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  set onAddToWatchList(fn) {
    this._onAddToWatchList = fn;
  }

  set onMarkAsWatched(fn) {
    this._onMarkAsWatched = fn;
  }

  _onMarkAsFavorite(evt) {
    evt.preventDefault();
    this.isFavourite = !this.isFavourite;
  }

  bind() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onClick.bind(this));
    this._element.querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._onAddToWatchList.bind(this));
    this._element.querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._onMarkAsWatched.bind(this));
    this._element.querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._onMarkAsFavorite.bind(this));
  }
}
