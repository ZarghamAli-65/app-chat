import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "qmgwr9umdkxt";
const api_secret =
  "gajn6v7sc4fy6ewc2enx8x3c6qp4bzkjzxzyzy63ezsngdjdbc9wb98jx3w95f7m";

function capitalizeFirstLetter(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return ""; // Handle empty strings or null values
  }
}

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  //create user token
  const token = serverClient.createToken(user.data.id);
  console.log("A new user has been created", token);
  const client = await clerkClient();
  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  //Give to this user for all chats
  const slugs = [
    "nextjs-chat-new",
    "react-chat-new",
    "nodejs-chat-new",
    "tailwindcss-chat-new",
    "javascript-chat-new",
    "mongodb-chat-new",
  ];
  slugs.forEach(async (item) => {
    const channel = serverClient.channel("messaging", item, {
      image: "https://getstream.io/random_png/?name=react",
      name: capitalizeFirstLetter(item) + " Discusson",
      created_by_id: user.data.id,
    });
    await channel.create();
    channel.addMembers([user.data.id]);
  });
  return Response.json({ message: "Hello World" });
}
