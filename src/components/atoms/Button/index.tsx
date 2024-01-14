import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  loading?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onPress, title, loading = false, primary, secondary }) => {
  const buttonStyles = [
    styles.buttonContainer,
    primary && styles.primaryBackground,
    secondary && styles.secondaryBackground,
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={buttonStyles}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primaryBackground: {
    backgroundColor: '#ff0000',
  },
  secondaryBackground: {
    // Define el color de fondo para el caso secundario si lo necesitas
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    marginRight: 10,
  },
});
