/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type AboutPageOverridesProps = {
    AboutPage?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 49"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 14"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 50"?: PrimitiveOverrideProps<IconProps>;
    "About this App"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<IconProps>;
    "Version ### Released 09/22/202420471"?: PrimitiveOverrideProps<TextProps>;
    "Version ### Released 09/22/202422832"?: PrimitiveOverrideProps<TextProps>;
    "Developed by Team 03"?: PrimitiveOverrideProps<TextProps>;
    "[App name] connects drivers with their sponsors, allowing drivers to be properly rewarded for a job well done."?: PrimitiveOverrideProps<TextProps>;
    "fa6-solid:gear"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    ABOUT?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AboutPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AboutPageOverridesProps | undefined | null;
}>;
export default function AboutPage(props: AboutPageProps): React.ReactElement;
