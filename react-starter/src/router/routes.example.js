// import React from 'react';
// import { Match, Miss } from 'react-router';
// import { connect } from 'react-redux';
// import * as actions from '../actions';
//
// // import Login from '../components/Login';
// // import Main from '../components/Main/';
// // import Add from '../components/Add/';
// // import ErrorPage from '../components/Error';
//
// import ProtectedRoute from './redirect';
//
// const AppRoutes = ({isLoggedIn}) => {
//   return (
    // <div>
    //   <Match pattern='/' exactly component={Login}/>
    //   <ProtectedRoute pattern='/main' status={isLoggedIn} component={Main} />
    //   <ProtectedRoute pattern='/add' status={isLoggedIn} component={Add} />
    //   <Miss component={ErrorPage}/>
    // </div>
//   );
// };
//
// const mapStateToProps = state => ({
//   isLoggedIn: state.user.loggedIn
// });
//
//
// export default connect(mapStateToProps, actions)(AppRoutes);
