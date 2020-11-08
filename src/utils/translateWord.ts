import { TranslateWordResponse } from 'utils/types';

const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATION_KEY || '';

const uri = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

const translateWord = async (word: string, source: string, target: string) => {
  const body = {
    q: word,
    source,
    target,
    format: 'text',
  };

  const response = await fetch(uri, { method: 'POST', body: JSON.stringify(body) });
  const data: TranslateWordResponse = await response.json();
  return data.data.translations[0].translatedText;
};

export default translateWord;
