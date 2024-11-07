import { useState } from "react";
import styles from "./List.module.css";
import "./List.module.css";
import ShowList from "./ShowList.jsx";

function List() {

    const data = [
        { id: 1, description: "1:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat dolore quae ullam fugit eum fuga deserunt molestiae ipsam perspiciatis adipisci recusandae" },
        { id: 2, description: "2:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat dolore quae ullam fugit eum fuga deserunt molestiae ipsam perspiciatis adipisci recusandae" },
        { id: 3, description: "3:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat dolore quae ullam fugit eum fuga deserunt molestiae ipsam perspiciatis adipisci recusandae" },
        { id: 4, description: "4:Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellat dolore quae ullam fugit eum fuga deserunt molestiae ipsam perspiciatis adipisci recusandae" }]

    const style = {
        textDecoration: "underline",
        textDecorationColor: "yellow",
        textDecorationThickness: "2px"
    }

    let text = JSON.parse(localStorage.getItem("data")) || []

    if (text == "") {
        text = data[0]
    }
    const [content, setcontent] = useState(text)
    const [selected, setSelected] = useState(false)

    const savePage = (item) => {
        localStorage.setItem("data", JSON.stringify(item))
    }

    return (
        <>
            <ul className={styles.list}>
                {
                    data.map(item =>
                        <li className={styles.listItem}
                            style={selected ? style : []}
                            key={item.id}
                            onClick={() => {
                                setSelected(!selected)
                                setcontent(item)
                                savePage(item)
                            }}>
                            Tab {item.id}
                        </li>)
                }
            </ul>
            <ShowList title={content.id} des={content.description} />
        </>
    )
}

export default List;