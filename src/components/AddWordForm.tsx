import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import addWordToDictionary from 'utils/addWordToDictionary';
import * as yup from 'yup';
import languages from 'utils/languages';

const AddWordForm: React.FC<{ uid: string }> = ({ uid }) => (
  <>
    <Formik
      initialValues={{
        word: '',
        translation: '',
        autoTranslate: false,
        translateFrom: localStorage.getItem('translateFrom') || 'en',
        translateTo: localStorage.getItem('translateTo') || 'pl',
      }}
      validationSchema={yup.object().shape({
        word: yup.string().required('Word is required'),
        translation: yup.string(),
        autoTranslate: yup.boolean(),
        translateFrom: yup.string(),
        translateTo: yup.string(),
      })}
      onSubmit={async (values, { resetForm }) => {
        await addWordToDictionary(uid, values);
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col">
          <Field name="word" placeholder="Word" />
          {values.autoTranslate ? null : <Field name="translation" placeholder="Translation" />}
          <Field type="checkbox" name="autoTranslate" placeholder="Translate automatically" />
          {values.autoTranslate ? (
            <div className="flex mt-10">
              <p>translate</p>
              <Field
                as="select"
                name="translateFrom"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setFieldValue('translateFrom', e.target.value);
                  localStorage.setItem('translateFrom', e.target.value);
                }}
                placeholder="from"
              >
                {languages.map(language => (
                  <option value={language.language} key={language.language}>
                    {language.name}
                  </option>
                ))}
              </Field>
              <p>to</p>
              <Field
                as="select"
                name="translateTo"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setFieldValue('translateTo', e.target.value);
                  localStorage.setItem('translateTo', e.target.value);
                }}
                placeholder="to"
              >
                {languages.map(language => (
                  <option value={language.language} key={language.language}>
                    {language.name}
                  </option>
                ))}
              </Field>
            </div>
          ) : null}
          <ErrorMessage name="word" />
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  </>
);

export default AddWordForm;
