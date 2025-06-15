import { getBackendUrl } from "@/components/setup";
import { CommonUser, UserType } from "../../interface";

export default async function getGewertzSquareUserMe(
  token: string
): Promise<{ user: CommonUser; userType: UserType }> {
  const response = await fetch(
    `${getBackendUrl()}/gewertzSquare/getGewertzSquareUserMe/`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return await response.json();
}
