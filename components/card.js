export default class Card {
  constructor({ name, link }, cardSelector, handleImageCLick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageCLick = handleImageCLick;
  }

  _setEventListeners() {
    this._cardsElement
      .querySelector(".cards__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });
    this._cardsElement
      .querySelector(".cards__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    this._cardsElement
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._handleImageCLick(this._name, this._link);
      });
  }

  _handleLikeIcon() {
    this._cardsElement
      .querySelector(".cards__like-button")
      .classlist.toggle("cards__like-button_active");
  }
  _handleDeleteCard() {
    this._cardsElement.remove();
    this._cardsElement = null;
  }
  // _getTemplate() {}

  getView() {
    this._cardsElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__element")
      .cloneNode(true);
    this._setEventListeners();
    return this._cardsElement;
  }
}
