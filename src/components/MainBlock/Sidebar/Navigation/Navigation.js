import React from "react";
import "./Navigation.css";

import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import SettingsIcon from "@mui/icons-material/Settings";

export const Navigation = () => {
  return (
    <nav className="nav">
      <a href="/" className="active">
        <LaptopChromebookIcon />
        <span>Blog</span>
      </a>
      
      <a href="/">
        <LocalActivityIcon />
        <span>Favorite</span>
      </a>
      
      <a href="/">
        <SettingsIcon />
        <span>Settings</span>
      </a>
    </nav>
  );
};
