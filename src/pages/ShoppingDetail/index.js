import style from "./style.module.css"
import { useRoute } from "wouter"
import { useSingleOrder } from "hooks/useSingleOrder"
import ProductInOrder from "components/Page_MyShopping/ProductInOrder"
import { formatPrice } from "utils/formatPrice"
import { formatDate } from "utils/formatDate"
// import div from "components/Page_ShoppingDetail/div"

export default function ShoppingDetail () {
    const [ , params ] = useRoute("/mis-compras/:id")
    const { order, loading } = useSingleOrder({ id: params.id })

    let address = null
    let bill = null
    let businessName = null
    let createdAt = null
    let delivery
    let deliveryPrice = null
    let department = null
    let district = null
    let document = null
    let email = null
    let idOrder = null
    let lastName = null
    let moreInfo = null
    let name = null
    let phone = null
    let province = null
    let ruc = null
    let total = null
    let typeDocument = null
    let subtotal = null

    if (order) {
        address = order.address
        bill = order.bill
        businessName = order.businessName
        createdAt = formatDate(order?.createdAt?.seconds)
        delivery = order.delivery
        deliveryPrice = formatPrice(order.deliveryPrice)
        department = order.department
        district = order.district
        document = order.document
        email = order.email
        idOrder = order.id
        lastName = order.lastName
        moreInfo = order.moreInfo
        name = order.name
        phone = order.phone
        province = order.province
        ruc = order.ruc
        total = formatPrice(order.total)
        typeDocument = order.typeDocument
        subtotal = formatPrice(order.subtotal)
    }

    if (loading) {
        return (
            <main>
                <p>Cargando...</p>
            </main>
        )
    }

    return (
        <main>
            <div className={style.container}>
                <h2>Datos de compra</h2>
                <p>Id de la compra: {idOrder}</p>
                <p>Fecha de compra: {createdAt}</p>
            </div>
            <div className={style.container}>
                <h2>Productos</h2>
                {
                    order?.products?.map((item, i) => {
                        return <ProductInOrder key={i} item={item} />
                    })
                }
            </div>
            <div className={style.container}>
                <h2>Cliente</h2>
                <p>Nombre: {name}</p>
                <p>Apellido: {lastName}</p>
                <p>Tipo de documento: {typeDocument}</p>
                <p>Número de documento: {document}</p>
                <p>Email: {email}</p>
                <p>Teléfono: {phone}</p>
            </div>
            <div className={style.container}>
                <h2>Datos de envío</h2>
                <p>Despacho: {delivery ? "Delivery" : "Recojo en tienda"}</p>
                {
                    ( department && province) && (
                        <div>
                            <p>Departamento: {department}</p>
                            <p>Provincia: {province}</p>
                            <p>Distrito: {district}</p>
                        </div>
                    )
                }{
                    address && (
                        <div>
                            <p>Dirección: {address}</p>
                        </div>
                    )
                }{
                    moreInfo && (
                        <div>
                            <p>Indicación: {moreInfo}</p>
                        </div>
                    )
                }
            </div>
            <div className={style.container}>
                <h2>Información de pago</h2>
                <p>Comprobante de pago: {bill ? "Factura" : "Boleta"}</p>
                {
                    bill && (
                        <div>
                            <p>RUC: {ruc}</p>
                            <p>Razón social: {businessName}</p>
                        </div>
                    )
                }
                <p>Subtotal: {subtotal}</p>
                <p>Precio de envío: {deliveryPrice}</p>
                <p>Total: {total}</p>
            </div>
        </main>
    )
}