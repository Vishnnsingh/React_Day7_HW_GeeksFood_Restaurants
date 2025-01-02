import styles from "./Card.module.css"

const Card = (props) =>{
//   console.log(props);

 let ratings = Math.floor(props.rating) || 0;
  let arr = new Array(ratings).fill(0);
  
    return (
        <>
        <div className={styles.card_con}>
           <div className={styles.top}>
           <div className={styles.name}>
                <h2>{props.name}</h2>
                <div className={styles.stars}>
                    {
                        arr.map((val, index) =>{
                            return <span key={index }>
                            <svg fill="gold"  width={"25px"}
                             height={"25px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333z"/></svg>
                            </span>
                        })
                    }
                </div>
            </div>
            <div className={styles.address}>
                <span className={styles.loc}>
                <svg fill="black
                "  viewBox="0 0 384 512" className="inline mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                </span>
                <p className={styles.city}>{props.address}, {props["address line 2"]}</p>
            </div>
            <p className={styles.p}>{props.outcode} {props.postcode}</p>
           </div>
            <div className={styles.linkbox}>
                <div  className={styles.spoon}>
                <span className={styles.spoon_icon}>
                <svg fill="#22C55E"viewBox="0 0 416 512" className="inline mr-1" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path></svg>
                    </span> 
                    <p>{props.type_of_food}</p>
                </div>
                <a className={styles.visit} href={props.URL}>Visit Menu</a>
            </div>
        </div>
        </>
    )
}

export default Card;