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
export declare type CreateAccountSponsorOrganizationOverridesProps = {
    CreateAccountSponsorOrganization?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 22"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    Register?: PrimitiveOverrideProps<TextProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 25"?: PrimitiveOverrideProps<ViewProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 26"?: PrimitiveOverrideProps<ViewProps>;
    "Phone Number"?: PrimitiveOverrideProps<TextProps>;
    Organization?: PrimitiveOverrideProps<TextProps>;
    "Sponsor Organization Account Creation"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CreateAccountSponsorOrganizationProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CreateAccountSponsorOrganizationOverridesProps | undefined | null;
}>;
export default function CreateAccountSponsorOrganization(props: CreateAccountSponsorOrganizationProps): React.ReactElement;
