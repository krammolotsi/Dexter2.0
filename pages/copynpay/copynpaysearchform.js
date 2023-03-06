import { useState } from "react";
export default function CopynPaySearchForm(props) {
  //form variables
  const [entityId, setEntityId] = useState("");
  const [environment, setEnvironment] = useState("");
  const [bearerToken, setBearerToken] = useState("");
  const [ndc, setNdc] = useState("");
  const [getCode, setCode] = useState("");
  const [getDescription, setDescription] = useState("");
  
  //form validate empty fields
  const isInvalid =
    entityId === "" || environment === "" || bearerToken === "" || ndc === "";

  //submit from form
  function submitHandler(event) {
    event.preventDefault();
    let entityID = entityId;
    let env = environment; 
    let bearT = bearerToken;
    let checkoutId = ndc;
    const searchPayment = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${bearT}`,
          },
        };
        const response = await fetch(
          `https://${env}/v1/checkouts/${checkoutId}/payment?entityId=${entityID}`,
          options
        );
        const data = await response.json();
        setCode(data.result.code);
        setDescription(data.result.description);
      } catch (error) {
        setEntityId("");
        setEnvironment("");
        setBearerToken("");
        setNdc("");
        setError(error.message);
      }
    };
    searchPayment();
  }

  return (
    <div className="font-sans overflow-hidden w-full bg-white">
      <div className="relative flex flex-col sm:justify-center items-center bg-white pt-12 md:pt-8">
        <div className="relative sm:max-w-sm w-full">
          <div className="relative w-full rounded-3xl  px-6 py-2 bg-gray-light shadow-md">
            <label className="block mt-4 text-sm text-gray-600 text-center font-semibold">
              Copy and Pay Get Payment
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

              {/* merchantTransactionId */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Checkout ID"
                  className="mt-1 block w-full p-3 border-none bg-white h-11 rounded-xl shadow-lg placeholder-gray-dark hover:bg-blue-light focus:ring-2 focus:ring-blue-dark"
                  onChange={({ target }) => setNdc(target.value)}
                  value={ndc}
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
                  SEARCH
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col bg-white my-2">
        <h1>{getDescription}</h1>
        <h1>{getCode}</h1>
      </div>
    </div>
  );
}
