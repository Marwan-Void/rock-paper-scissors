'use client';
import { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";
import { FooterLink } from "./FooterLink";

export function EMailBtn(): JSX.Element {
    function handleMailClick(): string {
        // e: (MouseEvent | TouchEvent | PointerEvent | string)
        // e.preventDefault();
        const user: string = "mrawan10152011";
        const domain: string = "gmail.com";
        // window.location.href = `mailto:${user}@${domain}`;
        return (`mailto:${user}@${domain}`);
    }

    return (
        <FooterLink dest={`${handleMailClick()}`} icon={<FontAwesomeIcon icon={faG} />} title="Send Me Mail"/>
    );
}