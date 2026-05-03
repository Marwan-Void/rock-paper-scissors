'use client';
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export const MotionLink = motion(Link);
export const MotionDiv = motion.div;
export const MotionA = motion.a;
export const MotionMain = motion.main;
export const MotionSpan = motion.span;
export const MotionH1 = motion.h1;
export const MotionP = motion.p;
export const MotionFooter = motion.footer;
export const MotionH2 = motion.h2;
export const MotionSection = motion.section;
export const MotionArticle = motion.article;
export const MotionHeader = motion.header;

export const parent_variants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};
export const item_variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 },
  },
};