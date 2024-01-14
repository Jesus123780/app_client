import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../../assets';

interface FigureProps {
    children?: ReactNode;
  }
  
export  const Figure: React.FC<FigureProps> = ({ children }) => {
    return (
      <View style={styles.container}>
        <View style={styles.concaveTop}>
          {children}
        </View>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorAlvibackgroundwhite
  },
  concaveTop: {
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    zIndex: 1,
    backgroundColor: colors.colorprimaryredBg
  },
});

