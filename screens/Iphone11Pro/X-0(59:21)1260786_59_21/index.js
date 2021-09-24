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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a51/5444/5442181070142a806214006f57c2845b"
        }}
        style={styles.ImageBackground_59_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6ee/3f94/31814308997451d4c39fc31c3cbdaad0"
        }}
        style={styles.ImageBackground_59_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf08/a9f0/a8433de9d5ff30ecf92dfb4e06f42373"
        }}
        style={styles.ImageBackground_59_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6439/f10b/8d1cf081ed9f4f57ce9a65141bfb160b"
        }}
        style={styles.ImageBackground_59_25}
      />
      <View style={styles.View_59_26} />
      <View style={styles.View_59_27}>
        <Text style={styles.Text_59_27}>동해와 고양이 LOGO</Text>
      </View>
      <View style={styles.View_59_28} />
      <View style={styles.View_59_29}>
        <Text style={styles.Text_59_29}>START</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_59_22: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("52.18579234972678%"),
    resizeMode: "cover"
  },
  ImageBackground_59_23: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("20.62841530054645%"),
    resizeMode: "cover"
  },
  ImageBackground_59_24: {
    width: wp("67.96706949869792%"),
    minWidth: wp("67.96706949869792%"),
    height: hp("27.641594475084315%"),
    minHeight: hp("27.641594475084315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.06666666666666%"),
    top: hp("47.540983606557376%"),
    resizeMode: "cover"
  },
  ImageBackground_59_25: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("52.86885245901639%"),
    resizeMode: "cover"
  },
  View_59_26: {
    width: wp("68.8%"),
    minWidth: wp("68.8%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333333%"),
    top: hp("39.75409836065574%"),
    backgroundColor: "rgba(255, 201, 10, 1)"
  },
  View_59_27: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.466666666666665%"),
    top: hp("41.939890710382514%"),
    justifyContent: "flex-start"
  },
  Text_59_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_28: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%"),
    top: hp("60.38251366120219%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(255, 179, 109, 1)",
    borderWidth: 1
  },
  View_59_29: {
    width: wp("53.06666666666666%"),
    minWidth: wp("53.06666666666666%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.13333333333333%"),
    top: hp("59.42622950819673%"),
    justifyContent: "flex-start"
  },
  Text_59_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "400",
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
