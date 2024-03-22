"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "primereact/button";

type Props = {
    href: string;
    label: string;
    closeSidebar: () => void;
}

export default function NavLink({
    label,
    href,
    closeSidebar,
}: Props) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} onClick={closeSidebar}>
            <Button label={label} link style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-primary)' }} />
        </Link >
    )
}