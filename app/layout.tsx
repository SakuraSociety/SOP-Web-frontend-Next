import '@mantine/core/styles.css';
import './globals.css';
import React from 'react';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';
import NextTopLoader from 'nextjs-toploader';
import {theme} from '@/theme';
import {Navbar} from "@/components/Navbar/Navbar";
import {Footer} from "@/components/layout/Footer";


export const metadata = {
    title: '芳文观星台',
    description: '专注于芳文相关内容!',
};

export default function RootLayout({children}: { children: any }) {
    return (
        <html lang="zh-cn">
        <head>
            <ColorSchemeScript/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
        </head>
        <body color="#f7f7f7">
        <NextTopLoader color="#3e72b6" height={5} zIndex={1600}/>
        <MantineProvider theme={theme}>
            <Navbar/>
            <div
                className="relative flex flex-col md:flex-row md:justify-between mx-auto w-6/6 lg:w-5/6 xl:w-4/6 gap-10 top-24">
                {children}
            </div>
            <Footer/>
        </MantineProvider>
        </body>
        </html>
    );
}
