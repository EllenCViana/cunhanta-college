"use client";

import Head from 'next/head';
import Footer from "../components/Footer";
import './globals.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[75vh]">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <main className="flex-1">
      </main>
      <Footer/>
    </div>
  );
}

export default App;
