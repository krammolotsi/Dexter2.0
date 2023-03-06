export default async function prepareCheckout(environment, bearerToken, entityID, merchantTransactionID, amount, paymentType) {
    // const entityId = `8ac7a4c7802597b10180282ee66c0bb4`;
    // let amount = "1.00";
    // const currency = "ZAR";
    // const paymentType = "DB";
    // const [checkoutID, setCheckoutID] = useState("")
    // const [uniqueID, setUniqueID] = useState(null);
    // const [merchantTransactionID, setMerchantTransactionId] = useState(null)
    // const [bearerToken, setBearerToken] = useState(null)
    // const [entityID, setEntityID] = useState(null)
    // const [checkoutID_UserInput, setCheckoutID_UserInput] = useState(null)

    // SET BEARER TOKEN
    const bearerToken_Options = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer " + bearerToken,
      },
    };
    
    // SET PAYMENT DATA
    const response = await fetch(
      `https://eu-test.oppwa.com/v1/checkouts?
        entityId=${entityId}&
        amount=${amount}&
        currency=${currency}&
        paymentType=${paymentType}&
        merchantTransactionId=${merchantTransactionID}`,
        bearerToken_Options
    );
    
    // WAIT FOR NDC
    const responseData = await response.json();
    console.log(responseData);
    
    // RETURN CHECKOUT ID URL
    // return(`https://${environment}.oppwa.com/v1/paymentWidgets.js?checkoutId=${responseData.ndc}`);
    return(`https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${responseData.ndc}`);
  };