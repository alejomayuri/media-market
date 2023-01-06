import LoginWithGoogle from "components/global/LoginWithGoogle"

export default function Login () {

    return (
        <main>
            <h1 className="main-title">
                Iniciar sesión
            </h1>
            <div className="soft-padding">
                <p>
                    Inicia sesión para poder hacer compras, guardar tus productos favoritos y ver tus pedidos.
                </p>
                <LoginWithGoogle reloc={true} />
            </div>
        </main>
    ) 
}