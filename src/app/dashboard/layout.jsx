import SideBar from "@/components/SideBar";
import "../../styles/dashboard.css";

// app/auth/layout.jsx
export default function DasahboardLayout({ children }) {
    return (
      <div className="dashboard-layout">
        <SideBar/>
        {children}
      </div>
    );
  }
  