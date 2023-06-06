import React from "react";

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return ( 
    <section>
      <h2>Tutaj jest tekst</h2>
      {children}
      </section>) 
  }