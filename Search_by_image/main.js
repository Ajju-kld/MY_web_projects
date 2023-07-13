import { searchByPhoto, previewImage } from './search';

const uploadInput = document.getElementById('uploadInput');
const searchButton = document.getElementById('searchButton');

const select_item=document.getElementById('selectButton');
uploadInput.addEventListener('change', () => {
  previewImage(uploadInput);
});
select_item.addEventListener('click', () => {
  uploadInput.click();
  previewImage(uploadInput);
});
searchButton.addEventListener('click', searchByPhoto.bind(null, uploadInput));
uploadInput