import { getBackendUrl } from "@/components/setup";
import { UpdateGewertzSquareAccount } from "../../interface";

export default async function updateGewertzSquareAccount(
  input: UpdateGewertzSquareAccount,
  token: string
) {
  const response = await fetch(
    `${getBackendUrl()}/gewertzSquare/updateGewertzSquareAccount/`,
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(input),
    }
  );
  return await response.json();
}
