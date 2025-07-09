import { Outlet } from 'react-router-dom';
import Header from "@/layout/Header/Header.tsx";

function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;