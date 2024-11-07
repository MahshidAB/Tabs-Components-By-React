import styles from "./ShowList.module.css";

function ShowList({ title, des }) {
    return (
        <div className={styles.showContext}>
            <h2>content {title}</h2>
            <p>{des}</p>
        </div>
    )
}

export default ShowList