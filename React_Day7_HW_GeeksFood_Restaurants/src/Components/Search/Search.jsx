import styles from "./Search.module.css"

const Search = (props) =>{
   return (
    <>
      <div className={styles.search_con}>
        <div >
            <input onChange={(e) =>props.setInputVal(e.target.value.toLowerCase())} className={styles.search_input} type="text" placeholder={"Search restaurants"}/>
        </div>

        <div>
            <label htmlFor="search">Minimum Rating : </label>
            <input  onChange={(e) => props.setRate(e.target.value)} className={styles.rating}  id="search" type="number"/>
        </div>
      </div>
    </>
   )
}

export default Search;