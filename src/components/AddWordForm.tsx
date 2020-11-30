import React from 'react';
import { Formik, Form } from 'formik';
import addWordToDictionary from 'utils/addWordToDictionary';
import * as yup from 'yup';

import TextInput from './TextInput';
import CheckBox from './CheckBox';
import SelectLanguageField from './SelectLanguageField';
import SwapSelectsButton from './SwapSelectsButton';
import ErrorMessage from './ErrorMessage';
import Button from './Button';

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
        <Form className="flex flex-col items-center w-full md:w-3/5 h-80 justify-around">
          <TextInput name="word" placeholder="Word" />
          {values.autoTranslate ? null : <TextInput name="translation" placeholder="Translation" />}
          <CheckBox name="autoTranslate" placeholder="Auto translate" />

          {values.autoTranslate ? (
            <div className="flex w-full h-1/3 items-center justify-center">
              <SelectLanguageField name="translateFrom" />
              <SwapSelectsButton firstVariable="translateFrom" secondVariable="translateTo" />
              <SelectLanguageField name="translateTo" />
            </div>
          ) : null}
          <ErrorMessage name="word" />
          <Button type="submit">Add</Button>
        </Form>
      )}
    </Formik>
  </>
);

export default AddWordForm;
