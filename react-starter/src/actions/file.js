/*eslint no-console: off*/
import { HIDE_MODALS } from '../constants/';
import { signin, signOut, ghProvider, storeSession } from '../nowhere';

export const hideAllModals = () => ({ type: HIDE_MODALS });

export const login = () => {
  return (dispatch) => {
    return signin.signInWithPopup(ghProvider).then((res) => {
      const { displayName, photoURL, uid } = res.user;
      const data = {
        name: displayName,
        img: photoURL
      };
      window.localStorage.setItem(
        'user_task', JSON.stringify({...data, uid})
      );
      dispatch(storeSession(
        uid, data));
    }, err => console.error(err));
  };
};
