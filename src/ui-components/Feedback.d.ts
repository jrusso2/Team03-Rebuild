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
export declare type FeedbackOverridesProps = {
    Feedback?: PrimitiveOverrideProps<ViewProps>;
    "Sponsor Feedback Page"?: PrimitiveOverrideProps<ViewProps>;
    footer1061595?: PrimitiveOverrideProps<ViewProps>;
    footer1061596?: PrimitiveOverrideProps<ViewProps>;
    header1061597?: PrimitiveOverrideProps<ViewProps>;
    header1061598?: PrimitiveOverrideProps<ViewProps>;
    header_text?: PrimitiveOverrideProps<TextProps>;
    settings_gear_icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    main?: PrimitiveOverrideProps<ViewProps>;
    main_background?: PrimitiveOverrideProps<ViewProps>;
    question2?: PrimitiveOverrideProps<ViewProps>;
    question2_prompt?: PrimitiveOverrideProps<ViewProps>;
    question2_prompt_background?: PrimitiveOverrideProps<ViewProps>;
    question2_prompt_tex?: PrimitiveOverrideProps<TextProps>;
    question2_field1061616?: PrimitiveOverrideProps<ViewProps>;
    question2_field1061617?: PrimitiveOverrideProps<ViewProps>;
    question2_field_placeholder_text?: PrimitiveOverrideProps<TextProps>;
    question1?: PrimitiveOverrideProps<ViewProps>;
    question1_prompt?: PrimitiveOverrideProps<ViewProps>;
    question1_prompt_background?: PrimitiveOverrideProps<ViewProps>;
    question1_prompt_tex?: PrimitiveOverrideProps<TextProps>;
    question1_field1061623?: PrimitiveOverrideProps<ViewProps>;
    question1_field1061624?: PrimitiveOverrideProps<ViewProps>;
    question1_field_placeholder_text?: PrimitiveOverrideProps<TextProps>;
    scroll_bar?: PrimitiveOverrideProps<IconProps>;
    main_header?: PrimitiveOverrideProps<ViewProps>;
    main_header_background?: PrimitiveOverrideProps<ViewProps>;
    main_header_text?: PrimitiveOverrideProps<TextProps>;
    remove_button1061638?: PrimitiveOverrideProps<ViewProps>;
    remove_button_background1061639?: PrimitiveOverrideProps<ViewProps>;
    remove_button_hyphen1061640?: PrimitiveOverrideProps<IconProps>;
    remove_button1061642?: PrimitiveOverrideProps<ViewProps>;
    remove_button_background1061643?: PrimitiveOverrideProps<ViewProps>;
    remove_button_hyphen1061644?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 54"?: PrimitiveOverrideProps<ViewProps>;
    add_button?: PrimitiveOverrideProps<ViewProps>;
    add_button_background?: PrimitiveOverrideProps<ViewProps>;
    add_button_plus1?: PrimitiveOverrideProps<IconProps>;
    add_button_plus?: PrimitiveOverrideProps<IconProps>;
    "Add Another Question"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "Point Conversion"?: PrimitiveOverrideProps<TextProps>;
    Invoices?: PrimitiveOverrideProps<TextProps>;
    Catalog?: PrimitiveOverrideProps<TextProps>;
    Applications?: PrimitiveOverrideProps<TextProps>;
    Drivers?: PrimitiveOverrideProps<TextProps>;
    Feedback1061652?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeedbackProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeedbackOverridesProps | undefined | null;
}>;
export default function Feedback(props: FeedbackProps): React.ReactElement;
