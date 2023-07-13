import weaviate from 'weaviate-ts-client';

// declare a client instance
const client = weaviate.client({
    scheme: 'http',
    host: 'localhost:8080',
});
// functionn for the image search
export function searchByPhoto(uploadInput) {
    const file = uploadInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = async function (event) {
            const imageData = event.target.result;

            // Perform image search
            const data = await performImageSearch(imageData);

            displayImage(data);
        };

        reader.readAsDataURL(file);
    }
}
let hasFileInput = true;
const imageElement = document.createElement('img');



// function to preview the image file that user have uploaded
export function previewImage(uploadInput) {
    const file = uploadInput.files[0];

    const reader = new FileReader();

    reader.onload = function (event) {
        imageElement.src = event.target.result;

        const parentElement = uploadInput.parentNode;
        if (parentElement && parentElement.contains(uploadInput)) {
            parentElement.removeChild(uploadInput);
            hasFileInput = false;
        }

        const imageContainer = document.getElementById('uploadArea');
        imageContainer.innerHTML = '';
        imageContainer.className = 'uploadArea_afterUpload';
        imageContainer.appendChild(imageElement);
    };


    if (file) {
        reader.readAsDataURL(file);
    } else {
        imageElement.src = '';
        const imageContainer = document.getElementById('uploadArea');
        imageContainer.innerHTML = `<p>Drag and drop file here</p>`;
        imageContainer.appendChild(uploadInput);
        hasFileInput = true;
        imageContainer.className='upload-area'
        
    }
}


// Function to perform image search
async function performImageSearch(imageData) {
    // Replace this with your own image search implementation using base64 data
    // Example implementation:
    const test_image = imageData.split(',')[1]; // Extract base64 data from data URL
    const resImage = await client.graphql
        .get()
        .withClassName('Image_Search')
        .withFields(['image'])
        .withNearImage({ image: test_image })
        .withLimit(1)
        .do();

    const result = resImage.data.Get.Image_Search[0].image;

    console.log('Performing image search with base64 data:', imageData);
    console.log('Result:', result);

    return result;
}
let image_already_found = false;
let imageElement2=document.createElement('img');
// Function to display the image
function displayImage(data) {
    if (!image_already_found) {
    imageElement2.src = `data:image/jpeg;base64,${data}`;

    const imageContainer = document.getElementById('results');
  
    imageContainer.appendChild(imageElement2);
    }
    else{
        imageElement2.src = `data:image/jpeg;base64,${data}`;
    }
}
