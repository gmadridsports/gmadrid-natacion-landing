"use client"
import Button from "@/app/components/button";
import Link from "next/link";
import {useSearchParams} from 'next/navigation'
import {useEffect, useState} from "react";

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
    // @ts-ignore
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    // @ts-ignore
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

export default function Update() {
    const searchParams = useSearchParams();
    const downloadUrlAndroid = searchParams.get('downloadUrlAndroid');
    const downloadUrlIos = searchParams.get('downloadUrlIos');
    const [platform, setPlatform] = useState<'iOS' | 'Android' | 'unsupported'>('unsupported');

    useEffect(() => {
        const os = getMobileOperatingSystem();

        switch (os) {
            case 'Android':
            case 'iOS':
                setPlatform(os);
                break;
            default:
                setPlatform('unsupported');
                break;
        }
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
                        Actualización de la app
                    </h1>
                    <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                        Nueva versión disponible.
                    </p>
                    {(platform === 'unsupported') && (
                        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                            Estás abriendo esta página en un dispositivo no soportado. Reinténtalo desde el dispositivo
                            con GMadrid Natación App instalado.
                        </p>
                    )}
                    {(platform === 'Android') && (
                        <div className="mt-4 sm:mt-6">
                            <Button type="link" href={downloadUrlAndroid || "#"}>Descargar</Button>
                        </div>
                    ) }
                    {(platform === 'iOS') && (
                        <div className="mt-4 sm:mt-6">
                            <Button type="link" href={downloadUrlIos || "#"}>Descargar</Button>
                        </div>
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
