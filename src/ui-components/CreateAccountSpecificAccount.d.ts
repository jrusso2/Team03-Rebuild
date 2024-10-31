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
export declare type CreateAccountSpecificAccountOverridesProps = {
    CreateAccountSpecificAccount?: PrimitiveOverrideProps<ViewProps>;
    "Create Account - Specify Account"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 13"?: PrimitiveOverrideProps<IconProps>;
    "What type of account do you want to create?"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6"?: PrimitiveOverrideProps<ViewProps>;
    "Total Number Of Drivers"?: PrimitiveOverrideProps<ViewProps>;
    "Welcome to RoadRewards!"?: PrimitiveOverrideProps<TextProps>;
    "Accordion Item"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type CreateAccountSpecificAccountProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreateAccountSpecificAccountOverridesProps | undefined | null;
}>;
export default function CreateAccountSpecificAccount(props: CreateAccountSpecificAccountProps): React.ReactElement;
