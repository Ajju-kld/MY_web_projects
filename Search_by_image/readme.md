# Image Search

This is a web application that allows you to search for images using the Weaviate database.

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The Image Search application provides a user interface to search for images using the Weaviate database. It allows you to upload an image or select a file from your local system and perform a search based on the image content. The application uses the Weaviate database's image search capabilities to find similar images.

## Getting Started

To get started with the Image Search application, follow these steps:

1. install dockercompose in your pc
2. Install weaviate db in your machine from  https://weaviate.io/developers/weaviate/installation/docker-compose and configure the yaml file with imgv2neural module
3. Then inside the weavite directory where you build the image run `docker compose up`
4. Clone the repository: `git clone https://github.com/your-username/image-search.git`
5. In the repository directory where cloned type below commands
6. Install the dependencies: `npm install`
7. Start the development server: `npm run dev`

## Usage

1. Open the application in your web browser.
2. Drag and drop an image file into the designated area or click on the "Select File" button to choose a file from your local system.
3. The selected image will be displayed in the preview area.
4. Click on the "Search" button to perform an image search using the Weaviate database.
5. The search results will be shown in the results area, displaying similar images found in the database.

Feel free to customize the application by modifying the HTML, CSS, and JavaScript files according to your requirements.

## Contributing

Contributions to the Image Search application are welcome! If you find any bugs, have feature requests, or want to make improvements, please open an issue or submit a pull request.

