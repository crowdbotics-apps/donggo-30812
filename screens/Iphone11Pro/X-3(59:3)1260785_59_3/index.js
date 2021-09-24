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
      <View style={styles.View_59_4} />
      <View style={styles.View_59_5} />
      <View style={styles.View_59_6} />
      <View style={styles.View_59_7} />
      <View style={styles.View_59_8} />
      <View style={styles.View_59_9} />
      <View style={styles.View_59_10}>
        <Text style={styles.Text_59_10}>16강 냐옹</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e99/34f0/0c45bc4fdd62ab3eb4e337d97ad281e9"
        }}
        style={styles.ImageBackground_59_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cd0/69f1/c2d3454d2344403d55e24cd71e831908"
        }}
        style={styles.ImageBackground_59_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c1/6428/15e0df26a5474822744b3731878df4cb"
        }}
        style={styles.ImageBackground_59_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0dc/b737/301012f33e6bf2e821b4fdcace2b6f89"
        }}
        style={styles.ImageBackground_59_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13a1/ba44/62d1acb56c39b0470ab1ded3a4402efa"
        }}
        style={styles.ImageBackground_59_15}
      />
      <View style={styles.View_59_16}>
        <Text style={styles.Text_59_16}>
          당신의 원픽! 냐옹님에게 투표하세요!
        </Text>
      </View>
      <View style={styles.View_59_17}>
        <Text style={styles.Text_59_17}>13: 00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58e1/4c89/38606a3b58df97a765bc617030dabcd4"
        }}
        style={styles.ImageBackground_59_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58e1/4c89/38606a3b58df97a765bc617030dabcd4"
        }}
        style={styles.ImageBackground_59_19}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_59_4: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("59.83606557377049%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_5: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    top: hp("59.83606557377049%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_6: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("34.01639344262295%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_7: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.400000000000006%"),
    top: hp("34.01639344262295%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_8: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("80.05464480874316%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_9: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    top: hp("80.05464480874316%"),
    backgroundColor: "rgba(255, 215, 112, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2
  },
  View_59_10: {
    width: wp("66.66666666666666%"),
    minWidth: wp("66.66666666666666%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("3.278688524590164%"),
    justifyContent: "flex-start"
  },
  Text_59_10: {
    color: "rgba(255, 201, 10, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_11: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("36.47540983606557%"),
    resizeMode: "cover"
  },
  ImageBackground_59_12: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    top: hp("37.15846994535519%"),
    resizeMode: "cover"
  },
  ImageBackground_59_13: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("63.114754098360656%"),
    resizeMode: "cover"
  },
  ImageBackground_59_14: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    top: hp("62.158469945355186%"),
    resizeMode: "cover"
  },
  ImageBackground_59_15: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("83.06010928961749%"),
    resizeMode: "cover"
  },
  View_59_16: {
    width: wp("92.80000000000001%"),
    minWidth: wp("92.80000000000001%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("11.885245901639344%"),
    justifyContent: "flex-start"
  },
  Text_59_16: {
    color: "rgba(255, 179, 109, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_17: {
    width: wp("66.66666666666666%"),
    minWidth: wp("66.66666666666666%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("21.994535519125684%"),
    justifyContent: "flex-start"
  },
  Text_59_17: {
    color: "rgba(255, 201, 10, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_59_18: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("52.18579234972678%")
  },
  ImageBackground_59_19: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("52.18579234972678%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
