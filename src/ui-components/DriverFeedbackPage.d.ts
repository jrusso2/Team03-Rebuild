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
export declare type DriverFeedbackPageOverridesProps = {
    DriverFeedbackPage?: PrimitiveOverrideProps<ViewProps>;
    footer69235?: PrimitiveOverrideProps<ViewProps>;
    footer69236?: PrimitiveOverrideProps<ViewProps>;
    header69237?: PrimitiveOverrideProps<ViewProps>;
    header69238?: PrimitiveOverrideProps<ViewProps>;
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
    main?: PrimitiveOverrideProps<ViewProps>;
    main_background?: PrimitiveOverrideProps<ViewProps>;
    question2?: PrimitiveOverrideProps<ViewProps>;
    question2_prompt?: PrimitiveOverrideProps<ViewProps>;
    question2_prompt_background?: PrimitiveOverrideProps<ViewProps>;
    question2_prompt_tex?: PrimitiveOverrideProps<TextProps>;
    question2_field81258?: PrimitiveOverrideProps<ViewProps>;
    question2_field81255?: PrimitiveOverrideProps<ViewProps>;
    question2_field_placeholder_text?: PrimitiveOverrideProps<TextProps>;
    question1?: PrimitiveOverrideProps<ViewProps>;
    question1_prompt?: PrimitiveOverrideProps<ViewProps>;
    question1_prompt_background?: PrimitiveOverrideProps<ViewProps>;
    question1_prompt_tex?: PrimitiveOverrideProps<TextProps>;
    question1_field81264?: PrimitiveOverrideProps<ViewProps>;
    question1_field81265?: PrimitiveOverrideProps<ViewProps>;
    question1_field_placeholder_text?: PrimitiveOverrideProps<TextProps>;
    scroll_bar?: PrimitiveOverrideProps<IconProps>;
    main_header?: PrimitiveOverrideProps<ViewProps>;
    main_header_background?: PrimitiveOverrideProps<ViewProps>;
    main_header_text?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DriverFeedbackPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DriverFeedbackPageOverridesProps | undefined | null;
}>;
export default function DriverFeedbackPage(props: DriverFeedbackPageProps): React.ReactElement;
