import parseMD from "parse-md";

function ServiceList(setServiceArray) {
  let data = [];
  const list = require.context("../datas/services", false, /^\..*\.(md)$/);
  list.keys().map((item) => data.push(list(item)));

  data.forEach((file) => {
    fetch(file)
      .then((r) => r.text())
      .then((fileContents) => {
        const { metadata } = parseMD(fileContents);
        setServiceArray((array) => [...array, metadata]);
      });
  });
}

export default ServiceList;
