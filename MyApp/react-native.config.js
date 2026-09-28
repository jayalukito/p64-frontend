module.exports = {
  dependencies: {
    "onnxruntime-react-native": {
      platforms: {
        android: {
          sourceDir: "./node_modules/onnxruntime-react-native/android",
          packageImportPath:
            "import ai.onnxruntime.reactnative.OnnxruntimePackage;",
          packageInstance: "new OnnxruntimePackage()",
        },
      },
    },
  },
};