// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(file1, "utf-8", (err, data1) => {
    if (err) {
      return console.log("Error data 1" + err);
    }

    fs.readFile(file2, "utf-8", (err, data2) => {
      if (err) {
        return console.log("Error data 2" + err);
      }

      fs.readFile(file3, "utf-8", (err, data3) => {
        if (err) {
          return console.log("Error data 3" + err);
        }

        const parseData1 = JSON.parse(data1);
        const message1 = getLastWord(parseData1.message);

        const parseData2 = JSON.parse(data2);
        const message2 = getLastWord(parseData2[0].message);

        const parseData3 = JSON.parse(data3);
        const message3 = getLastWord(parseData3[0].data.message);

        fnCallback([message1, message2, message3]);
      });
    });
  });
};

const getLastWord = (sentence) => {
  const arrSentence = sentence.split(" ").reverse();

  return arrSentence[0];
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
