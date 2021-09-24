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
      <View style={styles.View_59_52}>
        <Text style={styles.Text_59_52}>
          가장 많은 선택을 받은 베스트 TOP8 고양님은?!
        </Text>
      </View>
      <View style={styles.View_59_53} />
      <View style={styles.View_59_54} />
      <View style={styles.View_59_55} />
      <View style={styles.View_59_56} />
      <View style={styles.View_59_57}>
        <Text style={styles.Text_59_57}>쫜쫘라-✨</Text>
      </View>
      <View style={styles.View_59_58}>
        <Text style={styles.Text_59_58}> 000 고양님 소속: 00대학교</Text>
      </View>
      <View style={styles.View_59_59}>
        <Text style={styles.Text_59_59}> 000 고양님 소속: 00대학교</Text>
      </View>
      <View style={styles.View_59_60}>
        <Text style={styles.Text_59_60}> 000 고양님 소속: 00대학교</Text>
      </View>
      <View style={styles.View_59_61}>
        <Text style={styles.Text_59_61}> 000 고양님 소속: 00대학교</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64cf/a6cf/140ed705b4616305e1d4034592463676"
        }}
        style={styles.ImageBackground_59_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b21/8284/b5e9b491790d0b920074f49637e9ef5c"
        }}
        style={styles.ImageBackground_59_63}
      />
      <View style={styles.View_59_64}>
        <Text style={styles.Text_59_64}>고양백과 보러가기</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_59_52: {
    width: wp("77.86666666666666%"),
    minWidth: wp("77.86666666666666%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("9.562841530054644%"),
    justifyContent: "flex-start"
  },
  Text_59_52: {
    color: "rgba(255, 179, 109, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_53: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("34.15300546448087%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_54: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%"),
    top: hp("34.15300546448087%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_55: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("61.612021857923494%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_56: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%"),
    top: hp("61.612021857923494%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_57: {
    width: wp("132.53333333333333%"),
    minWidth: wp("132.53333333333333%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16.266666666666666%"),
    top: hp("21.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_59_57: {
    color: "rgba(255, 201, 10, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_58: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.933333333333333%"),
    top: hp("53.551912568306015%"),
    justifyContent: "flex-start"
  },
  Text_59_58: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_59: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("53.551912568306015%"),
    justifyContent: "flex-start"
  },
  Text_59_59: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_60: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("81.01092896174863%"),
    justifyContent: "flex-start"
  },
  Text_59_60: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_61: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.933333333333333%"),
    top: hp("81.01092896174863%"),
    justifyContent: "flex-start"
  },
  Text_59_61: {
    color: "rgba(31, 31, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_62: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("16.120218579234972%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: hp("63.387978142076506%"),
    resizeMode: "cover"
  },
  ImageBackground_59_63: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    top: hp("99.59016393442623%"),
    resizeMode: "cover"
  },
  View_59_64: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("102.59562841530054%"),
    justifyContent: "flex-start"
  },
  Text_59_64: {
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
