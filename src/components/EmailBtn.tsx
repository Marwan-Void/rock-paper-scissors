'use client';
import { JSX } from "react";
import { MotionA } from "@/app/variants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";

export function EMailBtn({className}: {className: string}): JSX.Element {
    function handleMailClick(): string {
        // e: (MouseEvent | TouchEvent | PointerEvent | string)
        // e.preventDefault();
        const user: string = "mrawan10152011";
        const domain: string = "gmail.com";
        // window.location.href = `mailto:${user}@${domain}`;
        return (`mailto:${user}@${domain}`);
    }

    return (
        <MotionA href={`${handleMailClick()}`} className={className} title="Send Me Mail">
            <FontAwesomeIcon icon={faG} />
        </MotionA>
    );
}