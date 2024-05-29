let drawImage = (p, tilesetSprite, squareSize, tileScale, x, y, tileCellX, tileCellY) => {
	p.image(
		tilesetSprite,
		x * squareSize * tileScale,
		y * squareSize * tileScale,
		squareSize * tileScale,
		squareSize * tileScale,
		tileCellX,
		tileCellY,
		squareSize,
		squareSize
	);
};
export default drawImage;
