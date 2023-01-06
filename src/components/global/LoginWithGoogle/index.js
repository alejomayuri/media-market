import style from "./style.module.css";
import { loginWithGoogle } from "firebase.js"
import { useEffect } from "react";
import useUser from "hooks/useUser";
import GoogleIcon from "components/global/Icons/Google";

export default function LoginWithGoogle ({reloc = "/"}) {
    const { user, isLogged } = useUser();

    const handleLoginWithGoogle = () => {
        loginWithGoogle().catch((err) => console.log(err));
    };

    useEffect(() => {
        if (isLogged) {
          window.location.href = `${reloc}`;
        }
      }, [isLogged, user]);

    return (
        <button className={style.button} onClick={handleLoginWithGoogle}>
            Iniciar sesión con Google
            <GoogleIcon width={25} />
        </button>
    ) 
}