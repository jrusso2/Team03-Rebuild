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
export declare type SettingsOverridesProps = {
    Settings?: PrimitiveOverrideProps<ViewProps>;
    Boarders?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    Settings162733?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    "fa6-solid:gear"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Back?: PrimitiveOverrideProps<TextProps>;
    "Group 21"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 77"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 78"?: PrimitiveOverrideProps<ViewProps>;
    "Change Password"?: PrimitiveOverrideProps<TextProps>;
    "Current password:"?: PrimitiveOverrideProps<TextProps>;
    "New password:"?: PrimitiveOverrideProps<TextProps>;
    "Confirm new password:"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 79"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 80"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 81"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 82"?: PrimitiveOverrideProps<ViewProps>;
    "Save Changes"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SettingsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SettingsOverridesProps | undefined | null;
}>;
export default function Settings(props: SettingsProps): React.ReactElement;
