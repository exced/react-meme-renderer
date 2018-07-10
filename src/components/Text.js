class Row {
	constructor(root, props) {
		this.root = root;
		this.props = props;

		this.generator = this.root.generator;
	}

	appendChild(child) {
		if (typeof child === 'string') {
			this.generator.appendTextProps({ ...this.props, text: child });
		}
	}
}

export default Row;
