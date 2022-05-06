import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    text: {
        marginBottom: 10,
    },

    box: {
        width:80,
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'stretch',
        borderWidth: 1,
        backgroundColor: 'lightgray',
        margin: 10,
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold",
    },
})