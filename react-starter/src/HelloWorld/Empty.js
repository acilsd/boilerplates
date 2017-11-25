/* @flow */
import * as React from 'react';
import styled, { css } from 'react-emotion';

type TAuth = {
  history: History,
  location: Location,
};

const Container = styled('div')`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

class Empty extends React.Component<TAuth> {

  go = () => {
    this.props.history.goBack();
  }

  render(): React.Element<*> {
    return (
      <Container>
        <p css={`
          margin-bottom: 20px;
          font-size: 1.3em;
        `}>Oh hai again!</p>
        <p css={`
          margin-bottom: 30px;
          font-size: 1.2em;
        `}>
          This is 'empty' page -)
        </p>
        <p css={`
          margin-bottom: 30px;
          font-size: 1.2em;
        `}>
          location: {this.props.location.pathname}
        </p>
        <button
          css={`
          font-size: 1em;
          display: inline-block;
          padding: 5px 134px;
          margin-bottom: 30px;
        `}
          onClick={this.go}>
          GoBack()!
        </button>
      </Container>
    );
  }
}

export default Empty;
