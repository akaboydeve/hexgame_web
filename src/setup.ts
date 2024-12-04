import getOrCreateDB from "@/appwrite/server/dbSetup";

(
  async () => {
    await getOrCreateDB()
  }
)();