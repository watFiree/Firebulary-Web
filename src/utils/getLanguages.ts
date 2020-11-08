const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATION_KEY || '';

const uri = `https://translation.googleapis.com/language/translate/v2/languages?key=${apiKey}&target=Aa`;

const getLanguages = async (): Promise<{ language: string; name: string }[]> => {
  const response = await fetch(uri);
  const data = await response.json();
  return data.data.languages;
};

export default getLanguages;
