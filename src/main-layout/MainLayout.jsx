import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>

          <h3 className="font-bold text-2xl">This is fixed</h3>
            <div className="flex gap-10">
                <a href="/home">Home</a>
                <a href="/contacts">Contact Us</a>
                <a href="/products">Our Products</a>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;