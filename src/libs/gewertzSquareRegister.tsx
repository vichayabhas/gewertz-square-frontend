import { getBackendUrl } from "@/components/setup";
import { GewertzSquareRegister } from "../../interface";

export default async function gewertzSquareRegister(
input: GewertzSquareRegister,
) {
const response = await fetch(`${getBackendUrl()}/gewertzSquare/gewertzSquareRegister/`, {
method: "POST",
cache: "no-store",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(input),
});
return await response.json()
}