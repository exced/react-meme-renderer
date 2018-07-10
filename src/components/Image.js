class Image {
	constructor(root, props) {
		this.root = root;
		this.props = props;

		this.generator = this.root.generator;
		this.init();
	}

	init() {
		// Required props
		const { src, width, height } = this.props;
		if (!src) {
			console.warn('Error : Property src is missing in Image');
		}
		if (!width) {
			console.warn('Error : Property width is missing in Image');
		}
		if (!height) {
			console.warn('Error : Property height is missing in Image');
		}
		// Initialize generator
		this.generator.init(this.props);
	}
}

export default Image;
