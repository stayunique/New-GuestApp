import { Outlet } from 'react-router-dom';

// ** Custom components
import Header from './Header';

export default function CompactLayout() {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>
    </>
  );
}
