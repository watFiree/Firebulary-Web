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
