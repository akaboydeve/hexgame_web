import { donorCollection, db } from "@/appwrite/name";
import { Permission, Role } from "node-appwrite";
import { createAdminClient } from "../config";

export default async function createDonorCollection() {
  const { databases } = await createAdminClient()
  
  // Creating collection
  await databases.createCollection(db, donorCollection, donorCollection, [
    Permission.read("any"),
    Permission.create(Role.label("admin")),
    Permission.read(Role.label("admin")),
    Permission.update(Role.label("admin")),
    Permission.delete(Role.label("admin")),
  ])

  // Creating Attributes
  await Promise.all([
    databases.createStringAttribute(db, donorCollection, "name", 20, true),
    databases.createFloatAttribute(db, donorCollection, "price", true, 0, 9999),
    databases.createStringAttribute(db, donorCollection, "avatar", 100, true),
  ])

}