import { useState, createContext } from "react";
const ContextControl = createContext();

const CotizadorProvider = ({ children }) => {

    const [estado, seEstado] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [usuario, setUsuario] = useState("");
    
    

    const login = (user, password) => {
        console.log("en la funcion de context");
        setUsuario(user)
        if ([user,password].includes('')) {
            console.log("error ");            
            return false;
          }
          // Validar con fetch
        if(password != "fabian"){
            alert("el usuario y contraseña no estan registrados")            
            return false;
        }
        setLoggedIn(true)
        return true;
      }
      
      const logout = () => {
        setLoggedIn(false);
      };
    

    return (
        <ContextControl.Provider
            value={{
                estado,
                login,
                isLoggedIn,
                logout,
                usuario            
            }}
        >
            {children}
        </ContextControl.Provider>
    )
}
export { ContextControl, CotizadorProvider };





