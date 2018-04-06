##Simple React-Webpack boilerplate

---
*  React
*  Flow
*  Redux
*  Styled-components (emotion js)
*  Webpack 3???
*  React-router v4
*  React-hot-loader v3
---

### How can i make this work?

*  `npm install`
*  `npm run wds`
*  `npm build`

---

### Important note:

Flow should be integrated in your IDE / TE of choice (check Nuclide (Atom) as the simpliest yet very powerful example). I'm too lazy to implement proper webpack / script flow-setup;

### About my .babelrc

Im not targeting old browsers anymore, thats why i disabled all polyfills and direct transpilation to ES5. If you need shIEt (9-10-11), you should:

*  edit babelrc (the simpliest way is to remove `"targets": ` and replace it with `"browsers": 'last 2 versions'` or whatever)
*  install babel-polyfill and require it in your entrypoint (`import 'babel-polyfill'` at the top of your file). You can also include only specific polyfills, check babel documentation for further info
*  uncomment disabled UglifyJsPlugin in webpack.config (do not forget to remove `new UglifyJsPlugin()` at line 50 or it will fail your build)
*  receive a bunch of errors :D

### Important note#2:

No css! I moved all of my projects to css-in-js. If you need plain-old css, please check Webpack' official documentation.
I bet you can just install proper loaders (do not forget to install autoprefixer and post-css loader!) and uncomment disabled options in webpack.config
