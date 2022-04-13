import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import './LogOut.css';

export const LogOut = ({setIsLoggedIn}) => {
  const logOut = () => setIsLoggedIn(false)
  return (
    <section className="sidebarBottom">
      <button onClick={logOut}>
        <LogoutIcon />
        <span>
          Exit
        </span>
      </button>
    </section>
  );
};
