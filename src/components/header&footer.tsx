import { itemVariants, MotionA, MotionDiv, MotionFooter, MotionH2, MotionHeader, MotionP, parentVariants } from "@/app/variants";
import { JSX } from "react";
import styles from "@/app/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
// import { EMailBtn } from "./EmailBtn";

export function PageHeader(): JSX.Element {
    return (
        <MotionHeader className={styles.page_header} variants={parentVariants} initial="hidden" whileInView="visible">
            <MotionP
                className={styles.page_header_name}
                variants={itemVariants}
            >RPS Void</MotionP>
        </MotionHeader>
    );
}

export function PageFooter(): JSX.Element {
    return (
        <MotionFooter
            className={styles.footer}
            variants={parentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <MotionDiv variants={itemVariants} className={styles.footer_info}>
            <MotionH2 className={styles.footer_name}>Marwan Void</MotionH2>
            <MotionP className={styles.footer_copyright}>
                &copy; 2026 - {new Date().getFullYear()} Marwan Void
            </MotionP>
            <MotionA href="https://github.com/Marwan-Void/rock-paper-scissors" target="_blank" className={styles.repo_link}>Github Repo</MotionA>
            </MotionDiv>
            <MotionDiv variants={itemVariants} className={styles.footer_links}>
            <MotionA className={`${styles.pointer} ${styles.link}`} href="https://github.com/Marwan-Void" target="_blank"><FontAwesomeIcon icon={faGithub} /></MotionA>
            <MotionA className={`${styles.pointer} ${styles.link}`} href="https://www.facebook.com/marwan.mohamed.codex.dev/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></MotionA>
            {/* <EMailBtn className={styles.link} /> */}
            </MotionDiv>
        </MotionFooter>
    );
}