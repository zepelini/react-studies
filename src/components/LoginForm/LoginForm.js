import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// The form component
class LoginForm extends Component {

  // Validate fields
  validateFields(){

    // Create an YOP object for validation
    return Yup.object({

      // Validate login
      login: Yup.string()
      .required('Required'),

      // Validate password
      password: Yup.string()
      .required('Required')
    });
  }

  // Handles submission
  submitForm(values, {setSubmitting}){
    console.log(values);  
    setSubmitting(false);
  }

  // Renders stuff
  render(){
    return (
      <Formik
        initialValues={{ login: '', password: '' }}
        validationSchema={this.validateFields}
        onSubmit={this.submitForm}
      >
        {({ isSubmitting }) => (
          <Form className='form grid-start-2 grid-span-5 grid-align-self-center flex flex-column flex-align-start'>
            <label className='form-element-container flex flex-column flex-align-start'>
              <span className='form-element-label font-16 font-300'>Login</span>
              <Field className='form-element' type="text" name="login" />
              <ErrorMessage className='form-element-error font-16 font-300' name="login" component="span" />
            </label>
            <label className='form-element-container flex flex-column flex-align-start'>
              <span className='form-element-label font-16 font-300'>Password</span>
              <Field className='form-element' type="password" name="password" />
              <ErrorMessage className='form-element-error font-16 font-300' name="password" component="span" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default LoginForm;
