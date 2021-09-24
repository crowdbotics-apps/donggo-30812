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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dff/b925/63c1ad100cc79709d5e85e42c093cacc"
        }}
        style={styles.ImageBackground_59_38}
      />
      <View style={styles.View_59_39}>
        <Text style={styles.Text_59_39}>두구두굳구두국두구...</Text>
      </View>
      <View style={styles.View_59_40} />
      <View style={styles.View_59_41}>
        <Text style={styles.Text_59_41}>
          &lt;&lt;한줄냥냥&gt;&gt; 느그들 냐옹님 쪼코 먹이면 클난다!!!
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_59_38: {
    width: wp("50.4%"),
    minWidth: wp("50.4%"),
    height: hp("25.81967213114754%"),
    minHeight: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("39.07103825136612%"),
    resizeMode: "cover"
  },
  View_59_39: {
    width: wp("70.39999999999999%"),
    minWidth: wp("70.39999999999999%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("68.44262295081968%"),
    justifyContent: "flex-start"
  },
  Text_59_39: {
    color: "rgba(100, 54, 11, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_40: {
    width: wp("86.93333333333332%"),
    minWidth: wp("86.93333333333332%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("99.4535519125683%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.6499999761581421,
    borderColor: "rgba(255, 215, 112, 1)",
    borderWidth: 3
  },
  View_59_41: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("100%"),
    justifyContent: "flex-start"
  },
  Text_59_41: {
    color: "rgba(68, 65, 57, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
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
