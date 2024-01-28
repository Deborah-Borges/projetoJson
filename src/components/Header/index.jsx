import styles from './Header.module.css'

export default function Header () {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>SkateFlow <span>Deslize na Sua Jornada com Estilo</span> </h2>

            <nav className={styles.nav}>
                <a href="#">Home</a>
                <a href="#">Itens</a>
            </nav>
        </header>
    )
}