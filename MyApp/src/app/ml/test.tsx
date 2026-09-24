import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { predictSms } from "@/ml/smishingModel";

type PredictionResult = {
  label: "normal" | "promo" | "smish";
  cleanedText: string;
  dangerScore: number;
  confidence: number;
  probabilities: {
    normal: number;
    promo: number;
    smish: number;
  };
};

export default function MlTestScreen() {
  const [sms, setSms] = useState(
    "আপনার অ্যাকাউন্ট যাচাই করুন: http://example.com/verify"
  );

  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleCheckSms() {
    try {
      setLoading(true);
      setErrorMessage("");
      setResult(null);

      const prediction = await predictSms(sms);
      setResult(prediction);
    } catch (error) {
      console.error("ML prediction error:", error);

      setErrorMessage(
        error instanceof Error ? error.message : "Unknown prediction error"
      );
    } finally {
      setLoading(false);
    }
  }

  function getRiskLevel(score: number) {
    if (score < 20) return "Safe";
    if (score < 50) return "Low Risk";
    if (score < 75) return "Suspicious";
    if (score < 90) return "Dangerous";
    return "Very Dangerous";
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bangla SMS ML Test</Text>

      <Text style={styles.description}>
        Enter a Bangla SMS below and run the on-device ONNX model.
      </Text>

      <Text style={styles.label}>SMS Text</Text>

      <TextInput
        value={sms}
        onChangeText={setSms}
        multiline
        textAlignVertical="top"
        placeholder="Enter Bangla SMS here..."
        placeholderTextColor="#64748b"
        style={styles.input}
      />

      <Pressable
        onPress={handleCheckSms}
        disabled={loading || sms.trim().length === 0}
        style={[
          styles.button,
          (loading || sms.trim().length === 0) && styles.buttonDisabled,
        ]}
      >
        <Text style={styles.buttonText}>
          {loading ? "Checking..." : "Check SMS"}
        </Text>
      </Pressable>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Running model...</Text>
        </View>
      )}

      {errorMessage.length > 0 && (
        <View style={styles.errorBox}>
          <Text style={styles.errorTitle}>Prediction Error</Text>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}

      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>Prediction Result</Text>

          <ResultRow label="Label" value={result.label} />
          <ResultRow label="Danger Score" value={`${result.dangerScore}/100`} />
          <ResultRow label="Risk Level" value={getRiskLevel(result.dangerScore)} />
          <ResultRow
            label="Confidence"
            value={`${(result.confidence * 100).toFixed(2)}%`}
          />

          <Text style={styles.sectionTitle}>Probabilities</Text>

          <ResultRow
            label="Normal"
            value={`${(result.probabilities.normal * 100).toFixed(2)}%`}
          />

          <ResultRow
            label="Promo"
            value={`${(result.probabilities.promo * 100).toFixed(2)}%`}
          />

          <ResultRow
            label="Smish"
            value={`${(result.probabilities.smish * 100).toFixed(2)}%`}
          />

          <Text style={styles.sectionTitle}>Cleaned Text</Text>
          <Text style={styles.cleanedText}>{result.cleanedText}</Text>
        </View>
      )}
    </ScrollView>
  );
}

function ResultRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#020817",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#cbd5e1",
    marginBottom: 24,
    lineHeight: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 8,
  },
  input: {
    minHeight: 130,
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#ffffff",
    backgroundColor: "#0f172a",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  loadingContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: "#cbd5e1",
  },
  errorBox: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#7f1d1d",
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 8,
  },
  errorText: {
    fontSize: 14,
    color: "#fecaca",
  },
  resultBox: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#0f172a",
    borderWidth: 1,
    borderColor: "#334155",
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    marginTop: 16,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 10,
  },
  rowLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#cbd5e1",
  },
  rowValue: {
    fontSize: 15,
    color: "#ffffff",
    textAlign: "right",
    flexShrink: 1,
  },
  cleanedText: {
    fontSize: 14,
    color: "#cbd5e1",
    lineHeight: 20,
  },
});