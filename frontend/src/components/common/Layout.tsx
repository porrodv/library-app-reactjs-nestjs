import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <>
      <div className='w-full h-20 bg-green-500'>ACÁ VA IR EL HEADER</div>
      <div className='bg-transparent text-white p-2'>
        <Outlet />
      </div>
    </>
  );
};
