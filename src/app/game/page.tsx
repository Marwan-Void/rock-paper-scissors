import { JSX } from "react";
import styles from "./page.module.css";
import { MotionDiv, MotionLink, MotionMain } from "../variants";
import { PageFooter, PageHeader } from "@/components/header&footer";

export default function Game(): JSX.Element {
    return (
        <MotionDiv>
            <PageHeader />
            <MotionMain>
                <MotionLink href={"../"}>Back</MotionLink>
            </MotionMain>
            <PageFooter />
        </MotionDiv>
    );
}