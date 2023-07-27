import React from "react";
import "./FooterDesign.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              <p>95 Laxmi Nagar</p>
              <p>, Delhi</p>
            </div>

            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{
                    color: "#fff",
                    marginRight: "2rem",
                  }}
                />
                9871211828
              </h4>
            </div>

            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{
                    color: "#fff",
                    marginRight: "2rem",
                  }}
                />
                siddharth.rawat0305@gmail.com
              </h4>
            </div>
          </div>

          <div className="right">
            <h4>About Me</h4>
            <p>
              This is me Siddharth Rawat. 3rd year B-Tech student. I love
              solving DSA problems and making web development projects.
            </p>
            <div className="social">
              <FaFacebook
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
              />
              <FaTwitter
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
              />
              <FaLinkedin
                size={30}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
