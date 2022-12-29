import style from "./style.module.css";
import { useEffect, useState } from "react";


import { LUGARES_DE_ENVIO } from "assets/envios";

export default function CheckoutForm ({ iHaveProducts, despachoDelibery, setDespachoDelibery }) {
    const [departmentSelected, setDeparmentSelected] = useState("");
    const [provinceSelected, setProvinceSelected] = useState("");
    const [distritoSelected, setDistritoSelected] = useState("");
    const [needFactura, setNeedFactura] = useState(false);
    

    console.log(despachoDelibery)
    console.log(despachoDelibery)
    console.log(setDespachoDelibery)

    const handleDepartmentChange = (e) => {
        setDeparmentSelected(e.target.value);
        setProvinceSelected("");
    }

    const handleProvinceChange = (e) => {
        setProvinceSelected(e.target.value);
        setDistritoSelected("");
    }

    const handleDistritoChange = (e) => {
        setDistritoSelected(e.target.value);
    }

    const handleFacturaChange = (e) => {
        setNeedFactura(e.target.checked);
    }

    const handleDespachoChange = (e) => {
        setDespachoDelibery(!despachoDelibery);
    }

    return (
        <div className={style.checkout}>
            <h1 className={style.h1}>
                Finaliza tu compra
            </h1>

            {iHaveProducts ? (
                <div className={style.form}>
                    <h3>Datos Personales</h3>
                    <h2>¿Quién hace el pedido?</h2>
                    <form>
                        <div className={style.form__group}>
                            <div className={style.formElement}>
                                <label htmlFor="name">Nombre *</label>
                                <input type="text" name="name" id="name" placeholder="Nombre" />
                            </div>

                            <div className={style.formElement}>
                                <label htmlFor="lastname">Apellidos *</label>
                                <input type="text" name="lastname" id="lastname" placeholder="Apellido" />
                            </div>
                        </div>

                        <div className={style.form__group}>
                            <div className={style.formElement}>
                                <label htmlFor="document">Documento de identidad *</label>
                                <select name="document" id="document">
                                    <option value="dni">DNI</option>
                                    <option value="ce">CE</option>
                                </select>
                            </div>

                            <div className={style.formElement}>
                                <label htmlFor="documentNumber">Nº de documento *</label>
                                <input type="text" name="documentNumber" id="documentNumber" />
                            </div>
                        </div>

                        <div className={style.form__group}>
                            <div className={style.formElement}>
                                <label htmlFor="email">Correo electrónico *</label>
                                <input type="email" name="email" id="email" />
                            </div>

                            <div className={style.formElement}>
                                <label htmlFor="phone">Teléfono *</label>
                                <input type="text" name="phone" id="phone" />
                            </div>
                        </div>
                    </form>

                    <h3>Despacho</h3>
                    <h2>¿Cómo despachamos sus productos?</h2>
                    <form>
                        <div className={style.form__group}>
                            <div className={`${style.formElement} noMarginTop`}>
                                <div className={style.interContainerInput}>
                                    <input checked={!despachoDelibery} onChange={handleDespachoChange} type="radio" name="despacho" id="despacho"/>
                                    <label type="radio" htmlFor="despacho">Recojo en tienda</label>
                                </div>
                            
                                <div className={style.interContainerInput}>
                                    <input onChange={handleDespachoChange} type="radio" name="despacho" id="despacho"/>
                                    <label type="radio" htmlFor="despacho">Delivery</label>
                                </div>
                            </div>
                        </div>
                        {
                            !despachoDelibery && (
                                <div className={style.form__group}>
                                    <p className={style.infoText}>
                                        Los recojos en tienda deben hacerse a partir de dos dias hábiles después de confirmado el pago.
                                    </p>
                                </div>
                            )
                        }
                        {
                            despachoDelibery && (
                                <>
                                    {
                                        departmentSelected === "Lima" && (
                                            <div className={style.form__group}>
                                                <p className={style.infoText}>
                                                    La fecha de entrega se coordinará por whatsapp con el cliente y no será mayor a 3 días a partir de la verificación del pago.
                                                </p>
                                            </div>
                                        )
                                    }
                                    <div className={style.form__group}>
                                        <div className={style.formElement}>
                                            <label htmlFor="departamento">Departamento *</label>
                                            <select onChange={handleDepartmentChange} name="departamento" id="departamento">
                                                <option value=""></option>
                                                {LUGARES_DE_ENVIO.map((department, index) => (
                                                    <option key={index} value={department.department}>{department.department}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className={style.formElement}>
                                            <label htmlFor="document">Provincia *</label>
                                            <select onChange={handleProvinceChange} name="document" id="document">
                                                <option selected={provinceSelected === ""} value=""></option>
                                                {
                                                    LUGARES_DE_ENVIO
                                                        .filter((department) => department.department === departmentSelected)[0]?.provinces
                                                        .map((province, index) => (
                                                            <option key={index} value={province.name}>{province.name}</option>
                                                        ))
                                                }
                                            </select>
                                        </div>

                                        <div className={style.formElement}>
                                            <label htmlFor="document">Distrito *</label>
                                            <select onChange={handleDistritoChange} name="document" id="document">
                                                <option selected={distritoSelected === ""} value=""></option>
                                                {
                                                    LUGARES_DE_ENVIO
                                                        .filter((department) => department.department === departmentSelected)[0]?.provinces
                                                        .filter((province) => province.name === provinceSelected)[0]?.districts
                                                        .map((district, index) => (
                                                            <option key={index} value={district}>{district}</option>
                                                        ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className={style.form__group}>
                                        <div className={style.formElement}>
                                            <label htmlFor="direccion">Dirección *</label>
                                            <input type="text" name="direccion" id="direccion" />
                                        </div>
                                    </div>

                                    <div className={style.form__group}>
                                        <div className={style.formElement}>
                                            <div  className={style.interContainerInput}>
                                                <input onClick={handleFacturaChange} type="checkbox" name="factura" id="factura" />
                                                <label htmlFor="direccion">¿Necesitas factura?</label>
                                            </div>
                                        </div>
                                    </div>

                                    {needFactura && (
                                        <>
                                            <div className={style.form__group}>
                                                <div className={style.formElement}>
                                                    <label htmlFor="direccion">Razón Social *</label>
                                                    <input type="text" name="direccion" id="direccion" />
                                                </div>
                                            </div>

                                            <div className={style.form__group}>
                                                <div className={style.formElement}>
                                                    <label htmlFor="direccion">N° de RUC *</label>
                                                    <input type="text" name="direccion" id="direccion" />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className={style.form__group}>
                                        <div className={style.formElement}>
                                            <label htmlFor="direccion">¿Alguna indicación sobre su pedido?</label>
                                            <textarea name="indicacion" id="indicacion" />
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </form>

                    <h3>Pago</h3>
                    <h2>¿Cuál será su forma de pago?</h2>
                    <form>
                        {
                            departmentSelected !== "Lima" && despachoDelibery
                            ? (
                                <>
                                    <div className={style.form__group}>
                                        <div className={`${style.formElement} noMarginTop`}>
                                            <div  className={style.interContainerInput}>
                                                <input type="radio" name="pago" id="pago" value="coordinar" />
                                                <label type="radio" htmlFor="pago">Pago a coordinar </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.form__group}>
                                        <p className={style.infoText}>
                                            {"Atención al cliente se comunicará contigo para brindarte el valor total a pagar de tu pedido (productos + servicio de delivery)"}
                                        </p>
                                    </div>
                                </>
                            ) 
                            : (
                                <div className={style.form__group}>
                                    <div className={`${style.formElement} noMarginTop`}>
                                        <div  className={style.interContainerInput}>
                                            <input type="radio" name="pago" id="pago" value="yape" />
                                            <label type="radio" htmlFor="pago">Yape</label>
                                        </div>
                                    
                                        <div  className={style.interContainerInput}>
                                            <input type="radio" name="pago" id="pago" value="plin" />
                                            <label type="radio" htmlFor="pago">Plin</label>
                                        </div>
                                        
                                        <div  className={style.interContainerInput}>
                                            <input type="radio" name="pago" id="pago" value="transferencia" />
                                            <label type="radio" htmlFor="pago">Transferencia</label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </form>
                    <div  className={style.submit_button__container}>
                        <button className={style.submit_button}>
                            Realizar el pedido
                        </button>
                    </div>
                </div>
                ) : (
                <p>
                    No hay productos en el carrito
                </p>
            )}
        </div>
    )
}