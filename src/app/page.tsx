import { JSX } from "react";
import styles from "./page.module.css";
import { 
  parent_variants, item_variants, MotionLink, MotionA, MotionMain, MotionSpan, MotionP, MotionH1, MotionDiv, MotionFooter, MotionH2, 
  MotionSection,
  MotionArticle,
  MotionHeader
} from "./variants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { EMailBtn } from "@/components/components";

export default function Home(): JSX.Element {
  return (
    <MotionDiv className={styles.page}>
      <MotionHeader className={styles.page_header} variants={parent_variants} initial="hidden" whileInView="visible">
        <MotionP
          className={styles.page_header_name}
          variants={item_variants}
        >Rock, Paper, Scissors</MotionP>
      </MotionHeader>
      <MotionMain
        className={styles.page_main}
        variants={parent_variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <MotionSection className={styles.def_sec} variants={item_variants}>
          <MotionSpan
            className={styles.def_sec_name}
          >Marwan Void</MotionSpan>
          <MotionH1
            className={styles.main_title}
          >Rock, Paper And Scissors Game</MotionH1>
          <MotionP
            className={styles.main_desc}
          > A Game Made By Marwan Void </MotionP>
        </MotionSection>
        <MotionSection className={styles.game_cards_sec} variants={item_variants}>
          <MotionArticle className={styles.cards_article}>
            <MotionDiv
              className={`${styles.card} ${styles.rock_card}`}
              layout
            > Rock </MotionDiv>
            <MotionDiv
              className={`${styles.card} ${styles.paper_card}`}
              layout
            > Paper </MotionDiv>
            <MotionDiv
              className={`${styles.card} ${styles.scissors_card}`}
              layout
            > Scissors </MotionDiv>
          </MotionArticle>
        </MotionSection>
        <MotionSection variants={item_variants} className={styles.play_sec}>
          <MotionLink
            className={styles.play_btn}
            href={"./game"}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.9 }}
          >Play Now</MotionLink>
        </MotionSection>
      </MotionMain>
      <MotionFooter
        className={styles.footer}
        variants={parent_variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <MotionDiv variants={item_variants} className={styles.footer_info}>
          <MotionH2 className={styles.footer_name}>Marwan Void</MotionH2>
          <MotionP className={styles.footer_copyright}>
            &copy; 2026 - {new Date().getFullYear()} Marwan Void
          </MotionP>
          <MotionA className={styles.repo_link}>Github Repo</MotionA>
        </MotionDiv>
        <MotionDiv variants={item_variants} className={styles.footer_links}>
          <MotionA className={styles.link} href="https://github.com/Marwan-Void" target="_blank"><FontAwesomeIcon icon={faGithub} /></MotionA>
          <MotionA className={styles.link} href="https://www.facebook.com/marwan.mohamed.codex.dev/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></MotionA>
          <EMailBtn className={styles.link} />
        </MotionDiv>
      </MotionFooter>
    </MotionDiv>
  );
}
