const { MongoClient } = require("mongodb");

const url = process.env.MONGODB_URI;

const client = new MongoClient(url);

const dbName = "devTinderDb";

async function main() {
  await client.connect();
  console.log("Connected Successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Aishwarya",
    lastName: "Ghirnikar",
    city: "Adelaide",
    phoneNumber: "0411111111",
  };

  // Insert Data
  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  // Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
