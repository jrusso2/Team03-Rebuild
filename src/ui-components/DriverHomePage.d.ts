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
export declare type DriverHomePageOverridesProps = {
    DriverHomePage?: PrimitiveOverrideProps<ViewProps>;
    left?: PrimitiveOverrideProps<ViewProps>;
    reset_balance_message?: PrimitiveOverrideProps<TextProps>;
    point_balance_frame?: PrimitiveOverrideProps<ViewProps>;
    point_balance_base?: PrimitiveOverrideProps<IconProps>;
    point_balance_style_line?: PrimitiveOverrideProps<IconProps>;
    point_balance_title_text?: PrimitiveOverrideProps<TextProps>;
    point_balance_highlight?: PrimitiveOverrideProps<IconProps>;
    point_balance_text?: PrimitiveOverrideProps<TextProps>;
    right?: PrimitiveOverrideProps<ViewProps>;
    right_background?: PrimitiveOverrideProps<ViewProps>;
    points_table?: PrimitiveOverrideProps<ViewProps>;
    points_table_sorting_text?: PrimitiveOverrideProps<TextProps>;
    points_table_title_frame?: PrimitiveOverrideProps<ViewProps>;
    point_table_title_background?: PrimitiveOverrideProps<IconProps>;
    points_table_title_text?: PrimitiveOverrideProps<TextProps>;
    points_table_body_group?: PrimitiveOverrideProps<ViewProps>;
    "Driver List"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 42"?: PrimitiveOverrideProps<IconProps>;
    "Billy Bob4775"?: PrimitiveOverrideProps<ViewProps>;
    "-24776"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4777"?: PrimitiveOverrideProps<ViewProps>;
    "-24778"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4783"?: PrimitiveOverrideProps<ViewProps>;
    "+40"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4785"?: PrimitiveOverrideProps<ViewProps>;
    "+38"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4791"?: PrimitiveOverrideProps<ViewProps>;
    "Billy Bob4793"?: PrimitiveOverrideProps<ViewProps>;
    "+33"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob47117"?: PrimitiveOverrideProps<ViewProps>;
    "09/24/24: 08:33 AM47118"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob47126"?: PrimitiveOverrideProps<ViewProps>;
    "09/24/24: 08:33 AM47127"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob47129"?: PrimitiveOverrideProps<ViewProps>;
    "09/24/24: 08:33 AM47130"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob47123"?: PrimitiveOverrideProps<ViewProps>;
    "09/24/24: 08:33 AM47124"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob47120"?: PrimitiveOverrideProps<ViewProps>;
    "09/24/24: 08:33 AM47121"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4799"?: PrimitiveOverrideProps<ViewProps>;
    "-10"?: PrimitiveOverrideProps<TextProps>;
    "-5"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob47101"?: PrimitiveOverrideProps<ViewProps>;
    "+23"?: PrimitiveOverrideProps<TextProps>;
    points_table_header?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 43"?: PrimitiveOverrideProps<ViewProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    "Point Change"?: PrimitiveOverrideProps<TextProps>;
    Reason?: PrimitiveOverrideProps<TextProps>;
    Balance?: PrimitiveOverrideProps<TextProps>;
    "Time/Date"?: PrimitiveOverrideProps<TextProps>;
    scroll_bar?: PrimitiveOverrideProps<IconProps>;
    name_column?: PrimitiveOverrideProps<ViewProps>;
    "Billy Bob47109"?: PrimitiveOverrideProps<ViewProps>;
    "[Sponsor]47110"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4787"?: PrimitiveOverrideProps<ViewProps>;
    "[Sponsor]4788"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4779"?: PrimitiveOverrideProps<ViewProps>;
    "[Sponsor]4780"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4795"?: PrimitiveOverrideProps<ViewProps>;
    "[Driver]"?: PrimitiveOverrideProps<TextProps>;
    reason_column?: PrimitiveOverrideProps<ViewProps>;
    "Billy Bob47111"?: PrimitiveOverrideProps<ViewProps>;
    "Late delivery"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4797"?: PrimitiveOverrideProps<ViewProps>;
    "Purchase: Lava Lamp"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4789"?: PrimitiveOverrideProps<ViewProps>;
    "Early Delivery"?: PrimitiveOverrideProps<TextProps>;
    "Billy Bob4781"?: PrimitiveOverrideProps<ViewProps>;
    "Late Delivery"?: PrimitiveOverrideProps<TextProps>;
    footer6967?: PrimitiveOverrideProps<ViewProps>;
    footer4744?: PrimitiveOverrideProps<ViewProps>;
    header6968?: PrimitiveOverrideProps<ViewProps>;
    header4743?: PrimitiveOverrideProps<ViewProps>;
    header_text?: PrimitiveOverrideProps<TextProps>;
    settings_gear_icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    navbar?: PrimitiveOverrideProps<ViewProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    navbar_base?: PrimitiveOverrideProps<ViewProps>;
    selected_highlight?: PrimitiveOverrideProps<ViewProps>;
    HOME?: PrimitiveOverrideProps<TextProps>;
    SHOP?: PrimitiveOverrideProps<TextProps>;
    "GIVE FEEDBACK"?: PrimitiveOverrideProps<TextProps>;
    ABOUT?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DriverHomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DriverHomePageOverridesProps | undefined | null;
}>;
export default function DriverHomePage(props: DriverHomePageProps): React.ReactElement;
