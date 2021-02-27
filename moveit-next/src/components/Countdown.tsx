import { useContext, useEffect, useState } from 'react';
import styles from '../styles/components/CountDown.module.css'
import { CountdownContext } from '../contexts/CountdownContext'



export function Countdown() {
    const { minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRIght] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRIght] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRIght}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRIght}</span>
                </div>
            </div>

            {hasFinished ? (
                <button type="button" className={styles.countdownButton} disabled>
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                                Abandonar Ciclo
                            </button>
                        ) : (
                                <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    );
}