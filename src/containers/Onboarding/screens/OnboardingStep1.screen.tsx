import React, {FC} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

interface OnboardingStep1Props {}
const OnboardingStep1: FC<OnboardingStep1Props> = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.image}>
          <Text>Logo</Text>
        </View>
        <View style={styles.form}>
          <Text>Step 1</Text>
          <Text>Please enter your details</Text>
          <View>
            <Text>Shop Owner Name</Text>
            <TextInput placeholder="Enter your name" />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  form: {},
});
export default OnboardingStep1;
