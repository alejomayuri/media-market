import style from './style.module.css'

export default function GreenMessage () {
    return (
        <section className={style.greenContainer}>
            <h2>Hemos recibido tu pedido :D</h2>
            <p>
                No olvides mandar una captura de la confirmación de tu pago a nuestro whatsapp <b>999 999 999</b> para poder continuar con la entrega.
            </p>
            
            <div>
                <h2>Medios de pago</h2>
                <p>
                    <b>YAPE:</b> 999 999 999
                </p>
                <p>
                    <b>PLIN:</b> 999 999 999
                </p>
                <p>
                    <b>BCP:</b> 999 999 999
                </p>
                <p>
                    <b>BBVA:</b> 999 999 999
                </p>
                <p>
                    <b>INTERBANK:</b> 999 999 999
                </p>
            </div>
        </section>
    )
}