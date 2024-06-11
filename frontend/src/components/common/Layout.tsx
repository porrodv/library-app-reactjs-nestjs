import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <>
      <div>header</div>
      <div className='bg-red-700 text-white'>
        <Outlet />
      </div>
    </>
  );
};
