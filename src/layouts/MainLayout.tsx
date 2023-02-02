import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
