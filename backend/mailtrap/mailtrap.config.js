import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const EMAIL = process.env.MAILTRAP_DEMO_EMAIL;

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
  //testInboxId: TEST_INBOX_ID,
});
export const sender = {
  email: EMAIL ,
  name:"Ifechukwu",
};
/**
|--------------------------------------------------
| const SANDBOX = process.env.MAILTRAP_USE_SANDBOX === "true";
const TEST_INBOX_ID = SANDBOX ? Number(process.env.MAILTRAP_INBOX_ID) : undefined;
const SENDER_EMAIL =
  process.env.MAILTRAP_FROM_EMAIL || (SANDBOX ? "sandbox@example.com" : undefined);

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN is required to send email.");
}

if (SANDBOX && (!Number.isInteger(TEST_INBOX_ID) || TEST_INBOX_ID <= 0)) {
  throw new Error("MAILTRAP_INBOX_ID must be a positive integer when sandbox mode is enabled.");
}

if (!SENDER_EMAIL) {
  throw new Error(
    "MAILTRAP_FROM_EMAIL must be set to an address on a verified domain when sandbox mode is disabled.",
  );
}




|--------------------------------------------------
*/
