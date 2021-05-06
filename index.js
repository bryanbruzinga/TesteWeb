const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const BASE_URL = "http://www.ans.gov.br";
const url = `${BASE_URL}/prestadores/tiss-troca-de-informacao-de-saude-suplementar`;
let linkList = [];
let directLink = "";

const getWebsiteLinks = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    $("div.alert-icolink").each(function () {
      let link = $(this).find("a").attr("href");
      linkList.push(link);
    });
  } catch (error) {
    console.error(error);
  }
};

const moveToNextPage = async (linkList) => {
  try {
    const response = await axios.get(linkList);
    const $ = cheerio.load(response.data);
    $("div.table-responsive").each(function () {
      let link = $(this).find("a").attr("href");
      directLink = `${BASE_URL}${link}`;
    });
  } catch (error) {
    console.error(error);
  }
};

const downloadFile = async (directLink) => {
  let file = fs.createWriteStream("componente_organizacional.pdf");
  const url = encodeURI(directLink);
  const response = await axios({
    method: "get",
    url: url,
    responseType: "stream",
  });
  response.data.pipe(file);
};

(async () => {
  await getWebsiteLinks(url);
  await moveToNextPage(`${BASE_URL}${linkList[0]}`);
  await downloadFile(directLink);
})();
