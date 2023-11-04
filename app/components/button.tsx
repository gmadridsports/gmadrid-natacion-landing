import React, {MouseEventHandler} from "react";

type UnionKeys<T> = T extends T ? keyof T : never;
type StrictUnionHelper<T, TAll> =
    T extends any
        ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>> : never;
type StrictUnion<T> = StrictUnionHelper<T, T>

type LinkProps = {
    children: React.ReactNode;
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>
    type: "link";
};

type SubmitProps = {
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
    type: "submit";
    disabled: boolean;
};

type ButtonProps = {
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
    type: "button";
    disabled: boolean;
};

type ButtonPropsType = StrictUnion<LinkProps | SubmitProps | ButtonProps>;

const Button = ({
                    type, children, onClick,
                    ...props
                }: ButtonPropsType) => {
    if (type === "link") {
        return (<a
                className="inline-block px-5 py-3 rounded-lg transform transition bg-blue hover:bg-blue-600 hover:-translate-y-0.5 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-blue-700 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href={type === "link" ? (props.href) : "#"}
                onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
            >
                {children}
            </a>
        );
    }

    return (<button
            type={type}
            className={`inline-block px-5 py-3 rounded-lg transform transition  ${!props.disabled ? 'bg-blue hover:bg-blue-600 hover:-translate-y-0.5 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-blue-700' : 'bg-lightBlue-200'} uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base`}
            onClick={onClick}
            disabled={props.disabled}
        >
            {children}
        </button>
    );
}

export default Button;