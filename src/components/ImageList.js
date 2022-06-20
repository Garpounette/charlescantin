import parseMD from "parse-md";

function ImageList(setImageArray, Filenames) {
  let data = [];
  const list = require.context("../datas/images", false, /^\..*\.(md)$/);
  list.keys().map((item) => data.push(list(item)));

  data.forEach((file) => {
    fetch(file)
      .then((r) => r.text())
      .then((fileContents) => {
        const { metadata } = parseMD(fileContents);

        Filenames.forEach((filename) => {
          file = metadata.file.slice(0, -4);
          if (filename.includes(file))
            setImageArray((array) => [
              ...array,
              { name: metadata.name, category: metadata.category, file: filename },
            ]);
        });
      });
  });
}

export default ImageList;
