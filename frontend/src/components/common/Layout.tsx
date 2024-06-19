import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div className='bg-transparent text-white p-2'>
        <Outlet />
      </div>
    </>
  );
};
