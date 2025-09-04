import "./Footer.scss";
import logo from "../../assets/logo-footer.png";
export default function Footer() {
  return (
    <footer>
      <div className="container section">
        <img src={logo} alt="Kasa Logo" className="footer_logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
