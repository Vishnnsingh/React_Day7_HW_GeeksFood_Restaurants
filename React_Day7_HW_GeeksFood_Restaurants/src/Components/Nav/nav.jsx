import styles from './nav.module.css'

function Nav(){

    const list = ["Home" , "Quote" , "Resturants" , "Foods" , "Contact"];
    return <>
       <header className={styles.header}>
        <a href={"www.google.com"} className={styles.head_left}>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
            <h1>GeekFoods</h1>
        </a>
       <ul className={styles.ul}>
        {list.map((val , index) =>{
            return <li key={index}>{val}</li>
        })}
       </ul>
       <button className={styles.btn}>Get Started</button>
       </header>
    
    </>
}

export default Nav;