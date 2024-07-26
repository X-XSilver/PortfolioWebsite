import React from "react";

const NavBar = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-sm position-fixed top-0 end-0 bg-primary-subtle col-3 rounded-start-pill shadow">
        <div className="container-fluid justify-content-end">
          <a
            className="navbar-brand"
            href="https://github.com/X-XSilver?tab=repositories"
          >
            <img src="src\assets\github-mark.svg" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
