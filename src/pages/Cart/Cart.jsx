import { useEffect, useState } from "react";
import api from "../../services/api";
import style from "./Cart.module.css";
import { Product } from "../../components/product/Product";
import { FreeShipping } from "../../components/freeShipping/FreeShipping";


export function Cart() {

    const [ products, setProducts ] = useState([]);
    const [ subtotal, setSubtotal ] = useState(0);

    useEffect(() => {
        api
          .get()
          .then((response) => setProducts(response.data.items))
          .catch((err) => {
            console.error("Ocorreu um erro ao realizar a requisição: " + err);
          });
          
      }, []);


    useEffect(() => {
        setSubtotal(products.reduce((accum,item) => accum + item.sellingPrice, 0));
          
      }, [products]);
    

    return (
        <div className={style.cart}>
            <h1 className={style.fontBold}>Meu carrinho</h1>
            <div className={style.line}></div>
            <div className={style.products}>
                {
                    products.map((item)=>
                        (
                            <Product key={item.id} description={item.name} price={item.price} priceSelling={item.sellingPrice} imgProduct={item.imageUrl} />
                        )
                    )
                }
                
            </div>
            <div className={style.line}></div>
            <div className={style.subtotal}>
                <div>Total</div>
                <div>R${subtotal}</div>
            </div>
            {subtotal>10 && (
                <div className={`${style.flexCenter} ${style.freeShipping}`}>
                    <FreeShipping message="Parabéns, sua compra tem frete grátis!"/>
                </div>
            )}
            <div className={style.line}></div>
            <div className={style.divButtonFinalize}>
                <button className={style.btnFinalize}>Finalizar compra</button>
            </div>
        </div>
    )
}