export default async function getPayments(bearer, entityID, merchantTransactionID, NDC, uniqueID) {  


//  const [uniqueID, setUniqueID] = useState(null);
// const [merchantTransactionID, setMerchantTransactionId] = useState(null)
// const [bearerToken, setBearerToken] = useState(null)
// const [entityID, setEntityID] = useState(null)
// const [checkoutID_UserInput, setCheckoutID_UserInput] = useState(null)  


    // SET BEARER TOKEN FOR HTTP HEADER IF THEY EXIST OTHERWISE INVALID FLOW.
    if (bearer, entityId) {
      console.log("bearer type: " + typeof(bearer) + " value: " + bearer)
      console.log("entity type: " + typeof(entityId) + " value: " + entityId)
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer " + bearer,
        }
      }
      
      // GET PAYMENT USING NDC/CheckoutID.
      if ((NDC != null) & (entityID != null)) {
        console.log("NDC type: " + typeof(NDC) + " value: " + NDC)
        console.log("entityId type: " + typeof(entityID) + " value: " + entityID)
        alert("Check Out ID empty send Post");
        const response = await fetch(
          // GLOBAL FLAG
          `https://eu-test.oppwa.com/v1/checkouts/${checkoutID}/payment?entityId=${entityID}`, options
        );

        const data = await response.json();
        console.log("content below");
        console.log(response.headers.get("content-type"));
        console.log("data");
        console.log(data);
        // need to return this to DIV block
      }

      // GET PAYMENT USING UNIQUE ID.
      else if (uniqueID) {
        console.log("uniqueID type: " + typeof(uniqueID) + " value: " + uniqueID)
        alert("uniqueID empty or invalid");
        const response = await fetch(
          // GLOBAL FLAG
          `https://eu-test.oppwa.com/v1/query/${uniqueID}`, options
        );

        const data = await response.json();
        console.log("content below");
        console.log(response.headers.get("content-type"));
        console.log("data");
        console.log(data);
        
      }

      // GET PAYMENT USING TRANSACTION ID.
      else if (merchantTransactionID) {
        console.log("merchantTransactionId type: " + typeof(merchantTransactionID) + " value: " + merchantTransactionID)
        alert("merchantTransactionId empty or invalid");
        const response = await fetch(
          // GLOBAL FLAG
          `https://eu-test.oppwa.com/v1/query/${merchantTransactionID}`, options
        );

        const data = await response.json();
        console.log("content below");
        console.log(response.headers.get("content-type"));
        console.log("data");
        console.log(data);
      }
      // nothing detected
      else {
        console.log('nothing detected');
      }
    }

    // IF NULL VALUES OF BEARER OR ENTITYID - STOP

    else {
      // alert("Bearer Token or uniqueID not present")
      if (bearer == null) {
        console.log(typeof(bearer));
        console.log(bearer);
        alert("Enter Bearer Token");
      }
      else if (entityID == null) {
        console.log(typeof(entityID));
        console.log(entityID);
        alert("Enter an EntityID");
      }

      else if (entityID, bearer) {
        console.log(typeof(entityID, bearer))
        console.log(entityID);
      }
      else if ((bearer == null) & (entityID == null)) {
        console.log(typeof(entityID), typeof(bearer));
        console.log(entityID, bearer);
        alert("Enter a valid entityID and bearer token too lookup.");
      }
    } 
	// end of function    
  };
