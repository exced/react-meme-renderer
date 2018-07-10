import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';

class Generator {
	constructor() {
		this.textsProps = [];
	}

	/**
	 * Initialize canvas and context
	 * @param {Object} config
	 */
	init({ src, width, height }) {
		this.src = src;
		this.width = width;
		this.height = height;
		this.canvas = createCanvas(this.width, this.height);
		this.ctx = this.canvas.getContext('2d');
	}

	/**
	 * Store text props
	 * @param {Object} textProps
	 */
	appendTextProps(textProps) {
		this.textsProps = [...this.textsProps, textProps];
	}

	/**
	 * Draw text to canvas
	 * @param {Object} textProps
	 */
	drawText({
		text,
		vertical = 'center',
		horizontal = 'center',
		font = '30px Impact',
		fontSize = 30,
		fontColor = 'white',
		fontStrokeColor = 'black',
	}) {
		let self = this;
		const { ctx, width, height } = self;
		ctx.lineWidth = 5;
		ctx.font = font;
		ctx.strokeStyle = fontStrokeColor;
		ctx.fillStyle = fontColor;
		ctx.textAlign = 'center';
		ctx.lineJoin = 'round';

		let x;
		if (typeof horizontal === 'string') {
			switch (horizontal) {
				case 'center':
					x = width / 2;
					break;
				case 'left':
					x = 0;
					break;
				case 'right':
					x = width;
					break;
				default:
					x = width / 2;
					break;
			}
		}
		if (typeof horizontal === 'number') {
			x = horizontal;
		}

		let y;
		if (typeof vertical === 'string') {
			switch (vertical) {
				case 'center':
					y = height / 2;
					break;
				case 'top':
					y = fontSize + 15;
					break;
				case 'bottom':
					y = height - fontSize - 15;
					break;
				default:
					y = height / 2;
					break;
			}
		}
		if (typeof vertical === 'number') {
			y = vertical;
		}

		ctx.strokeText(text, x, y);
		ctx.fillText(text, x, y);
	}

	/**
	 * Generate meme
	 * @param {String} filePath
	 */
	generate(filePath) {
		let self = this;
		loadImage(self.src)
			.then(image => {
				self.ctx.drawImage(image, 0, 0);
				self.textsProps.forEach(textProps => {
					self.drawText(textProps);
				});

				const buffer = self.canvas.toBuffer();
				fs.writeFileSync(filePath, buffer);
			})
			.catch(e => console.log(`Error generating file : ${e}`));
	}
}

export default Generator;
