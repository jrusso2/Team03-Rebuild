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
export declare type CreateAccountSponsorOverridesProps = {
    CreateAccountSponsor?: PrimitiveOverrideProps<ViewProps>;
    "Create Account - Sponsor"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Sponsor Account Creation"?: PrimitiveOverrideProps<TextProps>;
    "Accordion Item"?: PrimitiveOverrideProps<FlexProps>;
    "Input Field226108"?: PrimitiveOverrideProps<FlexProps>;
    "Input Field226122"?: PrimitiveOverrideProps<FlexProps>;
    "Input Field226115"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type CreateAccountSponsorProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreateAccountSponsorOverridesProps | undefined | null;
}>;
export default function CreateAccountSponsor(props: CreateAccountSponsorProps): React.ReactElement;
