import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import "../../../style/inputField.css";
import { Controller } from "react-hook-form";
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
  placeHolder: PropTypes.string,
  className: PropTypes.string,
};

function PasswordField(props) {
  const { form, name, label, disable, placeHolder, className } = props;
  const { errors, formState } = form;
  const hasError = formState.touched[name] && errors[name]
  return (
    <>
      <Controller
        control={form.control}
        name={name}
        as={Input.Password}
        label={label}
        className={!hasError ? className : 'input-field-error'}
        disable={disable}
        placeholder={placeHolder}
      />
      {!!hasError && (
         <p style={{color: 'red'}}>{errors[name].message}</p>
      )}
    </>
  );
}

export default PasswordField;
