import { Banner } from "@/components";

const SignUpPage = () => {
  return (
    <div className="w-full bg-white">
      <Banner
        header="Join SHiFT"
        description="Sign up to stay connected with our mental health community and receive updates about new content, events, and resources."
      />

      <div className="my-container py-20">
        <div className="max-w-3xl mx-auto">
          {/* Kit.com form */}
          <div
            dangerouslySetInnerHTML={{
              __html: `<script async data-uid="5d2df09644" src="https://shiftmastersessions.kit.com/5d2df09644/index.js"></script>`
            }}
          />

          {/* Additional content below the form */}
          <div className="mt-12 text-center text-gray-600">
            <p className="text-sm">
              By signing up, you agree to our{" "}
              <a href="/privacy-policy" className="text-blue underline hover:no-underline">
                Privacy Policy
              </a>{" "}
              and consent to receive updates from SHiFT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;