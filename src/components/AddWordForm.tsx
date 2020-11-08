import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import addWordToDictionary from 'utils/addWordToDictionary';
import * as yup from 'yup';

import SelectLanguageField from 'components/SelectLanguageField';
import SwapSelectsButton from 'components/SwapSelectsButton';

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
      {({ values }) => (
        <Form className="flex flex-col">
          <Field name="word" placeholder="Word" />
          {values.autoTranslate ? null : <Field name="translation" placeholder="Translation" />}
          <Field type="checkbox" name="autoTranslate" placeholder="Translate automatically" />
          {values.autoTranslate ? (
            <div className="flex mt-10">
              <SwapSelectsButton
                label="Swap"
                firstVariable="translateFrom"
                secondVariable="translateTo"
              />
              <p>translate</p>
              <SelectLanguageField name="translateFrom" />
              <p>to</p>
              <SelectLanguageField name="translateTo" />
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
