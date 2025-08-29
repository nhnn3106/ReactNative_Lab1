import { bai04 } from "./bai04";

bai04
    .then((result) => console.log("Success: " + result))
    .catch((error) => console.error("Failed: " + error))
    .finally(() => console.log("Done"))
