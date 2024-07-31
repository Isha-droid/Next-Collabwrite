import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow-lg">
      <div className="flex items-center space-x-4">
        <Link href="/" passHref>
          <div className="flex items-center space-x-2">
            <Image src="/assets/icons/logo.svg" alt="Logo" width={150} height={40} />
            <Image src="/assets/icons/logo-icon.svg" alt="Logo Icon" width={40} height={40} className="hidden md:block" />
          </div>
        </Link>
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="/about">
          <div className="hover:text-pink-500 transition-colors duration-200">About</div>
        </Link>
        <Link href="/services">
          <div className="hover:text-pink-500 transition-colors duration-200">Services</div>
        </Link>
        <Link href="/contact">
          <div className="hover:text-pink-500 transition-colors duration-200">Contact</div>
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        {children}
      </div>
    </header>
  );
};

export default Header;
