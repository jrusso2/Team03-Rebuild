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
export declare type SponsorpointconversionOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    Sponsorpointconversion?: PrimitiveOverrideProps<ViewProps>;
    Boarders?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Point Conversion1061769"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    "fa6-solid:gear"?: PrimitiveOverrideProps<ViewProps>;
    Vector1061772?: PrimitiveOverrideProps<IconProps>;
    "Point Conversion1061773"?: PrimitiveOverrideProps<TextProps>;
    Invoices?: PrimitiveOverrideProps<TextProps>;
    Catalog?: PrimitiveOverrideProps<TextProps>;
    Applications?: PrimitiveOverrideProps<TextProps>;
    Drivers?: PrimitiveOverrideProps<TextProps>;
    Feedback?: PrimitiveOverrideProps<TextProps>;
    "Conversion Amount"?: PrimitiveOverrideProps<ViewProps>;
    "ri:money-dollar-circle-line"?: PrimitiveOverrideProps<ViewProps>;
    Vector1061838?: PrimitiveOverrideProps<IconProps>;
    "f7:money-rubl-circle"?: PrimitiveOverrideProps<ViewProps>;
    Vector1061840?: PrimitiveOverrideProps<IconProps>;
    "0.25"?: PrimitiveOverrideProps<TextProps>;
    "zondicons:arrow-up"?: PrimitiveOverrideProps<ViewProps>;
    Vector1061844?: PrimitiveOverrideProps<IconProps>;
    "Current Exchange rate: 1 point = $0.25"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 55"?: PrimitiveOverrideProps<ViewProps>;
    "Want to change the exchange rate?"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 56"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 57"?: PrimitiveOverrideProps<ViewProps>;
    "New Exchange Rate:"?: PrimitiveOverrideProps<TextProps>;
    "points equals $"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 58"?: PrimitiveOverrideProps<ViewProps>;
    Save?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SponsorpointconversionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SponsorpointconversionOverridesProps | undefined | null;
}>;
export default function Sponsorpointconversion(props: SponsorpointconversionProps): React.ReactElement;
