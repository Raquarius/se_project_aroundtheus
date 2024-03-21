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
const profileEditCloseBtn = document.querySelector(".modal__close");
const profileName = document.querySelector(".profile__name");
const profileNameInput = document.querySelector("#profile-name-input");
const profileOccupation = document.querySelector(".profile__occupation");
const profileOccupationInput = document.querySelector(
  "#profile-occupation-input"
);

profileEditBtn.addEventListener("click", function () {
  profileNameInput.value = profileName.textContent;
  profileEditModal.classList.add("modal_opened");
  profileOccupationInput.value = profileOccupation.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseBtn.addEventListener("click", function () {
  profileEditModal.classList.remove("modal_opened");
});
