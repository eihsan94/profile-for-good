import Passage from "@passageidentity/passage-node";
import { GetServerSidePropsContext } from "next";

export async function SSRAuthGuard(context: GetServerSidePropsContext) {
  const appID = process.env.PASSAGE_APP_ID || "";
  const passage = new Passage({
    appID,
    apiKey: process.env.PASSAGE_API_KEY,
    authStrategy: "HEADER",
  });
  try {
    const authToken = context.req.cookies["psg_auth_token"];
    const req = {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    };

    const userID = await passage.authenticateRequest(req);
    if (userID) {
      return { props: { isAuthorized: true, appID: appID } };
    }
  } catch (error) {
    return { props: { isAuthorized: false, appID: appID } };
  }
}
