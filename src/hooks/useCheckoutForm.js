import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { useCartProductsContext } from "context/CartProductsContext";
import useUser from "./useUser";

export default function useCheckoutForm () {

    const { products } = useCartProductsContext();
    const { user, isLogged } = useUser();

    const FORM_STATE = {
        user: null,
        name: null,
        lastName: null,
        typeDocument: "dni",
        document: null,
        email: null,
        phone: null,
        delivery: null,
        department: null,
        province: null,
        district: null,
        address: null,
        bill: false,
        businessName: null,
        ruc: null,
        moreInfo: null,
        wayToPay: null,
        terms: null,
        products: products,
        subtotal: null,
        deliveryPrice: null,
        total: null,
        // date : new Date().toLocaleString()
        createdAt : firebase.firestore.Timestamp.fromDate(new Date())
    }

    const [formData, setFormData] = useState(FORM_STATE)
    const [disabledButton, setDisabledButton] = useState(true)

    useEffect(() => {
        if (isLogged) {
            setFormData({
                ...formData,
                user: user?.uid,
            })
        }
    }, [isLogged])

    const handleOnChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    useEffect(() => {
        if (formData.user && 
            formData.name && 
            formData.lastName && 
            formData.document && 
            formData.email && 
            formData.phone &&
            formData.terms &&
            formData.products &&
            formData.subtotal &&
            formData.deliveryPrice >= 0 &&
            formData.wayToPay &&
            formData.phone.match(/^[0-9]+$/) &&
            formData.email.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i) &&
            formData.total >= 0
            ) {
            if (formData.delivery) {
                if (formData.department && formData.province && formData.district && formData.address) {
                    if (formData.bill) {
                        if (formData.businessName && formData.ruc) {
                            setDisabledButton(false)
                        } else {
                            setDisabledButton(true)
                        }
                    } else {
                        setDisabledButton(false)
                    }
                } else {
                    setDisabledButton(true)
                }
            } else {
                setDisabledButton(false)
            }
        } else {
            setDisabledButton(true)
        }

        if (formData.typeDocument === "dni") {
            if (!(formData.document?.length === 8 && formData.document?.match(/^[0-9]+$/))) {
                setDisabledButton(true)
                return
            }
        }
        if (formData.typeDocument === "ce") {
            if (!(formData.document?.length === 12 && formData.document?.match(/^[0-9]+$/))) {
                setDisabledButton(true)
                return
            }
        }
    }, [formData, disabledButton, formData.delivery])
    
    return {
        formData,
        handleOnChange,
        disabledButton
    }
}
