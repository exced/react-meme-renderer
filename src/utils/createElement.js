import { Image, Root, Text } from '../components';
import { Image as ImageType, Root as RootType, Text as TextType } from '../constants/types';

let ROOT_NODE_INSTANCE = null;

function getHostContextNode(rootNode) {
	if (typeof rootNode !== undefined) {
		return (ROOT_NODE_INSTANCE = rootNode);
	} else {
		return (ROOT_NODE_INSTANCE = new Root());
	}
}

function createElement(type, props) {
	switch (type) {
		case RootType:
			return new Root();
		case ImageType:
			return new Image(ROOT_NODE_INSTANCE, props);
		case TextType:
			return new Text(ROOT_NODE_INSTANCE, props);
		default:
			return undefined;
	}
}

export { createElement, getHostContextNode };
