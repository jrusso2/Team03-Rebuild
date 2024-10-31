/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function CreateAccountSpecificAccount(props) {
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
      {...getOverrideProps(overrides, "CreateAccountSpecificAccount")}
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
        {...getOverrideProps(overrides, "Create Account - Specify Account")}
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
          {...getOverrideProps(overrides, "Rectangle 13")}
        ></Icon>
        <Text
          fontFamily="Roboto Mono"
          fontSize="25px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="32.97119140625px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="493px"
          height="62px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="305px"
          left="509px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="What type of account do you want to create?"
          {...getOverrideProps(
            overrides,
            "What type of account do you want to create?"
          )}
        ></Text>
      </View>
      <View
        width="580px"
        height="89px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="14.05%"
        bottom="76.88%"
        left="30.82%"
        right="30.82%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 6")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="580px"
          height="89px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="14px"
          {...getOverrideProps(overrides, "Total Number Of Drivers")}
        >
          <Text
            fontFamily="Roboto Mono"
            fontSize="40px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="52.75390625px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="580px"
            height="89px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Welcome to RoadRewards!"
            {...getOverrideProps(overrides, "Welcome to RoadRewards!")}
          ></Text>
        </View>
      </View>
      <Flex
        width="540px"
        height="54px"
        {...getOverrideProps(overrides, "Accordion Item")}
      ></Flex>
      <Flex
        width="122px"
        height="71px"
        {...getOverrideProps(overrides, "Button")}
      ></Flex>
    </View>
  );
}
