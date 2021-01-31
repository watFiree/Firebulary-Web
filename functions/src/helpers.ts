import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
import { DetectLanguageResponse, TranslateWordInput, TranslateWordResponse } from './types';
const apiKey = functions.config().translation.key;

export const detectLanguage = async (text: string) => {
  const uri = `https://translation.googleapis.com/language/translate/v2/detect?key=${apiKey}`;

  const body = JSON.stringify({ q: text });
  try {
    const response = await fetch(uri, { method: 'POST', body });
    const { data } = (await response.json()) as DetectLanguageResponse;
    return data.detections[0][0].language;
  } catch {
    return new functions.https.HttpsError('unavailable', 'Failed while detecting language !');
  }
};

export const translateWord = async ({ word, source, target }: TranslateWordInput) => {
  const uri = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const body = JSON.stringify({
    q: word,
    source,
    target,
    format: 'text',
  });
  try {
    const response = await fetch(uri, { method: 'POST', body });
    const { data } = (await response.json()) as TranslateWordResponse;
    return data.translations[0].translatedText;
  } catch {
    return new functions.https.HttpsError('unavailable', 'Failed while translating !');
  }
};
