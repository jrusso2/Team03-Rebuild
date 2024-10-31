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
export declare type CreateAccountDriverOverridesProps = {
    CreateAccountDriver?: PrimitiveOverrideProps<ViewProps>;
    Boarders?: PrimitiveOverrideProps<ViewProps>;
    top?: PrimitiveOverrideProps<ViewProps>;
    bottom?: PrimitiveOverrideProps<ViewProps>;
    "Creation Box"?: PrimitiveOverrideProps<ViewProps>;
    background?: PrimitiveOverrideProps<IconProps>;
    register?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    Register?: PrimitiveOverrideProps<TextProps>;
    Email24781?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    Email24769?: PrimitiveOverrideProps<TextProps>;
    Name24780?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    Name24771?: PrimitiveOverrideProps<TextProps>;
    "Phone Number24782"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "Phone Number24773"?: PrimitiveOverrideProps<TextProps>;
    "Driver Account Creation"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CreateAccountDriverProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreateAccountDriverOverridesProps | undefined | null;
}>;
export default function CreateAccountDriver(props: CreateAccountDriverProps): React.ReactElement;
