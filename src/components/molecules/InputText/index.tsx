import React from 'react';
import { TextInput as RNTextInput, Text, View, StyleSheet } from 'react-native';

interface TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: boolean;
  errorText?: string;
  secureTextEntry?: boolean;
  returnKeyType?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChangeText,
  error = false,
  errorText = '',
  secureTextEntry = false,
  returnKeyType = 'done',
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <RNTextInput
      style={[styles.input, error && styles.errorInput]}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
    {error && <Text style={styles.errorText}>{errorText}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
});
