
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

export async function upload(imageData){
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

export function loading(condition) {
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
