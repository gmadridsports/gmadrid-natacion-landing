import Image from 'next/image'

import dynamic from 'next/dynamic'
import Link from "next/link";
import DeleteAccountForm from "@/app/delete-account/delete-account-form";

export default function DeleteAccount() {
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
                        Borra tu cuenta
                    </h1>
                    <p className="mt-2 text-gray-600 text-justify sm:mt-4 sm:text-xl">
                        La aplicación detiene algunas informaciones tuyas, como tu email, para poder funcionar.
                        Si quieres que borremos tus datos, rellena el formulario.
                        Te enviaremos un email para confirmar la eliminación de tu cuenta y todos los datos relacionados.
                    </p>
                    <DeleteAccountForm/>
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
