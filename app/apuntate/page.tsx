import Image from 'next/image'

import dynamic from 'next/dynamic'
import BetaSubscriptionForm from "@/app/apuntate/beta-subscription-form";

export default function Apuntate() {

    return (
        <>
            <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5 mb-28">
                <div
                    className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-3"
                >
                    <div className="xl:max-w-xl">
                        <img className="h-10" src="/img/logo.svg" alt="GMadrid Natación logo"/>
                        <img
                            className="rounded-lg h-60 sm:h-96 w-full  object-cover object-top lg:hidden"
                            src="/img/demo.png"
                            alt="Pantallazo de la aplicación"
                        />
                        <h1
                            className="mt-6 bg text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
                        >
                            Apúntate a la beta
                        </h1>
                        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                            La aplicación está todavía en una fase de prueba. Apúntate entre los beta-testers rellenando
                            el formulario. Serás contactado con las instrucciones para instalarla.
                        </p>
                        <BetaSubscriptionForm />
                    </div>
                </div>
                <div className="hidden relative lg:block 2xl:col-span-2">
                    <div
                        className="absolute mt-10 ml-8 h-full w-60 -inset-0 rounded-lg "></div>
                    <img
                        className="absolute w-72 mb-6 object-center "
                        src="/img/demo.png"
                        alt="Pantallazo de la aplicación"
                    />
                </div>
            </div>

            <div className="lg:fixed bottom-0 left-0 flex h-25 w-full bg-slate-50/70 justify-center">
                <a
                    className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-4"
                    href="https://www.bertamini.net"
                >
                    By{' '}
                    <Image
                        src="https://www.bertamini.net/smiley-face.svg"
                        alt="Vercel Logo"
                        className="white:invert"
                        width={24}
                        height={24}
                        priority
                    />
                    bertamini.net
                </a>
            </div>
        </>
    );
}
