import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/operations';

import css from './UserMenu.module.css';
import { selectUser } from 'redux/user/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
