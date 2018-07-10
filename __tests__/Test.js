import React from 'react';
import { Image, Text, render } from '../src';
import checksum from './utils/checksum';
import generate from './utils/generate';

it('Generate a meme', async () => {
	const src = `${__dirname}/meme.jpg`;
	const expectedFilePath = `${__dirname}/meme.expected.jpg`;
	const generatedFilePath = `${__dirname}/meme.generated.jpg`;
	// Generate expected file
	generate(src, expectedFilePath);
	const App = () => (
		<Image src={src} width={640} height={420}>
			<Text vertical={'center'} horizontal={'center'}>
				{'CENTER'}
			</Text>
		</Image>
	);
	render(<App />, generatedFilePath);
	const expected = await checksum(expectedFilePath);
	const generated = await checksum(generatedFilePath);
	expect(expected).toEqual(generated);
});
