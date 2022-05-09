import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#43a047"
    },

    containerDetails: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#43a047",
    },

    containerBoxes: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    text: {
        marginBottom: 10,
        fontSize: 40,
    },

    textDetails: {
        marginTop: 20
    },

    box: {
        width:80,
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'stretch',
        borderWidth: 1,
        backgroundColor: '#4dd0e1',
        margin: 10,
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },

    footer: {
        justifyContent: 'space-evenly',
        flex: 0,
        backgroundColor: "#00701a",
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        width: 400,
        height: 50,
      },
})