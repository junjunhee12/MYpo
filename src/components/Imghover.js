import buddiz1 from "../assets/로그인1 (1).jpg"
import buddiz2 from "../assets/로그인2.jpg"
import buddiz3 from "../assets/로그인3.jpg"
import FTT1 from "../assets/FTT1.jpg"
import FTT2 from "../assets/FTT2.jpg"
import FTT3 from "../assets/FTT3.jpg"
import FTT4 from "../assets/FTT4.jpg"
import Port1 from "../assets/Port1.jpg"
import Port2 from "../assets/Port2.jpg"
import Port3 from "../assets/Port3.jpg"
import Port4 from "../assets/Port4.jpg"

import styles from "./Imghover.module.css"

export function Img1({del1}){
    return(
        <>
            <div className={styles.click_container}>
                <div className={styles.container_wrap}>
                    <div>
                        <img src={buddiz1}/>
                    </div>
                    <div>
                        <img src={buddiz2}/>
                    </div>
                    <div>
                        <img src={buddiz3}/>
                    </div>
                </div>
                            
                <div className={styles.button}>
                    <button className={styles.click_button} onClick={del1}>나가기</button>
                </div>
            </div>
        </>
    )
}
export function Img2({del1}){
    return(
        <>
            <div className={styles.click_container}>
                <div className={styles.container_wrap}>
                    <div>
                        <img src={FTT1}/>
                    </div>
                    <div>
                        <img src={FTT2}/>
                    </div>
                    <div>
                        <img src={FTT3}/>
                    </div>
                    <div>
                        <img src={FTT4}/>
                    </div>
                </div>
                            
                <div className={styles.button}>
                    <button className={styles.click_button} onClick={del1}>나가기</button>
                </div>
            </div>
        </>
    )
}
export function Img3({del1}){
    return(
        <>
            <div className={styles.click_container}>
                <div className={styles.container_wrap}>
                    <div>
                        <img src={Port1}/>
                    </div>
                    <div>
                        <img src={Port2}/>
                    </div>
                    <div>
                        <img src={Port3}/>
                    </div>
                    <div>
                        <img src={Port4}/>
                    </div>
                </div>
                            
                <div className={styles.button}>
                    <button className={styles.click_button} onClick={del1}>나가기</button>
                </div>
            </div>
        </>
    )
}