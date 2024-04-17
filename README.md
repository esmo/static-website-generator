# Static Website Generator

This is a simple static website generator based on Eleventy. It's designed to be minimalistic and straightforward, suitable for small projects and personal blogs.

## Getting Started

To get started with this static website generator, follow these steps:

1. **Clone the Repository**

`git clone https://github.com/esmo/static-website-generator`

2. **Install Dependencies**

`npm install`

3. Adjust the input and output directories to your needs.

Rename the file `.env-dist` to `.env` and adjust the SWG_INPUT_DIRECTORY and SWG_OUTPUT_DIRECTORY environment variables to your needs.

4. Run the script

- To edit the files and see the result right away, run `npm run start` from the command line.
- To parse the source directory and write the result to the output directory, run `npm run build`.
