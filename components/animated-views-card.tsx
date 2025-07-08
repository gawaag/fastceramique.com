import Link from "next/link"
import styles from "./animated-views-card.module.css"

export default function AnimatedViewsCard() {
  return (
    <Link href="/avis" className="block">
      <div className={styles.outer}>
        <div className={styles.dot}></div>
        <div className={styles.card}>
          <div className={styles.ray}></div>
          <div className={styles.text}>{"Avis"}</div>
          <div className="text-lg">{"Google"}</div>
          <div className={`${styles.line} ${styles.topl}`}></div>
          <div className={`${styles.line} ${styles.leftl}`}></div>
          <div className={`${styles.line} ${styles.bottoml}`}></div>
          <div className={`${styles.line} ${styles.rightl}`}></div>
        </div>
      </div>
    </Link>
  )
}
