import { Search } from "./Search";
import { Account } from "./Account";
import styles from "./Head.css";

const Head = () => {
    return (
        <>
        { <section className="head">
            <div className="head">
                <h1>Mercado Free</h1>
                <Search></Search>
                <Account></Account> 
            </div>
        </section> }
        </>
    );
}

export default Head;