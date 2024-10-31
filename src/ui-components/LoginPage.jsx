/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function LoginPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="982px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LoginPage")}
      {...rest}
    >
      <View
        width="1512px"
        height="982px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Login Page")}
      >
        <View
          width="1512px"
          height="78px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(87,142,135,1)"
          {...getOverrideProps(overrides, "Rectangle 5")}
        ></View>
        <View
          width="1512px"
          height="78px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="904px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(87,142,135,1)"
          {...getOverrideProps(overrides, "Rectangle 6")}
        ></View>
        <Icon
          width="625px"
          height="549px"
          viewBox={{ minX: 0, minY: 0, width: 625, height: 549 }}
          paths={[
            {
              d: "M0 0L625 0L625 549L0 549L0 0Z",
              fill: "rgba(244,248,243,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="216px"
          left="443px"
          {...getOverrideProps(overrides, "Rectangle 7")}
        ></Icon>
        <Text
          fontFamily="Roboto Mono"
          fontSize="30px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="39.5654296875px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="308px"
          height="68px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="246px"
          left="602px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Account Access"
          {...getOverrideProps(overrides, "Account Access")}
        ></Text>
      </View>
      <Flex
        width="450px"
        height="400px"
        {...getOverrideProps(overrides, "Form Log In")}
      ></Flex>
    </View>
  );
}
