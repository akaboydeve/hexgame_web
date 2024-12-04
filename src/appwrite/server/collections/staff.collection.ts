import { staffCollection, db } from "@/appwrite/name";
import { IndexType, Permission, Role } from "node-appwrite";
import { createAdminClient } from "../config";

export default async function createStaffCollection() {
  const { databases } = await createAdminClient()
  
  // Creating collection
  await databases.createCollection(db, staffCollection, staffCollection, [
    Permission.read("any"),
    Permission.create(Role.label("admin")),
    Permission.read(Role.label("admin")),
    Permission.update(Role.label("admin")),
    Permission.delete(Role.label("admin")),
  ])

  // Creating Attributes
  await Promise.all([
    databases.createStringAttribute(db, staffCollection, "name", 50, true),
    databases.createEnumAttribute(db, staffCollection, "role", ["Staff", "Head Admin", "Server Owner", "Management"], true),
    databases.createStringAttribute(db, staffCollection, "avatar", 100, true),
  ])
}