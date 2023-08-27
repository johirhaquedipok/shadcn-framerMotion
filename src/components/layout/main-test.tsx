import { Login } from "@/login";
import { StepOne } from "@/pages/setting/email/step-one";
import { StepTwo } from "@/pages/setting/email/step-two";
import { ManageApiKey } from "@/pages/setting/mange-api-key";
import { ManagePassword } from "@/pages/setting/mange-password";
import { Register } from "@/register";

const MainTest = () => {
  return (
    <div>
      <Login />
      <Register />
      <StepOne />
      <StepTwo />
      <ManagePassword />
      <ManageApiKey />
    </div>
  );
};

export default MainTest;
