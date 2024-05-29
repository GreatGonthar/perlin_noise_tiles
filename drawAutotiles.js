let drawAutotiles = (mapArr, x, y, GROUND) => {
	let mainTile = GROUND[13];
	if (mapArr[y][x] === 1 && y > 0 && y < mapArr.length - 1 && x > 0 && x < mapArr[y].length - 1) {
		let u = mapArr[y - 1][x];
		let ur = mapArr[y - 1][x + 1];
		let r = mapArr[y][x + 1];
		let rd = mapArr[y + 1][x + 1];
		let d = mapArr[y + 1][x];
		let dl = mapArr[y + 1][x - 1];
		let l = mapArr[y][x - 1];
		let ul = mapArr[y - 1][x - 1];
		if (l === 0 && r === 1 && u === 0 && d === 1 && rd === 1 && ul === 0) {
			mainTile = GROUND[0];
		}
		if (l === 1 && r === 1 && u === 0 && d === 1) {
			mainTile = GROUND[1];
		}
		if (l === 1 && r === 0 && u === 0 && d === 1 && ur === 0 && dl === 1) {
			mainTile = GROUND[2];
		}
		if (l === 1 && r === 1 && u === 1 && d === 1 && ul === 0) {
			mainTile = GROUND[3];
		}
		if (l === 1 && r === 1 && u === 1 && d === 1 && ur === 0) {
			mainTile = GROUND[4];
		}
		if (l === 0 && r === 1 && u === 1 && d === 1) {
			mainTile = GROUND[5];
		}
		if (l === 1 && r === 1 && u === 1 && d === 1 && ur === 1 && rd === 1 && dl === 1 && ul === 1) {
			mainTile = GROUND[6];
		}
		if (l === 1 && r === 0 && u === 1 && d === 1) {
			mainTile = GROUND[7];
		}
		if (l === 1 && r === 1 && u === 1 && d === 1 && dl === 0) {
			mainTile = GROUND[8];
		}
		if (l === 1 && r === 1 && u === 1 && d === 1 && rd === 0) {
			mainTile = GROUND[9];
		}
		if (l === 0 && r === 1 && u === 1 && d === 0 && dl === 0 && ur === 1) {
			mainTile = GROUND[10];
		}
		if (l === 1 && r === 1 && u === 1 && d === 0) {
			mainTile = GROUND[11];
		}
		if (l === 1 && r === 0 && u === 1 && d === 0 && rd === 0 && ul === 1) {
			mainTile = GROUND[12];
		}
		if (l === 0 && r === 0 && u === 0 && d === 0) {
			mainTile = GROUND[6];
		}
	} else {
		mainTile = GROUND[13];
	}
	return mainTile;
};
export default drawAutotiles;
