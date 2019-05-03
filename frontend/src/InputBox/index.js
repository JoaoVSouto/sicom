import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import commonStyles from "../commonStyles";

const items = [
  {
    name: "Remédios",
    id: 0,
    children: [
      {
        name: "BENEGRIP MULTI",
        id: 10
      },
      {
        name: "ETILEFRIL",
        id: 17
      },
      {
        name: "BIOGRIPE",
        id: 13
      },
      {
        name: "NASOFELIN",
        id: 14
      },
      {
        name: "PYRISEPT",
        id: 15
      },
      {
        name: "COLIRIO FENILEFRINA 10% OCULUM",
        id: 16
      },
      {
        name: "ZILEDON",
        id: 20
      },
      {
        name: "PSIQUIAL",
        id: 18
      },
      {
        name: "CLORIDRATO DE LERCANIDIPINO",
        id: 19
      },
      {
        name: "DIASEC",
        id: 21
      },
      {
        name: "CLORIDRATO DE METFORMINA +GLIBENCAMIDA",
        id: 22
      },
      {
        name: "CLORIDRATO DE METOCLOPRAMIDA",
        id: 23
      },
      {
        name: "VIGAMOX",
        id: 24
      },
      {
        name: "CLORIDRATO DE OXIBUTININA",
        id: 25
      }
    ]
  }
];

export default class InputBox extends Component {
  state = {
    item: null
  };

  onSelectedItemsChange = selectedItems => {
    const item = items[0].children.find(elem => elem.id === selectedItems[0]);
    this.setState({ item: item.name });
  };

  checkItemLength = item => {
    let itemCropped = "";
    if (item.length > 31) {
      itemCropped = item.substr(0, 29).concat("...");
    }
    return itemCropped || item;
  };

  render() {
    return (
      <View style={styles.container}>
        <Icon name="bars" size={20} style={{ marginLeft: 15 }} />
        <View
          style={styles.inputContainer}
          onTouchEnd={() => this.SectionedMultiSelect._toggleSelector()}
        >
          <Text
            style={
              !this.state.item
                ? { ...styles.input, color: "#AAA" }
                : { ...styles.input }
            }
          >
            {this.state.item
              ? this.checkItemLength(this.state.item)
              : "Pesquise seu remédio"}
          </Text>
        </View>
        <SectionedMultiSelect
          items={items}
          uniqueKey="id"
          subKey="children"
          single={true}
          showDropDowns={false}
          showCancelButton={true}
          searchPlaceholderText="Pesquise seu remédio"
          confirmText="Confirmar"
          noResultsComponent={
            <Text style={styles.noResults}>
              Desculpe, não há remédios com esse nome.
            </Text>
          }
          readOnlyHeadings={true}
          ref={SectionedMultiSelect =>
            (this.SectionedMultiSelect = SectionedMultiSelect)
          }
          onSelectedItemsChange={this.onSelectedItemsChange}
          colors={{
            cancel: commonStyles.secondaryColor,
            selectToggleTextColor: "#FFF"
          }}
          styles={{
            subSeparator: {
              borderBottomWidth: 0.3,
              width: "50%",
              marginLeft: 9
            },
            button: {
              backgroundColor: commonStyles.mainColor
            },
            selectToggle: {
              backgroundColor: commonStyles.mainColor,
              height: "100%",
              width: 30,
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
              paddingRight: 5
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: Dimensions.get("window").width / 1.05,
    height: 65,
    marginTop: 8,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: commonStyles.mainColor,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    marginLeft: 15,
    backgroundColor: "transparent",
    height: "100%"
  },
  input: {
    marginRight: 15
  },
  noResults: {
    textAlign: "center",
    marginTop: 8
  }
});
