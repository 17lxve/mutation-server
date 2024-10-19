// Imports
import { LivreType } from "../models";
import { db } from ".";

// Define the name of the collection
const collection_name = "livres";

// The CRUD controller factory
class Livre {
    // Create
    create= async (livre: LivreType) => await db.collection(collection_name).insertOne({
        titre: livre.titre,
        prix: livre.prix,
        cover: livre.cover
    })
    
    // Read
    get= async () => await db.collection(collection_name).find().toArray();
    getWithId= async(id: number) => await db.collection(collection_name).findOne({ id });

    // Update
    update= async(id:number, livre: LivreType) => await db.collection(collection_name).updateOne(
        {
            id
        },{
            $set : {
                titre: livre.titre ?? await this.getWithId(id).then((data)=>data!.titre),
                prix: livre.prix ?? await this.getWithId(id).then((data)=>data!.prix),
                cover: livre.cover ?? await this.getWithId(id).then((data)=>data!.cover)
            }
        }
    )

    // Delete
    delete= async(id: number) => await db.collection(collection_name).deleteOne({id})
}

// Exports
export default new Livre();