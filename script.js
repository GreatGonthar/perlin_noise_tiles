import perlinArr from "./perlinArr.js";
import drawAutotiles from "./drawAutotiles.js";
import drawImage from "./drawImage.js";
import autotileMaster from "./autotileMaster.js";

let noiseLevel = 0;
const squareSize = 16;
let noiseScale = 0.05;
let step = 20;
let scaleX = 0;
let scaleY = 0;
let tileScale = 1;
let TILES_WIDTH = 60;
let TILES_HEIGHT = 40;

let WINDOW_WIDTH = TILES_WIDTH * squareSize;
let WINDOW_HEIGHT = TILES_HEIGHT * squareSize;
const SEED = Math.floor(Math.random() * 40000);

let seaLevel = 0;
let colors = [
	"#235d5e",
	"#2b7273",
	"#42acaf",
	"#4ebcb9",
	"#b1c9a7",
	"#e7d593",
	"#c3d657",
	"#b1d354",
	"#a2c14c",
	"#819a3d",
	"#6e8334",
];

let tilesetSprite = [];
let summerTreesSprite = [];
let tilesetArr = [];
function sketch(p) {
	p.preload = () => {
		tilesetSprite = p.loadImage("./assets/tileset.png");
		summerTreesSprite = p.loadImage("./assets/summerTrees.png");
	};
	p.setup = () => {
		p.createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
		p.noLoop();
		p.background(255);
		p.noiseSeed(SEED);
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 8; j++) {
				tilesetArr.push({ x: j * 16, y: i * 16 });
			}
		}
	};
	p.draw = () => {
		let tilesArr = perlinArr(p, seaLevel, TILES_WIDTH, TILES_HEIGHT, noiseScale, scaleX, scaleY);
		let autotileNumbers = autotileMaster(tilesArr.level1);

		for (let y = 0; y < TILES_HEIGHT; y += 1) {
			for (let x = 0; x < TILES_WIDTH; x += 1) {
				let myTile = autotileNumbers[y][x];
				let terrainObj = tilesArr.level2[y][x];

				drawImage(p, tilesetSprite, squareSize, tileScale, x, y, tilesetArr[myTile].x, tilesetArr[myTile].y);

				if (terrainObj.stone) {
					p.image(
						summerTreesSprite,
						x * squareSize * tileScale,
						y * squareSize * tileScale,
						squareSize * tileScale,
						squareSize * tileScale,
						terrainObj.stone.x * squareSize,
						terrainObj.stone.y * squareSize + squareSize * 3,
						squareSize,
						squareSize
					);
				}
				if (terrainObj.tree) {
					p.image(
						summerTreesSprite,
						x * squareSize * tileScale - squareSize,
						y * squareSize * tileScale - squareSize * 2,
						squareSize * 3 * tileScale,
						squareSize * 3 * tileScale,
						terrainObj.tree.x * squareSize * 3,
						terrainObj.tree.y,
						squareSize * 3,
						squareSize * 3
					);
				}
			}
		}
	};

	p.keyPressed = (e) => {
		console.log(tileScale);
		if (p.keyCode === 37) {
			scaleX -= noiseScale * step; // Двигаемся влево
		} else if (p.keyCode === p.RIGHT_ARROW) {
			scaleX += noiseScale * step; // Двигаемся вправо
		} else if (p.keyCode === p.DOWN_ARROW) {
			scaleY += noiseScale * step; // Двигаемся вправо
		} else if (p.keyCode === p.UP_ARROW) {
			scaleY -= noiseScale * step; // Двигаемся вправо
		} else if (p.keyCode === 107) {
			noiseScale /= 2;
		} else if (p.keyCode === 109) {
			noiseScale *= 2;
		} else if (p.keyCode === 51 && tileScale > 0.125) {
			tileScale /= 2;
			TILES_WIDTH *= 2;
			TILES_HEIGHT *= 2;
		} else if (p.keyCode === 52) {
			tileScale *= 2;
			TILES_WIDTH /= 2;
			TILES_HEIGHT /= 2;
		} else if (p.keyCode === 49 && tileScale > 0.125) {
			noiseScale /= 2;
			tileScale /= 2;
			TILES_WIDTH *= 2;
			TILES_HEIGHT *= 2;
		} else if (p.keyCode === 50) {
			noiseScale *= 2;
			tileScale *= 2;
			TILES_WIDTH /= 2;
			TILES_HEIGHT /= 2;
		} else if (p.keyCode === 53) {
			seaLevel -= 0.01;
		} else if (p.keyCode === 54) {
			seaLevel += 0.01;
		}

		p.redraw();
	};
}
new p5(sketch);
document.addEventListener(
	"keydown",
	function (event) {
		if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
			event.preventDefault();
		}
	},
	false
);
