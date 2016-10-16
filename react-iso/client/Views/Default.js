import React from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import { webpackHost, webpackPort } from '../../config/config-env';

export default class Default extends React.Component {
  render() {
    const { component, store } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';

    return (
      <html lang="en">
        <head>
          <title>Hello, world!</title>
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }}
            charSet="UTF-8"
          />
          <script
            src={
              process.env.NODE_ENV === 'development' ?
              `http://${webpackHost}:${webpackPort}/assets/main.js` :
              '/assets/main.js'
            }
            charSet="UTF-8"
          />
        </body>
      </html>
    );
  }
}
Default.propTypes = {
  component: React.PropTypes.node,
  store: React.PropTypes.object,
};
