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
export declare type DriverCheckoutOverridesProps = {
    DriverCheckout?: PrimitiveOverrideProps<ViewProps>;
    left?: PrimitiveOverrideProps<ViewProps>;
    point_balance_frame10442?: PrimitiveOverrideProps<ViewProps>;
    point_balance_base10443?: PrimitiveOverrideProps<IconProps>;
    point_balance_style_line10444?: PrimitiveOverrideProps<IconProps>;
    point_balance_title_text10445?: PrimitiveOverrideProps<TextProps>;
    point_balance_highlight10446?: PrimitiveOverrideProps<IconProps>;
    point_balance_text10447?: PrimitiveOverrideProps<TextProps>;
    point_balance_frame10448?: PrimitiveOverrideProps<ViewProps>;
    point_balance_base10449?: PrimitiveOverrideProps<IconProps>;
    point_balance_style_line10450?: PrimitiveOverrideProps<IconProps>;
    point_balance_title_text10451?: PrimitiveOverrideProps<TextProps>;
    point_balance_highlight10452?: PrimitiveOverrideProps<IconProps>;
    point_balance_text10453?: PrimitiveOverrideProps<TextProps>;
    right?: PrimitiveOverrideProps<ViewProps>;
    right_background?: PrimitiveOverrideProps<ViewProps>;
    shop_title?: PrimitiveOverrideProps<ViewProps>;
    shop_title_background?: PrimitiveOverrideProps<IconProps>;
    shop_title_text?: PrimitiveOverrideProps<TextProps>;
    checkout_interface?: PrimitiveOverrideProps<ViewProps>;
    checkout_background?: PrimitiveOverrideProps<ViewProps>;
    item1_frame104261?: PrimitiveOverrideProps<ViewProps>;
    item1_background104260?: PrimitiveOverrideProps<ViewProps>;
    img104268?: PrimitiveOverrideProps<ViewProps>;
    img_background104263?: PrimitiveOverrideProps<ViewProps>;
    img_text104266?: PrimitiveOverrideProps<TextProps>;
    item1_name_text104270?: PrimitiveOverrideProps<TextProps>;
    item1_cost_background104272?: PrimitiveOverrideProps<ViewProps>;
    item1_cost_text104271?: PrimitiveOverrideProps<TextProps>;
    item1_frame104273?: PrimitiveOverrideProps<ViewProps>;
    item1_background104274?: PrimitiveOverrideProps<ViewProps>;
    img104275?: PrimitiveOverrideProps<ViewProps>;
    img_background104276?: PrimitiveOverrideProps<ViewProps>;
    img_text104277?: PrimitiveOverrideProps<TextProps>;
    item1_name_text104278?: PrimitiveOverrideProps<TextProps>;
    item1_cost_background104279?: PrimitiveOverrideProps<ViewProps>;
    item1_cost_text104280?: PrimitiveOverrideProps<TextProps>;
    item1_frame104291?: PrimitiveOverrideProps<ViewProps>;
    item1_background104292?: PrimitiveOverrideProps<ViewProps>;
    img104293?: PrimitiveOverrideProps<ViewProps>;
    img_background104294?: PrimitiveOverrideProps<ViewProps>;
    img_text104295?: PrimitiveOverrideProps<TextProps>;
    item1_name_text104296?: PrimitiveOverrideProps<TextProps>;
    item1_cost_background104297?: PrimitiveOverrideProps<ViewProps>;
    item1_cost_text104298?: PrimitiveOverrideProps<TextProps>;
    item1_frame104282?: PrimitiveOverrideProps<ViewProps>;
    item1_background104283?: PrimitiveOverrideProps<ViewProps>;
    img104284?: PrimitiveOverrideProps<ViewProps>;
    img_background104285?: PrimitiveOverrideProps<ViewProps>;
    img_text104286?: PrimitiveOverrideProps<TextProps>;
    item1_name_text104287?: PrimitiveOverrideProps<TextProps>;
    item1_cost_background104288?: PrimitiveOverrideProps<ViewProps>;
    item1_cost_text104289?: PrimitiveOverrideProps<TextProps>;
    scroll_bar?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 51"?: PrimitiveOverrideProps<ViewProps>;
    "4 items"?: PrimitiveOverrideProps<TextProps>;
    "Sum price: 80 points"?: PrimitiveOverrideProps<TextProps>;
    checkout_button_background?: PrimitiveOverrideProps<ViewProps>;
    "Confirm Purchase"?: PrimitiveOverrideProps<TextProps>;
    footer104244?: PrimitiveOverrideProps<ViewProps>;
    footer104245?: PrimitiveOverrideProps<ViewProps>;
    header104246?: PrimitiveOverrideProps<ViewProps>;
    header104247?: PrimitiveOverrideProps<ViewProps>;
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
export declare type DriverCheckoutProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DriverCheckoutOverridesProps | undefined | null;
}>;
export default function DriverCheckout(props: DriverCheckoutProps): React.ReactElement;
