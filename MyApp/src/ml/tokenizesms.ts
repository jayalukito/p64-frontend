import { Tokenizer } from "@huggingface/tokenizers";

import tokenizerJson from "../../assets/ml/final_model/tokenizer.json";
import tokenizerConfig from "../../assets/ml/final_model/tokenizer_config.json";
import { preprocessSms } from "./preprocess";

const MAX_LENGTH = 64;

let tokenizer: Tokenizer | null = null;

function getTokenizer() {
  if (!tokenizer) {
    tokenizer = new Tokenizer(tokenizerJson as any, tokenizerConfig as any);
  }

  return tokenizer;
}

export function tokenizeSms(text: string) {
  const cleanedText = preprocessSms(text);
  const currentTokenizer = getTokenizer();

  const encoded = currentTokenizer.encode(cleanedText);

  const inputIds = encoded.ids.slice(0, MAX_LENGTH);
  const attentionMask = encoded.attention_mask.slice(0, MAX_LENGTH);
  const tokenTypeIds = new Array(inputIds.length).fill(0);

  while (inputIds.length < MAX_LENGTH) {
    inputIds.push(0);
    attentionMask.push(0);
    tokenTypeIds.push(0);
  }

  return {
    cleanedText,
    inputIds,
    attentionMask,
    tokenTypeIds,
    tokens: encoded.tokens,
  };
}