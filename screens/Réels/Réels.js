import React, { useState } from "react";
import { KeyboardAvoidingView, Dimensions } from "react-native";
import VideoRéels from "../../components/Réels/VideoRéels";

const Réels = () => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
    >
      <VideoRéels />
    </KeyboardAvoidingView>
  );
};

export default Réels;
