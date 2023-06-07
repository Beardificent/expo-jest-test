import { Box, HStack, Icon, Text } from "native-base";
import { FC } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

interface BoxWithIconProps {
  iconName: string;
  text: string;
}

const BoxWithIcon: FC<BoxWithIconProps> = ({ iconName, text }) => {
  return (
    <Box w={"fit-content"} borderWidth={1} p={2} data-testid="box-icon">
      <HStack alignItems={'center'}>
        <Icon
          color={"coolGray.700"}
          size={"2xl"}
          as={FontAwesome5}
          name={iconName}
        />
        <Text children={text} />
      </HStack>
    </Box>
  );
};

export default BoxWithIcon;
