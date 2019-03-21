import Component from './component.js';

export default class Filter extends Component {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    const nav = document.createElement(`nav`);
    nav.className = `main-navigation`;

    nav.innerHTML = this._data.map((filter) =>
      `<a href="#${filter.name}" id="${filter.name}" class="main-navigation__item${filter.name === `stats` ? ` main-navigation__item--additional` : ``}">${filter.fullname}${(filter.name !== `all` && filter.name !== `stats`) ? `<span class="main-navigation__item-count">${filter.count}</span>` : ``}</a>`)
      .join(``);
    return nav;
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  set onStatsClick(fn) {
    this._onStatsClick = fn;
  }

  bind() {
    this._element.addEventListener(`click`, this._onFilter.bind(this));
    this._element.querySelector(`.main-navigation__item--additional`).addEventListener(`click`, this._onStatsClick.bind(this));
  }
}