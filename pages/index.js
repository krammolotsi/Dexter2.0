import Dash from "./dash"

// const cors = require("cors");

// app.use(
//     cors({
//         origin: '*',
//         methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
//         credentials: true
//     })
// );

export default function Home() {
  return <div>
      <Dash />
  </div>;
}
