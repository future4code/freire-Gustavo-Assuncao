import React from "react";
import labelogo from "../../assets/labelogo.png"
import { ScreenContainer , LogoImage } from "./SignUpStyles"
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {

    return (
        <ScreenContainer>
            <LogoImage src={labelogo} />
            <SignUpForm />
        </ScreenContainer>
    )
}

export default SignUpPage; 