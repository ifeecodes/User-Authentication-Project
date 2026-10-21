import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE,  } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken,),
      category: "Email Verification",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Mailtrap error";
    const status =
      typeof error === "object" && error !== null && "response" in error
        ? error.response?.status
        : undefined;
    console.error("Error sending verification email:", { status, message });
    throw new Error(`Error sending verification email: ${message}`);
  }
};
export const sendWelcomeEmail = async (email, name) => {
const recipient = [{email}];
try {
  const response = await mailtrapClient.send({
    from: sender,
    to: recipient,
    template_uuid: "1bda3e91-c361-488c-9571-9e36abbbd8b0",
    template_variables: {
      "company_info_name": "IFEE Company",
      "name": name
    }
  })
  console.log("Email sent successfully", response);
} catch (error) {
  console.error(`Error sending welcome email`, error);
  throw new Error(`Error sending welcome email: ${error}`)
}
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL,),
      category: "Password Reset",
    });
  } catch (error) {
    console.log("Error sending password reset email", error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
}
export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password reset successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
    console.log("Password reset successful",)
  } catch (error) {
    console.log("Error sending reset password  email", error);
    throw new Error(`Error sending reset password  email: ${error}`);
  }
}
