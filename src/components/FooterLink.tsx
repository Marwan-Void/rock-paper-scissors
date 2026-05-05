import { MotionA } from "@/app/variants";
import { JSX } from "react";
import styles from "@/app/page.module.css";

export function FooterLink({dest, icon, title = ""}: {dest: string, icon: (string | JSX.Element), title?: string}): JSX.Element {
    return (
        <MotionA className={`${styles.pointer} ${styles.link}`} href={dest} target="_blank" title={title}>{icon}</MotionA>
    );
}