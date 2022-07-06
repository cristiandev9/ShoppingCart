import style from "./Product.module.css"
export function Product ({description, price, priceSelling, imgProduct}) {
    return(
        <div className={`${style.boxProduct}`}>
            <div className={`${style.divImgProduct}`}>
                <img src={imgProduct} className={style.imgProduct} />
            </div>
            <div className={`${style.infoProducts}`}>
                <h1>{description}</h1>
                <span className={style.price}>R$ {price}</span>
                <span className={style.priceSelling}>R$ {priceSelling}</span>
            </div>
        </div>
    )
}