"use client";

import {useState} from "react";
import dynamic from "next/dynamic";
import Button from "@/app/components/button";

const NoSSR = dynamic(() => import('@hcaptcha/react-hcaptcha'), {ssr: false})

export default function BetaSubscriptionForm() {
    const [verificationCaptcha, setVerificationCaptcha] = useState(true);
    const [name, setName] = useState('');
    const [brandModel, setBrandModel] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subscriptionResult, setSubscriptionResult] = useState<null | boolean>(null);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const handleVerificationSuccess = (token: string) => {
        setVerificationCaptcha(false);
        setCaptchaToken(token);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);

        const response = await fetch('/apuntate/api', {method: 'POST', body: formData});

        setSubscriptionResult(response.status === 200);
        setName('');
        setBrandModel('');
        setEmail('');
        setCaptchaToken(null);
        setIsSubmitting(false);
    };

    return (
        <form className="mt-8 w-full max-w-lg" onSubmit={handleSubmit}>
            {subscriptionResult === true && (
                <div className="bg-green-100 mb-8 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                     role="contentinfo">
                    <strong className="font-bold">Apuntado</strong>
                    <span className="block sm:inline"> Ya tenemos tu solicitud ✌🏼</span>
                    <span><br/>El desarrollador se pondrá en contacto en unos días.</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
  </span>
                </div>)}
            {subscriptionResult === false && (
                <div className="bg-red-100 mb-8 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Ups</strong>
                    <span className="block sm:inline"> No he conseguido apuntarte, reintenta.</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
  </span>
                </div>
            )}
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="inline-full-name">
                        Nombre y Apellido(s)
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        name="name"
                        disabled={isSubmitting}
                        className="bg-gray-200 appearance-none border-4 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        id="inline-full-name" type="text" onChange={(evt) => setName(evt.currentTarget.value)}
                        value={name}/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6 ">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="inline-full-name">
                        Marca y modelo de móvil
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        disabled={isSubmitting}
                        className="bg-gray-200 appearance-none border-4 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        id="inline-full-name" type="text" value={brandModel}
                        onChange={(evt) => setBrandModel(evt.currentTarget.value)}
                        name="brandModel"/>
                </div>
            </div>

            <div className="md:flex md:items-center mb-6 ">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           htmlFor="inline-full-name">
                        Correo electrónico
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        disabled={isSubmitting}
                        className="bg-gray-200 appearance-none border-4 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        id="inline-full-name" type="text" value={email}
                        onChange={(evt) => setEmail(evt.currentTarget.value)}
                        name="email"/>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <NoSSR
                        sitekey="a9fb3ea9-c4e7-4643-b434-1dbf0774dbce"
                        onVerify={(token, ekey) => handleVerificationSuccess(token)}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mt-6 mb-6 ">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <Button
                        disabled={isSubmitting || verificationCaptcha || !email || !name || !brandModel}
                        type="submit"
                    >
                        {isSubmitting && ('Espera...')}
                        {!isSubmitting && ('Apúntame')}
                    </Button>
                </div>
            </div>
        </form>
    );
}
