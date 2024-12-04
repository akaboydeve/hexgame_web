import { db } from "../name";
import { createAdminClient } from "./config";
import { 
  createDonorCollection,
  createEventCollection,
  createRankCollection,
  createStaffCollection
} from "./collections";
import feedData from "./feedData";


export default async function getOrCreateDB() {
  const { databases } = await createAdminClient();
  try {

    await databases.get(db);
    console.log("Database connected");
    await feedData()
  }
  catch (error) {
    try {
      await databases.create(db, db);
      console.log("Database created");

      // Create collections
      await Promise.all([
        createStaffCollection(),
        createRankCollection(),
        createEventCollection(),
        createDonorCollection(),
      ])
      console.log("Collections created");
      console.log("Database connected");
      await feedData()
    }
    catch (error) {
      console.log("Error creating database", error);
    }
  }

  return databases;
}