import style from "./FreeShipping.module.css";
export function FreeShipping({message}){
    return(
        <div className={style.success}>
            {message}
        </div>
    )
}