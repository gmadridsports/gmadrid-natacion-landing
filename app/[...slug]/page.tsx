"use client"
import Image from 'next/image'
import {useEffect, useMemo, useState} from "react";
import Link from "next/link";
import BetaSubscriptionForm from "@/app/apuntate/beta-subscription-form";
import Button from "@/app/components/button";

export default function Home() {
    const [appLink, setAppLink] = useState('#');

    useEffect(() => {
        if (typeof window === 'undefined') return;

        setAppLink(window?.location.href.replace(/^https\:\/\/authgmadridnatacion\.bertamini\.net/, 'https://gmadridnatacion.bertamini.net'));

    }, []);

    return(
        <>
            <div className="mt-4 mb-28 grid mx-12 lg:mx-auto lg:max-w-5xl lg:grid-cols-5">
                <div
                    className="lg:col-span-3 "
                >
                    <Link href="../"><img className="h-10" src="/img/logo.svg" alt="GMadrid Natación logo"/></Link>
                    <img
                        className="max-h h-60 w-full object-cover object-top drop-shadow-md lg:hidden"
                        src="/img/demo-top.png"
                        alt="Pantallazo de la aplicación"
                    />
                    <h1
                        className="mt-6 bg text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 sm:mt-8"
                    >
                        Acceso a la aplicación
                    </h1>
                    <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                        Acceso realizado, ¡casi estás!
                    </p>
                    <p className="mt-8 text-center">
                        <Button type="link" href={appLink}>

                            Abre la aplicación
                        </Button>
                    </p>
                </div>
                <div className="hidden lg:block lg:col-span-2">
                    <img
                        className="absolute w-72 mb-6 object-center mt-20"
                        src="/img/demo.png"
                        alt="Pantallazo de la aplicación"
                    />
                </div>
            </div>
        </>
    );
}
