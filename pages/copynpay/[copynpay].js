import { useState } from "react";
import Dash from "../dash";
import Link from "next/link";
function CopyNpayPage() {
  const [getCode, setCode] = useState("");
  const [getDescription, setDescription] = useState("");
  //get payments
  const getPayments = async () => {
    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);

    if (text === "") {
      alert("Check Out ID empty send Post");
    } else {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${obj.bearer}`,
        },
      };
      const response = await fetch(
        `https://${obj.baseUrl}/v1/checkouts/${obj.checkoutId}/payment?entityId=${obj.entityId}`,
        options
      );

      const data = await response.json();

      setCode(data.result.code);
      setDescription(data.result.description);
    }
  };
  return (
    <Dash
      children={
        <div className="flex">
          <div className="flex-auto w-1/2 bg-white">
            <div className="flex-col">
              <div className="mb-4">
              <Link href="/copynpay">
                <button
                  type="submit"
                  className="bg-orange-primary w-12 py-1 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                 Back
                </button>
                </Link>
              </div>
              <div className=" bg-white h-1/3">
                <button
                  type="submit"
                  className={`bg-blue-primary w-1/2 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105`}
                  onClick={getPayments}
                >
                  Get Payment
                </button>
              </div>
              <div className="relative flex flex-col bg-white my-2">
                <h1>{getDescription}</h1>
                <h1>{getCode}</h1>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default CopyNpayPage;
