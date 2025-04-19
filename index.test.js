const fs = require("fs");
const htmlValidator = require("html-validator");

const options = {
  data: fs.readFileSync("index.html", "utf8"),
  format: "text",
};

htmlValidator(options)
  .then((data) => {
    console.log("✅ Validación HTML exitosa.");
    console.log(data);
  })
  .catch((error) => {
    console.error("❌ Error de validación:");
    console.error(error);
    process.exit(1);
  });
