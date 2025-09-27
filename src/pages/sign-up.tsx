import { useEffect } from "react";
import { Banner } from "@/components";

const SignUpPage = () => {
  useEffect(() => {
    // Load the Kit.com script
    const script = document.createElement("script");
    script.src = "https://shiftmastersessions.kit.com/5d2df09644/index.js";
    script.async = true;
    script.setAttribute("data-uid", "5d2df09644");

    // Find the container and append the script
    const container = document.getElementById("kit-form-container");
    if (container) {
      container.appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <Banner
        header="Join SHiFT"
        description="Sign up to stay connected with our mental health community and receive updates about new content, events, and resources."
      />

      <div className="my-container py-20">
        <div className="max-w-3xl mx-auto">
          {/* Kit.com form will be injected here */}
          <div id="kit-form-container" className="w-full">
            {/* The script will inject the form here */}
          </div>

          {/* Optional: Add additional content below the form */}
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