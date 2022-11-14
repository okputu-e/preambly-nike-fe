import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <h1>Logo</h1>
      </nav>
      <Outlet />
    </>
  );
}
