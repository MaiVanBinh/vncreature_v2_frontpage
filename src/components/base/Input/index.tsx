import React from "react";
import styled from "styled-components";
import { Caption } from "../baseComponent";

type StyleProps = {
  isError?: boolean,
  disabled?: boolean
}
const Container = styled('div')<StyleProps>`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border: 1px solid
    ${(props) =>
      props.isError
        ? props.theme.SEMANTIC.NEGATIVE
        : props.theme.NEUTRAL.LIGHTER_BORDER};
  border-radius: 8px;
  padding: 8px 16px;
  padding-right: 48px;
  background-color: ${(props) =>
    props.disabled ? props.theme.NEUTRAL.LIGHTEST_BG : props.theme.OTHER.WHITE};

  .input-section {
    display: flex;
    flex: 1;
    flex-direction: column-reverse;
    justify-content: space-around;
  }

  label,
  input {
    transition: all 0.2s;
    touch-action: manipulation;
  }

  input {
    width: 100%;
    border: 0;
    padding: 0;
    margin-top: 2px;
    background-color: unset;
    font-size: 16px;
    line-height: 16px;
    color: ${(props) =>
      props.disabled
        ? props.theme.NEUTRAL.LIGHT_DISABLE
        : props.theme.NEUTRAL.DARKNESS};
  }

  input:disabled {
    // Fixed cannot set color & opacity too low
    // when input is disabled in safari
    opacity: 1;
    -webkit-text-fill-color: ${(props) => props.theme.NEUTRAL.LIGHT_DISABLE};
  }

  input:focus {
    outline: 0;
  }

  input:placeholder-shown ~ label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 0.8rem) scale(1.33);
  }

  input::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  input:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  input:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }

  .error-section {
    position: absolute;
    right: 16px;
  }
`;

/**
 * Must provide `id` in order for `caption` to work properly
 * Otherwise, it may cause some breaking in function
 */
const Input = ({
  id,
  label = "",
  placeholder = " ",
  value,
  onInput,
  isError,
  onChange,
  onFocus,
  onBlur,
  inputProps = {},
  className = "",
  disabled = false,
}: any) => (
  <Container
    className={`input-container ${className}`}
    isError={isError}
    disabled={disabled}
  >
    <div className="input-section">
      <input
        {...inputProps}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        disabled={disabled}
      />

      <Caption
        as="label"
        className={isError ? "color--negative" : "color--medium-sub"}
        htmlFor={id}
      >
        {label || placeholder}
      </Caption>
    </div>

    {isError && (
      <div className="error-section material-icons-wrapper md-24">
        <i className="material-icons-outlined color--negative">error_outline</i>
      </div>
    )}
  </Container>
);

export default Input;