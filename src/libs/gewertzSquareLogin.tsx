import { getBackendUrl } from "@/components/setup";

export default async function gewertzSquareLogin(
  userEmail: string,
  userPassword: string
) {
  const response = await fetch(`${getBackendUrl()}/gewertzSquare/gewertzSquareLogin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Fail to log-in");
  }
  return await response.json();
}
