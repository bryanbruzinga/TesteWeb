const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract();
const options = { firstPage: 79, lastPage: 85 };
const fs = require("fs");
let dados = "";

pdfExtract.extract("componente_organizacional.pdf", options, (err, data) => {
  if (err) {
    return console.log(err);
  }
  data.pages.map((dado) => {
    dado.content.map((c) => {
      return (dados += c.str);
    });
  });
  fs.writeFile("extracaoPdf.csv", dados, (err) => {
    if (err) throw err;
  });
});
