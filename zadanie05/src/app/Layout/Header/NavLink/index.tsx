"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import styles from "./styles.module.css"

type Props = {
    href: string;
    children: ReactNode;
}

export default function NavLink({
    children,
    href,
}: Props) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`${styles.link} ${isActive ? styles.current_link : ""}`}>
            {children}
        </Link>
    )
}