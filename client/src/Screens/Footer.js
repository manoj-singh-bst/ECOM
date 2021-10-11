import React from "react";
import form from "react-bootstrap";
import "./Footer.css";
import Share from "./Share";
const Footer = () => {
  return (
    <div style={{ marginTop: "3rem", textDecorationColor: "white" }}>
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="/">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>SUPER MART</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div>
                <Share />
              </div>
            </div>
            <p stclass="copyright">Company Name © SUPER MART 🛍️</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
