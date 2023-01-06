import style from "./style.module.css";
import { useState, useRef, useEffect } from "react";
import useUser from "hooks/useUser";
import LoginWithGoogle from "components/global/LoginWithGoogle";

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
    handleOnChange,
    showNoCompleteMessage,
    handleSubmitOrder,
    typeDocument,
    documentValue
}) {
    const [needFactura, setNeedFactura] = useState(false);
    const [, setAcceptTerms] = useState(false);
    const [wrongFormat, setWrongFormat] = useState(false);

    const { isLogged, isNotLogged } = useUser();

    const handleDepartmentChange = (e) => {
        setDeparmentSelected(e.target.value);
        setProvinceSelected("");

        handleOnChange(
            {
                target: {
                    name: "department",
                    value: e.target.value
                }
            }
        )
    }

    const handleProvinceChange = (e) => {
        setProvinceSelected(e.target.value);
        setDistritoSelected("");

        handleOnChange(
            {
                target: {
                    name: "province",
                    value: e.target.value
                }
            }
        )
    }

    const handleDistritoChange = (e) => {
        setDistritoSelected(e.target.value);

        handleOnChange(
            {
                target: {
                    name: "district",
                    value: e.target.value
                }
            }
        )
    }

    const handleFacturaChange = (e) => {
        setNeedFactura(e.target.checked);

        handleOnChange(
            {
                target: {
                    name: "bill",
                    value: e.target.checked
                }
            }
        )
    }

    const refRadio = useRef();
    
    useEffect(() => {
        if (isLogged) {
            refRadio.current.checked = false;
        }
    }, [despachoDelibery, isLogged])
   
    useEffect(() => {
        if (documentValue === null || documentValue === undefined || documentValue === "") {
            setWrongFormat(false)
        } else {
            if (typeDocument === "dni") {
                documentValue?.match(/^[0-9]+$/) &&
                documentValue.length === 8 ? setWrongFormat(false) : setWrongFormat(true);
            }
            if (typeDocument === "ce") {
                documentValue?.match(/^[0-9]+$/) &&
                documentValue.length === 12 ? setWrongFormat(false) : setWrongFormat(true);
            }
        }
    }, [typeDocument, documentValue])

    const handleDespachoChange = (e) => {
        setDespachoDelibery(!despachoDelibery);
        handleOnChange(
            {
                target: {
                    name: "delivery",
                    value: !despachoDelibery
                }
            }
        )
        
        handleOnChange(
            {
                target: {
                    name: "wayToPay",
                    value: ""
                }
            }
        )
        
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
                !isNotLogged ? (
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
                                    <input className={wrongFormat ? style.wrongFormat : ""} onChange={handleOnChange} type="text" name="document" id="document" />
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
                                                <label htmlFor="department">Departamento *</label>
                                                <select onChange={handleDepartmentChange} name="department" id="department">
                                                    <option value=""></option>
                                                    {places.map((department, index) => (
                                                        <option key={index} value={department.department}>{department.department}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className={style.formElement}>
                                                <label htmlFor="province">Provincia *</label>
                                                <select onChange={handleProvinceChange} name="province" id="province">
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
                                                <label htmlFor="district">Distrito *</label>
                                                <select onChange={handleDistritoChange} name="district" id="district">
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
                                                <label htmlFor="address">Dirección *</label>
                                                <input onChange={handleOnChange} type="text" name="address" id="address" />
                                            </div>
                                        </div>

                                        <div className={style.form__group}>
                                            <div className={style.formElement}>
                                                <div  className={style.interContainerInput}>
                                                    <input onClick={handleFacturaChange} type="checkbox" name="bill" id="bill" />
                                                    <label htmlFor="direccion">¿Necesitas factura?</label>
                                                </div>
                                            </div>
                                        </div>

                                        {needFactura && (
                                            <>
                                                <div className={style.form__group}>
                                                    <div className={style.formElement}>
                                                        <label htmlFor="businessName">Razón Social *</label>
                                                        <input onChange={handleOnChange} type="text" name="businessName" id="businessName" />
                                                    </div>
                                                </div>

                                                <div className={style.form__group}>
                                                    <div className={style.formElement}>
                                                        <label htmlFor="ruc">N° de RUC *</label>
                                                        <input onChange={handleOnChange} type="text" name="ruc" id="ruc" />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        <div className={style.form__group}>
                                            <div className={style.formElement}>
                                                <label htmlFor="moreInfo">¿Alguna indicación sobre su pedido?</label>
                                                <textarea onChange={handleOnChange} name="moreInfo" id="moreInfo" />
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
                        {
                            showNoCompleteMessage && (
                                <p className={style.noCompleteMessage}>
                                    Por favor, completa todos los campos necesarios
                                </p>
                            )
                        }
                        <div  className={style.submit_button__container}>
                            <button onClick={handleSubmitOrder} className={style.submit_button}>
                                Realizar el pedido
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={style.login__container}>
                            <p>
                                Inicia sesión para poder realizar tu pedido.
                            </p>
                            <LoginWithGoogle />
                        </div>
                    </>
                )) : (
                <p>
                    No hay productos en el carrito
                </p>
            )}
        </div>
    )
}
