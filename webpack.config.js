const path = require("path");

module.exports = {
	entry: "./script.js", // путь к вашему основному файлу модуля
	output: {
		filename: "bundle.js", // имя выходного файла
		path: path.resolve(__dirname, "dist"), // путь к директории с выходным файлом
	},
	mode: "production", // 'development' для разработки или 'production' для продакшена
};
