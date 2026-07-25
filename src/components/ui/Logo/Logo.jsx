import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="flex flex-col leading-none"
    >
      <span className="text-2xl font-extrabold text-slate-900">
        Liliana Arias
      </span>

      <span className="text-sm font-medium tracking-wide text-slate-500 uppercase">
        Insurance
      </span>
    </Link>
  );
}

export default Logo;