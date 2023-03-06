import { useState } from "react";
import Dash from "../dash";
export default function CopynPayForm(props) {
  //form variables
  const [entityId, setEntityId] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [environment, setEnvironment] = useState("");
  const [bearerToken, setBearerToken] = useState("");
  const [merchantTransactionId, setMerchantTransactionId] = useState("");
  let copyNpayData;
  //form validate empty fields
  const isInvalid =
    entityId === "" ||
    amount === "" ||
    currency === "" ||
    paymentType === "" ||
    environment === "" ||
    bearerToken === "" ||
    merchantTransactionId === "";

  //submit from form
  function submitHandler(event) {
    event.preventDefault();
    try {
      copyNpayData = {
        entityId: entityId,
        amount: amount,
        currency: currency,
        paymentType: paymentType,
        environment: environment,
        bearerToken: bearerToken,
        merchantTransactionId: merchantTransactionId,
      };
    } catch (error) {
      setEntityId("");
      setAmount("");
      setCurrency("");
      setPaymentType("");
      setEnvironment("");
      setBearerToken("");
      setMerchantTransactionId("");
      setError(error.message);
    }
    //send captured data to widget function
    props.onEnteredData(copyNpayData);
  }

  return (
      <div className="font-sans overflow-hidden w-full bg-red-primary">
        <div className="relative flex flex-col sm:justify-center items-center bg-white pt-12 md:pt-8">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-sky-400 shadow-lg  w-full h-full rounded-3xl absolute animate-rotate"></div>
            <div className="card bg-orange-primary shadow-lg  w-full h-full rounded-3xl absolute  animate-rotate_neg"></div>
            <div className="relative w-full rounded-3xl  px-6 py-2 bg-gray-light shadow-md">
              <label className="block mt-4 text-sm text-gray-600 text-center font-semibold">
                Copy and Pay Post Payment 
              </label>
              <form
                onSubmit={submitHandler}
                method="POST"
                className="mt-10"
                id="form1"
              >
                {/* environment */}
                <div className="mt-4">
                  <select
                    type="checkbox"
                    name="environment"
                    placeholder="environment"
                    className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg text-gray-600 placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                    onChange={({ target }) => setEnvironment(target.value)}
                    value={environment}
                  >
                    <option value="">Select Test or Live</option>
                    <option value="eu-prod.oppwa.com">Production</option>
                    <option value="eu-test.oppwa.com">Sandbox</option>
                  </select>
                </div>
                {/* Bearer */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Access Token"
                    className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                    onChange={({ target }) => setBearerToken(target.value)}
                    value={bearerToken}
                  />
                </div>
                {/* entity ID */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Entity Id"
                    className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                    onChange={({ target }) => setEntityId(target.value)}
                    value={entityId}
                  />
                </div>
                {/* amount */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Amount"
                    className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                    onChange={({ target }) => setAmount(target.value)}
                    value={amount}
                  />
                </div>
                {/* currency */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Currency"
                    className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                    onChange={({ target }) => setCurrency(target.value)}
                    value={currency}
                  />
                </div>
                {/* payment type */}
                <div className="mt-4">
                  <select
                    type="checkbox"
                    name="paymentType"
                    placeholder="Payment Type"
                    className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg text-gray-600 placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                    onChange={({ target }) => setPaymentType(target.value)}
                    value={paymentType}
                  >
                    <option value="">Select Payment Type</option>
                    <option value="DB">Debit</option>
                    <option value="PA">Pre-Authorisation</option>
                  </select>
                </div>

                {/* merchantTransactionId */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Merchant Transaction ID"
                    className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                    onChange={({ target }) =>
                      setMerchantTransactionId(target.value)
                    }
                    value={merchantTransactionId}
                  />
                </div>
                <div className="mt-4">
                  <button
                    disabled={isInvalid}
                    type="submit"
                    className={`bg-blue-primary w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105  ${
                      isInvalid && "opacity-50"
                    }`}
                  >
                    POST
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
  );
}
