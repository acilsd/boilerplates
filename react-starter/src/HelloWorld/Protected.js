/* @flow */
import * as React from 'react';
import styled, { css } from 'react-emotion';

import type { Store, ActionType } from './redux/types';

type TAuth = Store & {
  logout(): void,
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

class Protected extends React.Component<TAuth> {

  handleAuth = async (): Promise<*> => {
    await this.props.logout();
    this.props.history.push('/');
  }

  render(): React.Element<*> {
    return (
      <Container>
        <p css={`
          margin-bottom: 20px;
          font-size: 1.3em;
        `}>Oh hai!</p>
        <p css={`
          margin-bottom: 30px;
          font-size: 1.2em;
        `}>
          This is 'protected' page -)
        </p>
        <p css={`
          margin-bottom: 30px;
          font-size: 1.2em;
        `}>
          location: {this.props.location.pathname}
        </p>
        <p css={`
          margin-bottom: 30px;
          font-size: 1.2em;
        `}>
          Your hardcoded username is {this.props.username}
        </p>
        <button
          css={`
          font-size: 1em;
          display: inline-block;
          padding: 5px 134px;
          margin-bottom: 30px;
        `}
          onClick={this.handleAuth}>
          Click me to 'logout'
        </button>
      </Container>
    );
  }
}

import { connect } from 'react-redux';
import * as actions from './redux/actions';
import type { RootState } from 'helpers/types';

const mapStateToProps = (state: RootState): Store => {
  return {
    username: state.hello_world.username,
    token: state.hello_world.token,
    isLoggedIn: state.hello_world.isLoggedIn,
  };
};

const mapDispatchToProps = {
  auth: actions.auth,
  logout: actions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Protected);
