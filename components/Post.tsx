import Link from "next/link";
import styles from "./post.module.css";

export const Post: React.FC<{title: string, date: string, slug: string}> = ({title, date, slug}) => {
    return (
        <Link href={`/writing/${slug}`}>
            <div className={styles.post}>
                <h4>{title}</h4>
                <label>{`${date.toString()}`}</label>
            </div>
        </Link>
    )
}; 