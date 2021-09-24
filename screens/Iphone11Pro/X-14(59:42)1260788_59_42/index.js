import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_59_43}>
        <Text style={styles.Text_59_43}>
          가장 많은 선택을 받은 베스트 TOP 1 고양님은?!
        </Text>
      </View>
      <View style={styles.View_59_44} />
      <View style={styles.View_59_45}>
        <Text style={styles.Text_59_45}>쫜쫘라-✨</Text>
      </View>
      <View style={styles.View_59_46}>
        <Text style={styles.Text_59_46}>00대학교 000 고양님</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f637/7697/4bb395fa7ee62f58d13b092df3968a78"
        }}
        style={styles.ImageBackground_59_47}
      />
      <View style={styles.View_59_48}>
        <Text style={styles.Text_59_48}>👑</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b21/8284/b5e9b491790d0b920074f49637e9ef5c"
        }}
        style={styles.ImageBackground_59_49}
      />
      <View style={styles.View_59_50}>
        <Text style={styles.Text_59_50}>고양백과 보러가기</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_59_43: {
    width: wp("76.53333333333333%"),
    minWidth: wp("76.53333333333333%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666667%"),
    top: hp("9.562841530054644%"),
    justifyContent: "flex-start"
  },
  Text_59_43: {
    color: "rgba(255, 179, 109, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_44: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("38.9344262295082%"),
    minHeight: hp("38.9344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("36.6120218579235%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_45: {
    width: wp("132.53333333333333%"),
    minWidth: wp("132.53333333333333%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.733333333333333%"),
    top: hp("19.398907103825135%"),
    justifyContent: "flex-start"
  },
  Text_59_45: {
    color: "rgba(255, 201, 10, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_46: {
    width: wp("80.26666666666667%"),
    minWidth: wp("80.26666666666667%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("78.68852459016394%"),
    justifyContent: "flex-start"
  },
  Text_59_46: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_47: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("39.61748633879781%"),
    resizeMode: "cover"
  },
  View_59_48: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("27.049180327868854%"),
    justifyContent: "flex-start"
  },
  Text_59_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_49: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("99.59016393442623%"),
    resizeMode: "cover"
  },
  View_59_50: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("102.73224043715847%"),
    justifyContent: "flex-start"
  },
  Text_59_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
