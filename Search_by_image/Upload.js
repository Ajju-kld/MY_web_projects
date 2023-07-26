
import weaviate from 'weaviate-ts-client';


// Configure the client
const client = weaviate.client({
    scheme: 'http', 
    host: 'localhost:8080',
});

//global element used as animation
const element = document.querySelector('.card');

// Declare the condition variable outside the block

export function uplaod_to_db(uploadInput) {
const file = uploadInput.files[0];

if(element.classList.contains('animate_card')){
    element.classList.remove('animate_card');
}

  
    if (file) {
        loading(true);
        const reader = new FileReader();

        reader.onload = function (event) {
            const imageData = event.target.result;

            setTimeout( () => {
                upload(imageData);
                URL.revokeObjectURL(imageData)
            }, 3000); // Wait for 3 seconds

            
        };

        reader.readAsDataURL(file);
       
    }

    // loading(false);
  
}

export function previewImage(uploadInput) {
    const file = uploadInput.files[0];

    const reader = new FileReader();

    reader.onload = function (event) {
        imageElement.src = event.target.result;

        const parentElement = uploadInput.parentNode;
        if (parentElement && parentElement.contains(uploadInput)) {
            parentElement.removeChild(uploadInput);
            
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
        imageContainer.className = 'upload-area'

    }
}



async function upload(imageData){
    const image = imageData.split(',')[1];
    try {

        const data=image.toString('base64');
        await client.data
        .creator()
        .withClassName('Image_Search')
        .withProperties({ image:image })
        .do();
        console.log("successfully uploaded");
        loading(false);
 
        element.classList.add('animate_card');

    } catch (error) {
        console.log(error);
    }
}

function loading(condition) {
    const spinner1 = document.querySelector('.backspinner-1');
    const spinner2 = document.querySelector('.backspinner-2');

    if (condition) {
        spinner1.style.opacity = 1;
        spinner2.style.opacity = 1;
console.log("loading conditio")
    } else {
        spinner1.style.opacity = 0;
        spinner2.style.opacity = 0;
    }
}
