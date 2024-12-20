// Footer.js

import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.row}></div>
        <br />
      </div>
      <div className={styles.container}>
        <div className="">
          <h3>Contact Us & Follow</h3>
          <ul className={styles.socialicons}>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/kota-venkatesh-/"
                target="_blank"
                className="newicon linkedin"
                style={{ color: "#007bb6" }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </ul>
        </div>
        <p className={styles.copyrighttext}>
          Copyright &copy; 2024 All Rights Reserved by Kota Venkatesh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
