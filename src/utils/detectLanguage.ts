import { DetectLanguageResponse } from 'utils/types';

const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATION_KEY || '';

const uri = `https://translation.googleapis.com/language/translate/v2/detect?key=${apiKey}`;

const detectLanguage = async (text: string) => {
  const body = JSON.stringify({ q: text });
  const response = await fetch(uri, { method: 'POST', body });
  const data: DetectLanguageResponse = await response.json();
  return data.data.detections[0][0].language;
};

export default detectLanguage;
