import { Root as RootType } from '../constants/types';
import { createElement } from '../utils/createElement';
import Reconciler from '../reconciler/';

function render(element, filePath) {
	const container = createElement(RootType);

	const node = Reconciler.createContainer(container);

	Reconciler.updateContainer(element, node, null);

	container.generator.generate(filePath);
}

export default render;
