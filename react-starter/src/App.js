import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from './components/User';
import Page from './components/Page';
import * as pageActions from './actions/actions-page';
import * as userActions from './actions/actions-user';
import style from './style/custom.scss';

class App extends Component {
  render() {
    const { user, page } = this.props;
    const { getPhotos } = this.props.pageActions;
    const{ handleLogin } = this.props.userActions;

    return (
      <div>
        <Page
          photos={page.photos}
          year={page.year}
          getPhotos={getPhotos}
          fetching={page.fetching}
        />
        <User
          name={user.name}
          error={user.error}
          handleLogin={handleLogin}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
