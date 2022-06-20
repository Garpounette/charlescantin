import parseMD from "parse-md";

function imageList(setImageArray, Filenames) {
  let data = [];
  const list = require.context("../datas/images", false, /^\..*\.(md)$/);
  list.keys().map((item) => data.push(list(item)));

  data.map((file) => {
    fetch(file)
      .then((r) => r.text())
      .then((fileContents) => {
        const { metadata } = parseMD(fileContents);

        Filenames.map((filename) => {
          file = metadata.file.slice(0, -4);
          if (filename.includes(file))
            setImageArray((array) => [
              ...array,
              { name: metadata.name, category: metadata.category, file: filename },
            ]);
        });
      });
    return "";
  });
}

export default imageList;
