import React from "react";
import {
  SigninContainer,
  FormWrap,
  FormIcon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormText,
} from "./SigninElements";

const Signin = () => {
  return (
    <>
      <SigninContainer>
        <FormWrap>
          <FormIcon to="/">dolla</FormIcon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlfor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlfor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <FormText>Forgot password</FormText>
            </Form>
          </FormContent>
        </FormWrap>
      </SigninContainer>
    </>
  );
};

export default Signin;
