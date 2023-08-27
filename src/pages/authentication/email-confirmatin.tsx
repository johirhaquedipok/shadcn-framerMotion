import { RxReload } from "react-icons/rx";

const EmailConfirmation = () => {
  //   const { state: auth } = useAuthState();
  // time interval hook
  //   const { seconds, minutes, setMinutes, setSeconds } = useTimer(30, 1);

  // custom mutation
  //   const resendEmailMutation = useResendEmailMutation();
  const handleResetEmail = () => {
    // resendEmailMutation.mutate(auth.signUpEmail);
    // setMinutes(1);
    // setSeconds(30);
  };

  return (
    <div className="mx-auto grid   max-w-2xl place-items-center p-4">
      <div className="card gap-2 rounded-lg border p-4 xl:p-8">
        <div className=" grid place-content-center">
          <div className="h-60 w-60">{/* <ConfirmationMailSvg /> */}</div>
        </div>
        <h2 className="card-title text-neutral-focus">
          Thanks for Registering!
        </h2>
        <p className=" text-lg text-gray-700">
          Two easy steps to get your free account approved sooner than everyone
          else:
        </p>

        <ul className="space-y-4">
          <li className="">
            <span className="font-medium"> Step 1</span>: Join our Facebook
            group{" "}
            <a
              className="link text-primary"
              href="https://www.facebook.com/groups/linkboss/"
              target="_blank"
              rel="noreferrer"
            >
              LinkBoss Community
            </a>
            ;
          </li>
          <li className="">
            <span className="font-medium"> Step 2</span>: Send the below message
            to our{" "}
            <a
              className="link text-primary"
              href="https://www.facebook.com/linkboss.io"
              target="_blank"
              rel="noreferrer"
            >
              Facebook page
            </a>{" "}
            using the Facebook account that joined our Group:
            <div className="my-2 rounded bg-gray-200 p-2 font-medium">
              &quot;signed up using this email{" "}
              <span className=" text-primary">
                &lt; the email you used to sign up &gt;
              </span>{" "}
              and waiting for approval&quot;
            </div>
          </li>

          <li className="">
            We will review and approve your Free account asap.
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="mx-auto grid h-screen  max-w-2xl place-items-center p-4">
      <div className="card gap-2 rounded-lg border p-4 xl:p-8">
        <ConfirmationMailSvg />
        <h2 className="card-title text-neutral-focus">
          Please Verify Your Email
        </h2>
        <p className="  text-secondary">
          An email with a confirmation link has been sent to
          <em className="mx-1 text-neutral-focus/70">
            {auth.signUpEmail ? auth.signUpEmail : "your email"}
          </em>
          . Please click on the link to verify.
        </p>

        <div className="mt-4 text-sm">
          {/* <span className=" mr-2">
            Didn't get a confirmation email? <em>{timeLeft || targetTime}</em>
            second(s)
          </span> */}
          <span className="mr-2">Didn't get a confirmation email?</span>
          <button
            type="button"
            className={`inline-flex items-center gap-1 rounded-lg text-xs text-primary ${
              seconds > 0 || minutes > 0 ? "text-secondary" : "text-primary"
            }`}
            onClick={handleResetEmail}
            disabled={seconds > 0 || minutes > 0}
          >
            <RxReload className=" h-3 w-3 -rotate-45 " />
            Send again
          </button>
          {seconds > 0 || minutes > 0 ? (
            <p className="text-error">
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : null}
        </div>

        <p className="mt-4 flex items-center gap-2 rounded-lg bg-secondary/5 px-2 py-4 text-xs text-secondary">
          <HiOutlineInformationCircle className="h-5 w-5" /> Remember to check
          your spam folder.
        </p>
      </div>
    </div>
  );
};

export default EmailConfirmation;
