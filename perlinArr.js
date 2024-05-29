let perlinArr = (p, seaLevel, width, height, noiseScale, scaleX, scaleY) => {
	let arr = { level1: [], level2: [] };
	for (let y = 0; y < height; y += 1) {
		let arrX = { level1: [], level2: [] };
		for (let x = 0; x < width; x += 1) {
			let nx = noiseScale * x + scaleX;
			let ny = noiseScale * y + scaleY;
			let c2 = p.noise(nx, ny) + seaLevel;
			let c1 = Math.floor(c2 * 2);
			let random = Math.floor(Math.random() * 10);
			let level2 = false;
			if (c2 > 0.7 && c2 < 1 && random === 1) {
				level2 = { tree: { x: Math.floor(Math.random() * 3), y: 0 } };
			}
			if (c2 > 0.6 && c2 < 0.61 && random === 2) {
				level2 = { stone: { x: Math.floor(Math.random() * 8), y: Math.floor(Math.random() * 2) } };
			}
			arrX.level1.push(c1);
			arrX.level2.push(level2);
			// ArrX.push({ level1: c1, level2: level2 });
		}
		arr.level1.push(arrX.level1);
		arr.level2.push(arrX.level2);
	}
	return arr;
};
export default perlinArr;
