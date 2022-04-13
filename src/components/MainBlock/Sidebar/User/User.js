import React from "react";
import './User.css';
import avatar from '../../../../assets/images/avatar.jpg';

export const User = () => {
  return (
    <div className="user">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
        <h3>James Kot</h3>
      </div>
    </div>
  );
};
