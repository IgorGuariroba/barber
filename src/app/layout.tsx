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
                <meta name="description" content="Barbearia online"/>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
