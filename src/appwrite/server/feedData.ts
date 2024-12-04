import { ID } from "node-appwrite";
import { db, rankCollection, staffCollection } from "../name";
import { createAdminClient } from "./config";
import { initialStaff, ranks } from "@/mcinfo";

export default async function feedData() {
  await createRanks();
  await addStaff();
}


async function createRanks() {
  try {
    const { databases } = await createAdminClient();

    for (const rank of ranks) {
      await databases.createDocument(db, rankCollection, ID.unique(), {
        name: rank.name,
        price: rank.price,
        image: rank.image,
        features: rank.features,
        commands: rank.commands,
        weeklyRewards: rank.weeklyRewards,
        specials: rank.specials || [],
      });
      console.log(`Rank ${rank.name} created`);
    }
  } catch (error) {
    console.log("Error feeding rank data", error);
  }
}

async function addStaff() {
  try {
    const { databases } = await createAdminClient();    

    for (const staff of initialStaff) {
      await databases.createDocument(db, staffCollection, ID.unique(), {
        name: staff.name,
        role: staff.role,
        avatar: staff.avatar,
      })
    }
    console.log("Staff data fed");
    
  } catch (error) {
    console.log("Error feeding staff data");
  }
}