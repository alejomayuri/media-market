import style from "./style.module.css";
import { useState, useRef, useEffect } from "react";

export default function CheckoutForm ({ 
    iHaveProducts, 
    despachoDelibery, 
    setDespachoDelibery, 
    departmentSelected, 
    setDeparmentSelected,
    distritoSelected,
    setDistritoSelected,
    provinceSelected,
    setProvinceSelected,
    places,
    handleOnChange
}) {
    const [needFactura, setNeedFactura] = useState(false);
    const [, setAcceptTerms] = useState(false);

    

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

    const refRadio = useRef();
    
    useEffect(() => {
            refRadio.current.checked = false;
    }, [despachoDelibery])

    const handleDespachoChange = (e) => {
        setDespachoDelibery(!despachoDelibery);
        refRadio.current.checked = false;
        setDeparmentSelected("");
        setProvinceSelected("");
        setDistritoSelected("");
    }

    const handleWayToPayChange = (e) => {
        handleOnChange(
            {
                target: {
                    name: "wayToPay",
                    value: e.target.value
                }
            }
        )
    }

    const handleTermsChange = (e) => {
        setAcceptTerms(e.target.checked);
        handleOnChange(
            {
                target: {
                    name: "terms",
                    value: e.target.checked
                }
            }
        )
    }

    return (
        <div className={style.checkout}>
            {iHaveProducts ? (
                <div className={style.form}>
                    <h3>Datos Personales</h3>
                    <h2>¿Quién hace el pedido?</h2>
                    <form>
                        <div className={style.form__group}>
                            <div className={style.formElement}>
                                <label htmlFor="name">Nombre *</label>
                                <input onChange={handleOnChange} type="text" name="name" id="name" placeholder="Nombre" />
                            </div>

                            <div className={style.formElement}>
                                <label htmlFor="lastName">Apellidos *</label>
                                <input onChange={handleOnChange} type="text" name="lastName" id="lastName" placeholder="Apellido" />
                            </div>
                        </div>

                        <div className={style.form__group}>
                            <div className={style.formElement}>
                                <label htmlFor="typeDocument">Documento de identidad *</label>
                                <select onChange={handleOnChange} name="typeDocument" id="typeDocument">
                                    <option value="dni">DNI</option>
                                    <option value="ce">CE</option>
                                </select>
                            </div>

                            <div className={style.formElement}>
                                <label htmlFor="document">Nº de documento *</label>
                                <input onChange={handleOnChange} type="text" name="document" id="document" />
                            </div>
                        </div>

                        <div className={style.form__group}>
                            <div className={style.formElement}>
                                <label htmlFor="email">Correo electrónico *</label>
                                <input onChange={handleOnChange} type="email" name="email" id="email" />
                            </div>

                            <div className={style.formElement}>
                                <label htmlFor="phone">Teléfono *</label>
                                <input onChange={handleOnChange} type="text" name="phone" id="phone" />
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
                                        departmentSelected === "Lima" && provinceSelected === "Lima" && (
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
                                                {places.map((department, index) => (
                                                    <option key={index} value={department.department}>{department.department}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className={style.formElement}>
                                            <label htmlFor="document">Provincia *</label>
                                            <select onChange={handleProvinceChange} name="document" id="document">
                                                <option selected={provinceSelected === ""} value=""></option>
                                                {
                                                    places
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
                                                    places
                                                        .filter((department) => department.department === departmentSelected)[0]?.provinces
                                                        .filter((province) => province.name === provinceSelected)[0]?.districts
                                                        .map((district, index) => (
                                                            <option key={index} value={district.name}>{district.name}</option>
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
                            (departmentSelected !== "Lima" || provinceSelected !== "Lima") && despachoDelibery
                            ? (
                                <>
                                    <div className={style.form__group}>
                                        <div className={`${style.formElement} noMarginTop`}>
                                            <div  className={style.interContainerInput}>
                                                <input ref={refRadio} onChange={handleWayToPayChange} type="radio" name="wayToPay" id="wayToPay" value="coordinar" />
                                                <label type="radio" htmlFor="wayToPay">Pago a coordinar </label>
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
                                            <input ref={refRadio} onChange={handleWayToPayChange} type="radio" name="wayToPay" id="wayToPay" value="yape" />
                                            <label type="radio" htmlFor="wayToPay">Yape</label>
                                        </div>
                                    
                                        <div  className={style.interContainerInput}>
                                            <input onChange={handleWayToPayChange} type="radio" name="wayToPay" id="wayToPay" value="plin" />
                                            <label type="radio" htmlFor="wayToPay">Plin</label>
                                        </div>
                                        
                                        <div  className={style.interContainerInput}>
                                            <input onChange={handleWayToPayChange} type="radio" name="wayToPay" id="wayToPay" value="transferencia" />
                                            <label type="radio" htmlFor="wayToPay">Transferencia</label>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </form>

                    <form>
                    <div className={style.form__group}>
                            <div className={style.formElement}>
                                <div  className={style.interContainerInput}>
                                    <input onChange={handleTermsChange} type="checkbox" name="factura" id="factura" />
                                    <label htmlFor="direccion">Acepto los <b>terminos y condiciones</b></label>
                                </div>
                            </div>
                        </div>
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
