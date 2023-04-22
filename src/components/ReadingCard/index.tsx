import React, {ReactNode} from 'react';
import styles from "./styles.module.css"

interface Props{
    children: ReactNode;
    book: string;
    date: string;
}


function ReadingCard({children, book, date}:Props): JSX.Element{
    return(
        <div className={styles.card}>
            <p className={styles.card__content}>{children} </p>
                <h3 className={styles.card__title}>{`摘自 —— `}{book}</h3>
                    <div className={styles.card__date}>{date}</div>
        </div>
    );
}

export default ReadingCard;
