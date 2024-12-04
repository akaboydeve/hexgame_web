import { eventCollection, db } from "@/appwrite/name";
import { Permission, Role } from "node-appwrite";
import { createAdminClient } from "../config";

export default async function createEventCollection() {
  const { databases } = await createAdminClient()
  
  // Creating collection
  await databases.createCollection(db, eventCollection, eventCollection, [
    Permission.read("any"),
    Permission.create(Role.label("admin")),
    Permission.read(Role.label("admin")),
    Permission.update(Role.label("admin")),
    Permission.delete(Role.label("admin")),
  ])

  // Creating Attributes
  await Promise.all([
    databases.createStringAttribute(db, eventCollection, "name", 50, true),
    databases.createStringAttribute(db, eventCollection, "date", 20, true),
    databases.createStringAttribute(db, eventCollection, "avatar", 100, true),
  ])
}