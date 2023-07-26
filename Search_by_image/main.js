import { Search_event, previewImage } from './search';
import weaviate from 'weaviate-ts-client';
import { uplaod_to_db } from './Upload';

const client = weaviate.client({
  scheme: 'http',
  host: 'localhost:8080',
});



const uploadInput = document.getElementById('uploadInput');
const searchButton = document.getElementById('searchButton');
const upload_button = document.getElementById('uploadButton');
const select_item=document.getElementById('selectButton');
uploadInput.addEventListener('change', () => {
  previewImage(uploadInput);
});
select_item.addEventListener('click', () => {
  uploadInput.click();
  previewImage(uploadInput);
});
if (searchButton) {
  searchButton.addEventListener('click', Search_event.bind(null, uploadInput));
  
}

if (upload_button) {
  upload_button.addEventListener('click', uplaod_to_db.bind(null, uploadInput));
}


document.addEventListener("DOMContentLoaded", function () {
  initFunction(); // Call the function from app.js when the page loads
});

async function initFunction() {
  try {
    const schemaExists = await client.schema.exists("Image_Search");

    if (schemaExists) {
      console.log("Schema exists");
      return false;

    }
    else {
      console.log("scheme doesnt exist")
      const schemaConfig = {
        class: 'Image_Search',
        vectorizer: 'img2vec-neural',
        vectorIndexType: 'hnsw',
        moduleConfig: {
          'img2vec-neural': {
            imageFields: ['image'],
          },
        },
        properties: [
          {
            name: 'image',
            dataType: ['blob'],
          },

        ],
      };

      await client.schema.classCreator().withClass(schemaConfig).do();
      return true;
    }

  } catch (error) {
 console.log(error);
  }
}

