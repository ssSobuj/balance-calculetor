import "./footer.css";

export default function Footer() {
  return (
    <>
      {" "}
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Your Company Description goes here.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="#" target="_blank">
                Facebook
              </a>
              <a href="#" target="_blank">
                Twitter
              </a>
              <a href="#" target="_blank">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
