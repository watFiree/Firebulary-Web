const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATION_KEY || '';

const uri = `https://translation.googleapis.com/language/translate/v2/languages?key=${apiKey}&target=Aa`;

const getLanguages = async () => {
  const response = await fetch(uri);
  const data = await response.json();
  console.log(data);
  return data.data.languages;
};

export default getLanguages;
