import { rankCollection, db } from "@/appwrite/name";
import { IndexType, Permission, Role } from "node-appwrite";
import { createAdminClient } from "../config";
import waitForAttributes from "./waitForAttribute";

export default async function createRankCollection() {
  const { databases } = await createAdminClient()
  
  // Creating collection
  await databases.createCollection(db, rankCollection, rankCollection, [
    Permission.read("any"),
    Permission.create(Role.label("admin")),
    Permission.read(Role.label("admin")),
    Permission.update(Role.label("admin")),
    Permission.delete(Role.label("admin")),
  ])

  // Creating Attributes
  await Promise.all([
    databases.createStringAttribute(db, rankCollection, "name", 20, true),
    databases.createFloatAttribute(db, rankCollection, "price", true, 0, 9999),
    databases.createStringAttribute(db, rankCollection, "image", 100, true),
    databases.createStringAttribute(db, rankCollection, "features", 50, true, undefined, true),
    databases.createStringAttribute(db, rankCollection, "commands", 50, true, undefined, true),
    databases.createStringAttribute(db, rankCollection, "weeklyRewards", 50, true, undefined, true),
    databases.createStringAttribute(db, rankCollection, "specials", 50, false, undefined, true),
  ])

  await waitForAttributes(db, rankCollection, ["name"])

  // Creating Indexes
  await Promise.all([
    databases.createIndex(db, rankCollection, "name", IndexType.Unique, ["name"]),
  ])
}