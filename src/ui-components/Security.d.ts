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
export declare type SecurityOverridesProps = {
    "180"?: PrimitiveOverrideProps<TextProps>;
    Security?: PrimitiveOverrideProps<ViewProps>;
    "Dashboard Choices"?: PrimitiveOverrideProps<ViewProps>;
    "Add/Remove"?: PrimitiveOverrideProps<TextProps>;
    Audits?: PrimitiveOverrideProps<TextProps>;
    "Sponsor Organizations"?: PrimitiveOverrideProps<TextProps>;
    Permissions162542?: PrimitiveOverrideProps<TextProps>;
    Invoices?: PrimitiveOverrideProps<TextProps>;
    Security162544?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    Boarders?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    Permissions162549?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    "fa6-solid:gear"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Group 16"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 72"?: PrimitiveOverrideProps<ViewProps>;
    "Save Settings"?: PrimitiveOverrideProps<TextProps>;
    "Group 19"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 73"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 74"?: PrimitiveOverrideProps<ViewProps>;
    "Session Timeout Settings"?: PrimitiveOverrideProps<TextProps>;
    "Group 17"?: PrimitiveOverrideProps<ViewProps>;
    "Time before timeout:"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 75"?: PrimitiveOverrideProps<IconProps>;
    seconds?: PrimitiveOverrideProps<TextProps>;
    "Group 18"?: PrimitiveOverrideProps<ViewProps>;
    "Changing setting for:"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 76"?: PrimitiveOverrideProps<ViewProps>;
    Driver?: PrimitiveOverrideProps<TextProps>;
    "Polygon 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SecurityProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SecurityOverridesProps | undefined | null;
}>;
export default function Security(props: SecurityProps): React.ReactElement;
