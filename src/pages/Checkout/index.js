import style from "./style.module.css";
import { useEffect, useState } from "react";
import { useCartProductsContext } from "context/CartProductsContext";
import { useCartProducts } from "hooks/useCartProducts";

const LUGARES_DE_ENVIO = [
    {
        department: "Lima",
        provinces: [
            {
                name: "Lima",
                districts: [
                    "Lima",
                    "San Isidro",
                ]
            },
            {
                name: "Oyon",
                districts: [
                    "Oyon",
                ]
            }
        ]
    },
    {
        department: "Cusco",
        provinces: [
            {
                name: "Cusco",
                districts: [
                    "Cusco",
                    "San Jeronimo",
                ]
            },
            {
                name: "Acomayo",
                districts: [
                    "Acomayo",
                    "Chincheros",
                ]
            }
        ]
    }
];

export default function Checkout () {
    const { products } = useCartProductsContext();
    const { myCart, totalPrice } = useCartProducts({ productsInTheCart: products });

    const [departmentSelected, setDeparmentSelected] = useState("");
    const [provinceSelected, setProvinceSelected] = useState("");

    const handleDepartmentChange = (e) => {
        setDeparmentSelected(e.target.value);
    }

    const handleProvinceChange = (e) => {
        setProvinceSelected(e.target.value);
    }

    return (
        <main>
            <div className={style.checkout}>
                <h1 className={style.h1}>
                    Finaliza tu compra
                </h1>

                {myCart.length > 0 ? (
                    <div className={style.container}>
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
                                            <option value="ruc">RUC</option>
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
                                    <div className={style.formElement}>
                                        <label htmlFor="departamento">Documento de identidad *</label>
                                        <select onChange={handleDepartmentChange} name="departamento" id="departamento">
                                            <option value=""></option>
                                            {LUGARES_DE_ENVIO.map((department) => (
                                                <option value={department.department}>{department.department}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={style.formElement}>
                                        <label htmlFor="document">Documento de identidad *</label>
                                        <select onChange={handleProvinceChange} name="document" id="document">
                                            <option value=""></option>
                                            {
                                                LUGARES_DE_ENVIO
                                                    .filter((department) => department.department === departmentSelected)[0]?.provinces
                                                    .map((province) => (
                                                        <option value={province.name}>{province.name}</option>
                                                    ))
                                            }
                                        </select>
                                    </div>

                                    <div className={style.formElement}>
                                        <label htmlFor="document">Documento de identidad *</label>
                                        <select name="document" id="document">
                                            <option value=""></option>
                                            {
                                                LUGARES_DE_ENVIO
                                                    .filter((department) => department.department === departmentSelected)[0]?.provinces
                                                    .filter((province) => province.name === provinceSelected)[0]?.districts
                                                    .map((district) => (
                                                        <option value={district}>{district}</option>
                                                    ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    ) : (
                    <p>
                        No hay productos en el carrito
                    </p>
                )}
            </div>
        </main>
    )
}