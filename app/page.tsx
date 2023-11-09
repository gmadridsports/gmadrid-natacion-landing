"use client"
import Button from "@/app/components/button";
import Link from "next/link";

export default function Home() {
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
                        La App de GMadrid Natación.
                    </h1>
                    <h2 className=" bg text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500">
                        Al tanto en un ¡splash!
                    </h2>
                    <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                        Entrenos, calendario, estado de las piscinas... a partir de hoy olvídate de líos.
                    </p>
                    <p className="mt-2 text-gray-600 sm:mt-1 sm:text-xl">
                        Con GMadrid Natación App podrás estar al tanto, para ser parte activa de GMadrid Natación.
                    </p>
                    <div className="mt-4 sm:mt-6">
                        <Button type="link" href="/apuntate">Instalar</Button>
                    </div>
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
