import React, { Component } from 'react';

import { Image, Text, render } from '../src';

class App extends Component {
	render() {
		const width = 550;
		const height = 690;
		return (
			<Image src={`${__dirname}/meme.jpg`} width={width} height={height}>
				<Text vertical={'top'} horizontal={'center'}>
					{"I don't always write memes"}
				</Text>
				<Text vertical={'bottom'} horizontal={'center'}>
					{'But when I do, I use React'}
				</Text>
			</Image>
		);
	}
}

render(<App />, `${__dirname}/my_react_meme.jpg`);
