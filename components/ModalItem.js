import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import COLORS from "../constants/colors";
import { Card } from "../screens/Card";
import React from "react";
import { gStyles } from "../css/gStyles";

@@ -11,57 +13,51 @@ export const ModalItem = ({
}) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, gStyles.shadow]}>
          <Text style={styles.modalMessage}>¿Estás seguro de eliminar?</Text>
      <Card style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalMessage}>Delete task?</Text>
          <Text style={styles.modalTitle}>{itemSelected.value}</Text>
          <View style={gStyles.inputContainer}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={handleModalClose}>
              <View style={[gStyles.button, { backgroundColor: "#ddd" }]}>
                <Text>Cancelar</Text>
              <View
                style={[gStyles.button, { backgroundColor: COLORS.secondary }]}
              >
                <Text>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleConfirmDelete}>
              <View style={[gStyles.button, { marginLeft: 1 }]}>
                <Text>Confirmar</Text>
              <View
                style={[gStyles.button, { backgroundColor: COLORS.success }]}
              >
                <Text>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:80,
  },
  modalContent: {
    padding: 30,
    backgroundColor: "white",
    alignSelf: "center",
    padding: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalMessage: {
    fontSize: 13,
    fontSize: 15,
    color: COLORS.white,
  },
  modalTitle: {
    fontSize: 15,
    color: COLORS.white,
    fontSize: 17,
    marginTop: 10,
    marginBottom: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});