import styles from "./Header.module.css";
import List from "./List.jsx";


const Header = () => {
    return (
        <div id={styles.header}>
            <h1>Tabs Component with React</h1>
            <List />
        </div>
    )
}
export default Header;