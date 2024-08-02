const cheerio = require("cheerio");
const axios = require("axios");
const { program } = require("commander");

program
  .option("-u, --url <url>", "URL to fetch")
  .option("-s, --selector <selector>", "Selector to use");

program.parse(process.argv);

const options = program.opts();

if (!options.url || !options.selector) {
  console.error("Please provide both URL and selector");
  process.exit(1);
}

axios
  .get(options.url)
  .then((res) => {
    const $ = cheerio.load(res.data);
    const text = $(options.selector).text();
    console.log(text);
  })
  .catch((error) => {
    console.error("Error Fetching URL", error);
  });
