import style from "./style.module.css";
import { loginWithGoogle } from "firebase.js"
import { useEffect } from "react";
import useUser from "hooks/useUser";
import GoogleIcon from "components/global/Icons/Google";

export default function LoginWithGoogle ({relocUrl = "/", reloc = false}) {
    const { user, isLogged } = useUser();

    const handleLoginWithGoogle = () => {
        loginWithGoogle().catch((err) => console.log(err));
    };

    useEffect(() => {
        if (isLogged && reloc) {
          window.location.href = `${relocUrl}`;
        }
      }, [isLogged, user]);

    return (
        <button className={style.button} onClick={handleLoginWithGoogle}>
            Iniciar sesión con Google
            <GoogleIcon width={25} />
        </button>
    ) 
}