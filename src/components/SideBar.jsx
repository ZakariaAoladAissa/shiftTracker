
'use client'
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function SideBar() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <div className="sidebar-container">
      <h2>Shift Tracker</h2>
      <div className="sidebar-btns">
        <div className="sidebar-btn">
            <i className="fa-solid fa-house"></i>
            My shifts
        </div>
        <div className="sidebar-btn">
        <i className="fa-regular fa-calendar"></i>
            View in Calendar
        </div>
      </div>
      
    </div>
  );
}

export default SideBar;
