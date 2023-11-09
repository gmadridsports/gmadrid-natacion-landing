"use client"
import {useParams} from 'next/navigation'
import {useEffect, useState} from "react";
import Link from "next/link";
import Button from "@/app/components/button";

export default function Home() {
    const [appLink, setAppLink] = useState('#');
    const params = useParams();
    const [showErrorAuth, setShowErrorAuth] = useState(false);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const parsedHash = new URLSearchParams(hash);

        if (parsedHash.has('error')) {
            setShowErrorAuth(true);
        }
    }, [params]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        setAppLink(window?.location.href.replace(/^https\:\/\/authgmadridnatacion\.bertamini\.net/, 'https://gmadridnatacion.bertamini.net'));

    }, []);

    return (
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
                        {showErrorAuth ? 'Error de acceso a la app' : 'Acceso a la app'}
                    </h1>
                    {showErrorAuth && (
                        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-lg">
                            Ha ocurrido un error al acceder.
                            <ul className="list-disc mt-8">
                                <li className="pb-4">Recuerda que el correo de acceso es de síngulo uso. Realiza otra
                                    vez el acceso en la app para obtener un nuevo correo válido.
                                </li>
                                <li className="pb-4">El correo y enlace de acceso debe abrirse en el mismo dispositivo
                                    con el que se intenta acceder. Si has abierto el enlace de acceso previamente en
                                    otro dispositivo (otro móvil, ordenador, etc), debes reintentar el acceso.
                                </li>
                                <li>Puedes señalar cualquier otro problema en <Link className="text-blue"
                                                                                    href="https://forms.gle/C6rrXmHaoyhsyfAG9">esta
                                    página</Link></li>
                            </ul>
                        </p>
                    ) || (
                        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                            Acceso realizado, ¡Casi estás!
                        </p>
                    )}
                    {!showErrorAuth && (
                        <p className="mt-8 text-center">
                            <Button type="link" href={appLink}>

                                Abre la aplicación
                            </Button>
                        </p>
                    )}
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
