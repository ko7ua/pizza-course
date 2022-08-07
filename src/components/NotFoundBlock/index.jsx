import React from 'react';
import styles from './NotFoundBlock.module.scss'


export default function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <h1>
                404 Страница не найдена!
            </h1>
        </div>
    )
}