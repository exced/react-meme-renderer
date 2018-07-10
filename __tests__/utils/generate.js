import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';

function generate(src, filePath) {
	const width = 640;
	const height = 420;
	const fontSize = 30;
	const text = 'CENTER';
	const x = width / 2;
	const y = height / 2;
	const canvas = createCanvas(width, height);
	const ctx = canvas.getContext('2d');

	loadImage(src).then(image => {
		ctx.drawImage(image, 0, 0);
		ctx.lineWidth = 5;
		ctx.font = '30px Impact';
		ctx.strokeStyle = 'black';
		ctx.fillStyle = 'white';
		ctx.textAlign = 'center';
		ctx.lineJoin = 'round';

		ctx.strokeText(text, x, y);
		ctx.fillText(text, x, y);

		const buffer = canvas.toBuffer();
		fs.writeFileSync(filePath, buffer);
	});
}

export default generate;
