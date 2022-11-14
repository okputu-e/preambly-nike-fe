import React from "react";
import { Link } from "react-router-dom";

export default function BtnLink({ target, btnname, btntitle }) {
  return (
    <Link to={target} className={btnname}>
      {btntitle}
    </Link>
  );
}
