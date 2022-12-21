import React, {FC} from 'react';
import {View} from 'react-native';

interface SizedBoxProps {
  width?: number;
  height?: number;
}
const SizedBox: FC<SizedBoxProps> = ({width = 0, height = 0}) => {
  return (
    <>
      <View
        style={{
          width: width,
          height: height,
        }}
      />
    </>
  );
};

export default SizedBox;
