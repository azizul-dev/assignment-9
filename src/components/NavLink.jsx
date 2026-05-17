'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();

    const isActive = href === pathname

    return (
       <Link href={href} className={`${isActive ? "font-semibold bg-[linear-gradient(135deg,#4A90A4,#5BB8D4,#A8E6CF)] bg-clip-text text-transparent border-b-2 border-[#5BB8D4]" :""}`}>{children}</Link>
    );
};

export default NavLink;