const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
const profileEditBtn = document.querySelector("#profile-edit-btn");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileName = document.querySelector(".profile__name");
const profileNameInput = document.querySelector("#profile-name-input");
const profileOccupation = document.querySelector(".profile__occupation");
const profileOccupationInput = document.querySelector(
  "#profile-occupation-input"
);
const profileEditForm = profileEditModal.querySelector("#profile-form");
const cardsTemplate =
  document.querySelector("#cards-template").content.firstElementChild;
const cardsListElement = document.querySelector(".cards__list");
const cardsImageElement = document.querySelector(".cards__image");
const addCardBtn = document.querySelector("#card-add-btn");
const addCardModal = document.querySelector("#card-add-modal");
const cardTitle = document.querySelector(".cards__title");
const cardTitleInput = document.querySelector("#card-title-input");
const cardImage = document.querySelector(".cards__image");
const cardUrlInput = document.querySelector("#card-url-input");
const addCardForm = addCardModal.querySelector("#card-form");
const previewImgModal = document.querySelector("#preview-image-modal");
const previewImageElement = previewImgModal.querySelector(".preview__image");
const previewImageCaption = previewImgModal.querySelector(".preview__caption");
const closeButtons = document.querySelectorAll(".modal__close");

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    closePopup(openModal);
  }
}
function handleOverlayClick(evt) {
  if (evt.target.classList.contains("modal"));
  {
    closePopup(evt.target);
  }
}

function closePopup(closePopup) {
  closePopup.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}
function openPopup(popup) {
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}
function renderCard(cardsData) {
  const cardsElement = getCardElement(cardsData);
  cardsListElement.prepend(cardsElement);
}
function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileOccupation.textContent = profileOccupationInput.value;
  closePopup(profileEditModal);
}
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsListElement);
  evt.target.reset();
  closePopup(addCardModal);
}
function handleDeleteCard(evt) {
  evt.target.closest(".cards__element").remove();
}
function handlePreviewImageModal(cardsData) {
  openPopup(previewImgModal);
  previewImageElement.src = cardsData.link;
  previewImageCaption.textContent = cardsData.name;
  previewImageElement.alt = cardsData.name;
}
function getCardElement(cardsData) {
  const cardsElement = cardsTemplate.cloneNode(true);
  const cardsImageElement = cardsElement.querySelector(".cards__image");
  const cardsTitleElement = cardsElement.querySelector(".cards__title");
  const likebutton = cardsElement.querySelector(".cards__like-button");
  const cardDeleteBtn = cardsElement.querySelector(".cards__delete-button");
  cardDeleteBtn.addEventListener("click", handleDeleteCard);
  likebutton.addEventListener("click", () => {
    likebutton.classList.toggle("cards__like-button_active");
  });
  cardsImageElement.addEventListener("click", () =>
    handlePreviewImageModal(cardsData)
  );
  cardsTitleElement.textContent = cardsData.name;
  cardsImageElement.src = cardsData.link;
  cardsImageElement.alt = cardsData.name;
  return cardsElement;
}

profileEditModal.addEventListener("mousedown", handleOverlayClick);
addCardModal.addEventListener("mousedown", handleOverlayClick);
previewImgModal.addEventListener("mousedown", handleOverlayClick);
addCardBtn.addEventListener("click", () => openPopup(addCardModal));
profileEditBtn.addEventListener("click", function () {
  openPopup(profileEditModal);
  profileNameInput.value = profileName.textContent;
  profileOccupationInput.value = profileOccupation.textContent;
});
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach((cardsData) => renderCard(cardsData, cardsListElement));
closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => closePopup(popup));
});
