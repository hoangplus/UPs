import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

type IconProps = {
  styleContainer?: ViewStyle
  styleIcon?: ImageStyle
  onPress?: () => void
  icon: ImageSourcePropType | undefined
  useTheme?: boolean
}

export const Icon = (props: IconProps) => {
  const {
    icon,
    onPress = undefined,
    styleIcon,
    styleContainer,
    useTheme = true,
  } = props
  return (
    <View style={[styles.container, styleContainer]}>
      <TouchableOpacity disabled={!onPress} onPress={onPress}>
        <Image
          source={icon}
          style={[
            styles.icon,
            styleIcon,
          ]}
        ></Image>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  btn: {
    height: 80,
    width: 300,
    borderRadius: 5,
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  title: {
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})
