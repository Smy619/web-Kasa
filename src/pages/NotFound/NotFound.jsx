import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound_code">404</h1>
      <p className="notfound_code_text">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link className="notfound_code_link " to="/">
        Retourner sur la page d&apos;Accueil
      </Link>
    </div>
  );
}
