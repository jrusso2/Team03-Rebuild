/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPageOverridesProps = {
    LoginPage?: PrimitiveOverrideProps<ViewProps>;
    "Login Page"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<IconProps>;
    "Account Access"?: PrimitiveOverrideProps<TextProps>;
    "Form Log In"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type LoginPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginPageOverridesProps | undefined | null;
}>;
export default function LoginPage(props: LoginPageProps): React.ReactElement;
