import { useNavigation } from '@react-navigation/native'
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'

export const Header = ({
  buttonLeft,
  buttonRight,
  onClickBackButton,
  title,
  titleImage,
  onTitlePress,
  titleStyle,
  onlyTitle = false,
  wrapInSafeArea = true,
  backgroundColor = null,
  containerStyle,
}: {
  buttonLeft?: any
  buttonRight?: any
  onClickBackButton?: () => void
  title: string
  titleImage?: number
  onTitlePress?: () => void
  titleStyle?: any
  onlyTitle?: boolean
  wrapInSafeArea?: boolean
  backgroundColor?: string | null
  containerStyle?: ViewStyle
}) => {
  const navigation = useNavigation()
  const onPressBack = () => {
    if (onClickBackButton) {
      onClickBackButton()
    } else {
      navigation.goBack()
    }
  }
  return (
    <View>
      {wrapInSafeArea && (
        <SafeAreaView></SafeAreaView>
      )}
      <View
        style={[
          styles.container,
          containerStyle,
        ]}
      >
        <View style={styles.buttonLeft}>
          {buttonLeft ? (
            buttonLeft
          ) : !onlyTitle ? (
            <TouchableOpacity
              onPress={onPressBack}
              hitSlop={{
                top: 10,
                left: 15,
                bottom: 10,
                right: 30,
              }}
            >
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.buttonRight}>
          {buttonRight ? buttonRight : <Text>{'  '}</Text>}
        </View>
      </View>
    </View>
  )
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  titleImg: {
    height: 30,
    width: 60,
    resizeMode: 'contain',
  },
  iconBack: {
    width: 16,
    height: 15,
  },
  container: {
    width,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonLeft: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerView: {
    flexGrow: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
  },
  buttonRight: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
