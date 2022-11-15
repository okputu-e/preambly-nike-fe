import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <a href="/">Preambly Incident Reporter</a>
      </nav>
      <Outlet />
    </>
  );
}
