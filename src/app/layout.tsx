'use client'
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "@/styles/themes/default";
import {GlobalStyle} from "@/styles/global";
import Head from 'next/head';
import {Inter} from 'next/font/google'
import React from "react";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Head>
                <title>Barber - Barbers & Hair Cutting</title>
                <meta name="description" content="Barber - Barbers & Hair Cutting"/>
                <style>{`
                body {
                    font-family: ${inter.className};
                }
                `}</style>
            </Head>
            <body className={inter.className}>{children}</body>
            <GlobalStyle/>
        </ThemeProvider>
    )
}
