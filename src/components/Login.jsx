
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Login() {
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
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        
        <div className="social-container">
          <h1>Sign in</h1>
          {providers &&
          Object.values(providers).map((provider) => (
             <a 
                href="#"
                key={provider.name}
                onClick={() => {
                    signIn(provider.id);
                  }}
                  className="social">
            <i className="fab fa-google-plus-g" />
          </a>
         ))}
          
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
