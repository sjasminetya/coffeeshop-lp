'use client';
import { useEffect } from 'react';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  useEffect(() => {
    // Import Bootstrap JavaScript dynamically
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}