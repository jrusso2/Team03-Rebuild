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
export declare type AuditsPointChangesOverridesProps = {
    AuditsPointChanges?: PrimitiveOverrideProps<ViewProps>;
    "Dashboard Choices"?: PrimitiveOverrideProps<ViewProps>;
    "Add/Remove"?: PrimitiveOverrideProps<TextProps>;
    Audits162113?: PrimitiveOverrideProps<TextProps>;
    "Sponsor Organizations"?: PrimitiveOverrideProps<TextProps>;
    Permissions?: PrimitiveOverrideProps<TextProps>;
    Security?: PrimitiveOverrideProps<TextProps>;
    Boarders?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    Audits162121?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    "fa6-solid:gear"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Dashboard?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 27"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 28"?: PrimitiveOverrideProps<ViewProps>;
    "Sponsor Org."?: PrimitiveOverrideProps<TextProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
    "Point Change"?: PrimitiveOverrideProps<TextProps>;
    Reason?: PrimitiveOverrideProps<TextProps>;
    "Sponsor Name162132"?: PrimitiveOverrideProps<TextProps>;
    "Driver Name162133"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 29"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 30"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 31"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 32"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 37"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 38"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 39"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 40"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 33"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 34"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 35"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 36"?: PrimitiveOverrideProps<ViewProps>;
    "Driver Name162146"?: PrimitiveOverrideProps<TextProps>;
    "Driver Name162147"?: PrimitiveOverrideProps<TextProps>;
    "#162148"?: PrimitiveOverrideProps<ViewProps>;
    "08-19-24162149"?: PrimitiveOverrideProps<TextProps>;
    "#162150"?: PrimitiveOverrideProps<ViewProps>;
    "08-18-24162151"?: PrimitiveOverrideProps<TextProps>;
    "#162152"?: PrimitiveOverrideProps<ViewProps>;
    "Org Name162153"?: PrimitiveOverrideProps<TextProps>;
    "#162154"?: PrimitiveOverrideProps<ViewProps>;
    "Org Name162155"?: PrimitiveOverrideProps<TextProps>;
    "#162156"?: PrimitiveOverrideProps<ViewProps>;
    "-10"?: PrimitiveOverrideProps<TextProps>;
    "+15"?: PrimitiveOverrideProps<TextProps>;
    "#162159"?: PrimitiveOverrideProps<ViewProps>;
    Wreck?: PrimitiveOverrideProps<TextProps>;
    "Ahead of Sched."?: PrimitiveOverrideProps<TextProps>;
    "#162162"?: PrimitiveOverrideProps<ViewProps>;
    "Sponsor Name162163"?: PrimitiveOverrideProps<TextProps>;
    "#162164"?: PrimitiveOverrideProps<ViewProps>;
    "Sponsor Name162165"?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 68162167"?: PrimitiveOverrideProps<ViewProps>;
    Applications?: PrimitiveOverrideProps<TextProps>;
    "Group 8"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 68162170"?: PrimitiveOverrideProps<ViewProps>;
    "Point Changes"?: PrimitiveOverrideProps<TextProps>;
    "Group 9"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 68162173"?: PrimitiveOverrideProps<ViewProps>;
    "Password Changes"?: PrimitiveOverrideProps<TextProps>;
    "Group 10"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 68162176"?: PrimitiveOverrideProps<ViewProps>;
    "Login Attempts"?: PrimitiveOverrideProps<TextProps>;
    "Date Range:"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 69"?: PrimitiveOverrideProps<ViewProps>;
    "08-18-24162180"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 70"?: PrimitiveOverrideProps<ViewProps>;
    "08-19-24162182"?: PrimitiveOverrideProps<TextProps>;
    to?: PrimitiveOverrideProps<TextProps>;
    "Filter by specific sponsor:"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 71"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type AuditsPointChangesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AuditsPointChangesOverridesProps | undefined | null;
}>;
export default function AuditsPointChanges(props: AuditsPointChangesProps): React.ReactElement;
