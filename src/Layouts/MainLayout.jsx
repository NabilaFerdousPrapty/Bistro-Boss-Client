
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
     const location=useLocation();
     const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                {
                    noHeaderFooter||<Navbar/>
                }
            
            <Outlet/>
            
            </div>
            
            {
                noHeaderFooter||<Footer/>
            }
        </div>
    );
};

export default MainLayout;