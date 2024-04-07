const accessKey = "--"; // Unsplash API Key

const myForm = document.querySelector('form');
const searchInput = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const showMoreButton = document.getElementById('show-more-button');

let inputData = "";
let page = 1; // Changes on clicking Show more button

async function searchImages() {
  inputData = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = response.json();
}

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  searchImages();
});