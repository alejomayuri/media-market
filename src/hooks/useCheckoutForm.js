import { useEffect, useState } from "react";
import { useCartProductsContext } from "context/CartProductsContext";

export default function useCheckoutForm ({
    name,
    lastName,
    typeDocument,
    document,
    email,
    phone,
    delivery,
    department,
    province,
    district,
    address,
    bill,
    businessName,
    ruc,
    moreInfo,
    wayToPay,
    terms,
    subtotal,
    deliveryPrice,
    total
}={}) {

    const { products } = useCartProductsContext();

    const FORM_STATE = {
        name: name,
        lastName: lastName,
        typeDocument: "dni",
        document: document,
        email: email,
        phone: phone,
        delivery: delivery,
        department: department,
        province: province,
        district: district,
        address: address,
        bill: bill,
        businessName: businessName,
        ruc: ruc,
        moreInfo: moreInfo,
        wayToPay: wayToPay,
        terms: terms,
        products: products,
        subtotal: subtotal,
        deliveryPrice: deliveryPrice,
        total: total
    }

    const [formData, setFormData] = useState(FORM_STATE)
    const [disabledButton, setDisabledButton] = useState(false)

    const handleOnChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    useEffect(() => {
        if (formData.name && 
            formData.lastName && 
            formData.document && 
            formData.email && 
            formData.phone &&
            formData.terms &&
            formData.products &&
            formData.subtotal &&
            formData.deliveryPrice >= 0 &&
            formData.total
            ) {
                
                if (formData.delivery) {

                } else {
                    if (formData.wayToPay) {
                        setDisabledButton(true)
                        
                    } else {
                        setDisabledButton(false)
                    }
                }
        } else {
            setDisabledButton(false)
        }
    }, [formData])
    
    return {
        formData,
        handleOnChange,
        disabledButton,
        setDisabledButton
    }
}
