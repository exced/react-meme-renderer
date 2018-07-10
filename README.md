# React meme renderer

Generate meme using React Fiber.

![Input](https://github.com/exced/react-meme-renderer/blob/master/example/meme.jpg) ![Output](https://github.com/exced/react-meme-renderer/blob/master/example/my_react_meme.jpg)

## Installation

This renderer depends on [node-canvas](https://github.com/Automattic/node-canvas). Check the website to install the dependencies.

## Getting started

```bash
yarn
yarn example
yarn test
```

## API

### render

render(<App>, generateAtPath)

### Image

| key    | type   | required | default | description              |
| ------ | ------ | -------- | ------- | ------------------------ |
| src    | string | yes      |         | src file path            |
| width  | number | yes      |         | width of generated meme  |
| height | number | yes      |         | height of generated meme |

### Text

| key             | type           | required | default       | values                              | description       |
| --------------- | -------------- | -------- | ------------- | ----------------------------------- | ----------------- |
| children        | string         | yes      |               |                                     | text              |
| font            | string         | no       | '30px Impact' |                                     | font              |
| fontSize        | number         | no       | 30            |                                     | font size         |
| fontColor       | string         | no       | 'white'       |                                     | font color        |
| fontStrokeColor | string         | no       | 'black        |                                     | font stroke color |
| vertical        | number, string | no       | 'center'      | 'center', 'top', 'bottom' or number | x canvas position |
| horizontal      | number, string | no       | 'center'      | 'center', 'left', 'right' or number | y canvas position |