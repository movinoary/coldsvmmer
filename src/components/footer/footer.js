import React from "react";

const FooterComponent = () => {
  return (
    <div>
      <footer className="pv4 ph3 ph5-m ph6-l mid-gray white mt5 bt">
        <small className="f6 db tc">
          © 2023 <b className="ttu">TRIO TAMPAN</b>., All Rights Reserved
        </small>
        <div className="tc mt3">
          <a
            href="/language/"
            title="Language"
            className="f6 dib white ph2 link mid-gray dim"
          >
            Language
          </a>
          <a
            href="/terms/"
            title="Terms"
            className="f6 white dib ph2 link mid-gray dim"
          >
            Terms of Use
          </a>
          <a
            href="/privacy/"
            title="Privacy"
            className="f6 dib ph2 link mid-gray white dim"
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
};

export { FooterComponent };
