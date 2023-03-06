import Script from "next/script";
import Dash from "../dash";
import { useState } from "react";
import CopynPayForm from "./copynpayform";
import CopynPaySearchForm from "./copynpaysearchform";


export default function CopynPay() {
  const [widget, setWidget] = useState("");

  //dynamic variables for widget
  let lnk = "";
  let ndc = "";
  let redirect = "";

  //post data
  function getFormData(enteredData) {
    localStorage.clear();
    const postPayments = async () => {
      //empty card widget
      setWidget("");

      //get data from post form
      let amount = enteredData.amount;
      let currency = enteredData.currency;
      let paymentType = enteredData.paymentType;
      let bearer = enteredData.bearerToken;
      let entityId = enteredData.entityId;
      let baseUrl = enteredData.environment;

     
      //Post request
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${bearer}`,
          origin: '*'
        },
      };

      const response = await fetch(
        //make dynamic
        `https://${baseUrl}/v1/checkouts?entityId=${entityId}&amount=${amount}&currency=${currency}&paymentType=${paymentType}&merchantTransactionId=Peach`,
        options
      );
      const data = await response.json();

      ndc = data.ndc;

      //assign values for local storage
      const myObj = {
        entityId: entityId,
        baseUrl: baseUrl,
        checkoutId: ndc,
        bearer: bearer,
      };
      const myJSON = JSON.stringify(myObj);
      localStorage.setItem("testJSON", myJSON);

      //set link for script
      lnk = `https://${baseUrl}/v1/paymentWidgets.js?checkoutId=${ndc}`;
      redirect = `https://api-integration-peach-payments.vercel.app/copynpay/${ndc}`;
      //update card widget
      setWidget(
        <div className="">
          <Script src={lnk} />
          <form
            action={redirect}
            className="paymentWidgets"
            data-brands="VISA MASTER AMEX"
          ></form>
        </div>
      );
    };

    //run function
    postPayments();
  }

  return (
    <Dash
      children={
        <div className="flex">
          <div className="flex-auto w-1/2 bg-white p-1">
            <CopynPayForm onEnteredData={getFormData} />
          </div>
          <div className="flex-auto w-1/2 bg-white">  
          <div className=" bg-white w-full"> {widget}</div>
            <CopynPaySearchForm />
          </div>
        </div>
      }
    />
  );
}
