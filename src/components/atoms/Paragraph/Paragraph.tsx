import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const Paragraph = (props: any) => {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
})
