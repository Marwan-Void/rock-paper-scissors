'use client';
import { JSX } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { parent_variants, item_variants, MotionLink } from "../variants";

export default function Game(): JSX.Element {
    return (
        <div className={styles.page}>
            <MotionLink href={"../"}>Nigga</MotionLink>
        </div>
    );
}