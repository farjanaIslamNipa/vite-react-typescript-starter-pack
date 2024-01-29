import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-500 sticky top-0 left-0 overflow-y-auto">
      <nav className="flex flex-col pt-10 pl-4 gap-y-4 text-gray-100 truncate">
        <NavLink to="/admin">Dashboard</NavLink>
        <NavLink to="/admin/services">Services</NavLink>
        <NavLink to="/admin/add-services">Add Service</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;