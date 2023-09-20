import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            
          <div className="flex justify-between mx-16  mt-10">
          <h3 className="font-bold text-3xl text-yellow-500">Darrazz</h3>
            <div className="flex gap-10">
                <Link to="/home">Home</Link>
                <Link to="/contacts">Contact Us</Link>
                <Link to="/products">Our Products</Link>
            </div>
          </div>

            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;