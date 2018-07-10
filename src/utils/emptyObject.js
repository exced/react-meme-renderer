let emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
	Object.freeze(emptyObject);
}

export default emptyObject;
