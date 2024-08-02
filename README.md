# URL and CSS Selector Text Extractor

This project aims to extract text content from a webpage using URL and CSS selectors. The main file for this project is `index.js`.

## Installation

To use this code, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

To extract text content from a webpage, you need to provide a URL and CSS selectors. Modify the `index.js` file and update the `url` and `selectors` variables with the desired values.

Once you have made the necessary changes, run the following command:

```
node index.js -u "https://example.com" -s ".selector"

Where link after -u is the URL of the website and the selector after -s is the css selector that you wanted to see the value of.
```

The extracted text will be displayed in the console.
