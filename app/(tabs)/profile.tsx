import { Image, StyleSheet } from 'react-native'

import { Text, View } from '@/shared/theme/Themed'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.millionluxury.com/image-resizing?image=https://static.millionluxury.com/spinfile/Spin/Data/Estate/IMG/733595ac7750469d92325e641b1e6549.svg?v=945',
        }}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
