import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Cross from '../../assets/icons/cross.svg';
import Share from '../../assets/icons/share.svg';
import HamburgerDots from '../../assets/icons/hamburger-dots.svg';
import styles from './styles';

interface HeaderProps {
  children?: React.ReactNode | React.ReactNode[];
}
const Header: FC<HeaderProps> = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <Cross />
        </View>
        <View style={styles.middle}>
          <Text style={styles.title}>WWW.jfdifejf/fiej/fejoe..</Text>
        </View>
        <View style={styles.right}>
          <Share />
          <HamburgerDots />
        </View>
      </View>
    </>
  );
};

export default Header;
