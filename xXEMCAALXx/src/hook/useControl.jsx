import { useContext } from "react";
import { ContextControl  } from "../context/CotizadorProvider";

const useControl = () => {
    return useContext(ContextControl)
}

export default useControl