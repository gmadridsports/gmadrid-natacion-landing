import Image from 'next/image'

import dynamic from 'next/dynamic'
import BetaSubscriptionForm from "@/app/apuntate/beta-subscription-form";
import Link from "next/link";

export default function Apuntate() {
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
                        Apúntate a la beta
                    </h1>
                    <p className="mt-2 text-gray-600 text-justify sm:mt-4 sm:text-xl">
                        La aplicación está todavía en una fase de prueba. Apúntate entre los beta-testers rellenando
                        el formulario. Serás contactado con las instrucciones para instalarla.
                    </p>
                    <BetaSubscriptionForm/>
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
