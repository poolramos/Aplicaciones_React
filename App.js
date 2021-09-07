import React, { useState } from "react";

import { AddItem } from "./components/AddItem";
import { Header } from "./components/Header";
import { List } from "./components/List/List";
import { ModalItem } from "./components/ModalItem";
import { View } from "react-native";
@@ -18,7 +19,7 @@ export default function App() {
  const handleAddItem = () => {
    if (text) {
      if (lst.find((item) => item.value === text)) {
        setInputError("Ya existe el ítem ingresado.");
        setInputError("Task already added.");
        return;
      }
      setList([
@@ -30,7 +31,7 @@ export default function App() {
      ]);
      setText("");
      setInputError("");
    } else setInputError("Requerido");
    } else setInputError("Required");
  };

  const handleModalOpen = (id) => {
@@ -48,12 +49,19 @@ export default function App() {
    setModalVisible(false);
  };

  const handleClean = () => {
    setText("");
    setInputError("");
  };

  return (
    <View style={gStyles.container}>
      <Header title="To Do List" />
      <AddItem
        text={text}
        handleChangeText={handleChangeText}
        handleAddItem={handleAddItem}
        handleClean={handleClean}
        inputError={inputError}
      />
      <List lst={lst} handleModalOpen={handleModalOpen} />