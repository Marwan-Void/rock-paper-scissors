import { JSX } from "react";
import styles from "./page.module.css";
import { 
  parentVariants, itemVariants, MotionLink, MotionMain, MotionSpan, MotionP, MotionH1, MotionDiv,
  MotionSection,
  MotionArticle,
} from "./variants";
import { PageFooter, PageHeader } from "@/components/header&footer";

export default function Home(): JSX.Element {
  return (
    <MotionDiv className={styles.page}>
      <PageHeader />
      <MotionMain
        className={styles.page_main}
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <MotionSection className={styles.def_sec} variants={itemVariants}>
          <MotionSpan
            className={styles.def_sec_name}
          >Marwan Void</MotionSpan>
          <MotionH1
            className={styles.main_title}
          >RPS Void Game</MotionH1>
          <MotionP
            className={styles.main_desc}
          > A Game Made By Marwan Void </MotionP>
        </MotionSection>
        <MotionSection className={styles.game_cards_sec} variants={itemVariants}>
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
        <MotionSection variants={itemVariants} className={styles.play_sec}>
          <MotionLink
            className={styles.play_btn}
            href={"./game"}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.9 }}
          >Play Now</MotionLink>
        </MotionSection>
      </MotionMain>
      <PageFooter />
    </MotionDiv>
  );
}
