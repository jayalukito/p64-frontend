const {
  withSettingsGradle,
  withAppBuildGradle,
  withMainApplication,
} = require("expo/config-plugins");

const ONNX_PROJECT_NAME = ":onnxruntime-react-native";

function addOnnxToSettingsGradle(contents) {
  const includeLine = "include ':onnxruntime-react-native'";
  const projectLine =
    "project(':onnxruntime-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/onnxruntime-react-native/android')";

  let updated = contents;

  if (!updated.includes(includeLine)) {
    updated += `\n${includeLine}`;
  }

  if (!updated.includes(projectLine)) {
    updated += `\n${projectLine}`;
  }

  return updated;
}

function addOnnxToAppBuildGradle(contents) {
  const dependencyLine = "implementation project(':onnxruntime-react-native')";

  if (contents.includes(dependencyLine)) {
    return contents;
  }

  const dependenciesRegex = /dependencies\s*\{/;

  if (!dependenciesRegex.test(contents)) {
    throw new Error(
      "Could not find dependencies block in android/app/build.gradle"
    );
  }

  return contents.replace(
    dependenciesRegex,
    (match) => `${match}\n    ${dependencyLine}`
  );
}

function addOnnxToMainApplication(contents) {
  const importLine =
    "import ai.onnxruntime.reactnative.OnnxruntimePackage";

  let updated = contents;

  if (!updated.includes(importLine)) {
    updated = updated.replace(
      /import expo\.modules\.ApplicationLifecycleDispatcher/,
      `${importLine}\n\nimport expo.modules.ApplicationLifecycleDispatcher`
    );
  }

  if (updated.includes("add(OnnxruntimePackage())")) {
    return updated;
  }

  updated = updated.replace(
    /PackageList\(this\)\.packages\.apply\s*\{/,
    (match) => `${match}\n          add(OnnxruntimePackage())`
  );

  return updated;
}

const withOnnxRuntimeManualLink = (config) => {
  config = withSettingsGradle(config, (config) => {
    config.modResults.contents = addOnnxToSettingsGradle(
      config.modResults.contents
    );

    return config;
  });

  config = withAppBuildGradle(config, (config) => {
    config.modResults.contents = addOnnxToAppBuildGradle(
      config.modResults.contents
    );

    return config;
  });

  config = withMainApplication(config, (config) => {
    config.modResults.contents = addOnnxToMainApplication(
      config.modResults.contents
    );

    return config;
  });

  return config;
};

module.exports = withOnnxRuntimeManualLink;