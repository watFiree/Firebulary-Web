import React from 'react';
import { useFormikContext, Field } from 'formik';
import languages from 'utils/languages';

const SelectLanguageField: React.FC<{ name: string }> = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <Field
      as="select"
      name={name}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        setFieldValue(name, e.target.value);
        localStorage.setItem(name, e.target.value);
      }}
      placeholder="to"
      className="h-10 w-1/3 px-2 text-lg placeholder-gray-500::placeholder placeholder-opacity-75 border-solid border-1 border-gray-700 rounded-xl shadow"
    >
      {languages?.map(language => (
        <option value={language.language} key={language.language}>
          {language.name}
        </option>
      ))}
    </Field>
  );
};

export default React.memo(SelectLanguageField);
