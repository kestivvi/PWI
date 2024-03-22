"use client";

import React from 'react';
import { ReactNode } from 'react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
// import "primereact/resources/themes/lara-dark-blue/theme.css";
import "./primereact_theme.css"
import 'primeicons/primeicons.css';

type Props = {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <>
      <PrimeReactProvider>
        {children}
      </PrimeReactProvider>
    </>
  );
}