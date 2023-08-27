import Table from "@/components/Table/Table";
import EmailConfirmation from "@/pages/authentication/email-confirmatin";
import { Login } from "@/pages/authentication/login";
import { Register } from "@/pages/authentication/register";
import { CreateProject } from "@/pages/create-project/create-project";
import { StepOne } from "@/pages/setting/email/step-one";
import { StepTwo } from "@/pages/setting/email/step-two";
import { ManageApiKey } from "@/pages/setting/mange-api-key";
import { ManagePassword } from "@/pages/setting/mange-password";

const MainTest = () => {
  return (
    <div>
      <Table />
      <Login />
      <Register />
      <StepOne />
      <StepTwo />
      <ManagePassword />
      <ManageApiKey />
      <CreateProject />
      <EmailConfirmation />
    </div>
  );
};

export default MainTest;
