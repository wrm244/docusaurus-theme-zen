import React, {ReactNode} from 'react';
import styles from "./styles.module.css"

interface Props{
    children: ReactNode;
}


function HighLight({children}:Props): JSX.Element{
    return(
        <span className={styles.highlight}>
             {children}
        </span>
    );
}

export default HighLight;