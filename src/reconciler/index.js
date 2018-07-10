import ReactReconciler from 'react-reconciler';

import emptyObject from '../utils/emptyObject';
import { createElement, getHostContextNode } from '../utils/createElement';

const Reconciler = ReactReconciler({
	appendInitialChild(parentInstance, child) {
		if (parentInstance.appendChild) {
			parentInstance.appendChild(child);
		}
	},

	createInstance(type, props, internalInstanceHandle) {
		return createElement(type, props);
	},

	createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
		return text;
	},

	finalizeInitialChildren(element, type, props) {
		return false;
	},

	getPublicInstance(inst) {
		return inst;
	},

	prepareForCommit() {},

	prepareUpdate(element, type, oldProps, newProps) {
		return true;
	},

	resetAfterCommit() {},

	resetTextContent(element) {},

	getRootHostContext(instance) {
		return getHostContextNode(instance);
	},

	getChildHostContext(instance) {
		return emptyObject;
	},

	shouldSetTextContent(type, props) {
		return false;
	},

	now: () => Date.now(),

	useSyncScheduling: true,

	supportsMutation: false,
});

export default Reconciler;
