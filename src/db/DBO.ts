import fakeData from "./fakeData";
import { db } from ".";
import { Types } from "mongoose";

class DbObject<T> {
  constructor(public collection_name: string) {
    console.log("constructed");
  }
  // @ts-ignore
  attributes = Object.keys(fakeData[this.collection_name]);
  create = async (obj: T) => {
    return await db.collection(this.collection_name)?.insertOne(obj as {});
  };
  get = async () => {
    return await db.collection(this.collection_name).find({}).toArray();
  };
  getWithId = async (id: string) => {
    return await db.collection(this.collection_name)?.findOne();
  };
  update = async (id: string, obj: T) => {
    const updateData = this.attributes.reduce((acc, key) => {
      // @ts-ignore
      if (obj[key]) acc[key] = obj[key];
      return acc;
    }, {});
    console.log(updateData);
    return await db.collection(this.collection_name)?.updateOne(
      {
        _id: new Types.ObjectId(id),
      },
      {
        $set: updateData,
      },
    );
  };
  delete = async (id: number) => {
    return await db.collection(this.collection_name)?.deleteOne({ id });
  };
}

export default DbObject;
