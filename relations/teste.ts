import { appDataSource } from "../src/database/data-source"
import { Profile } from "./entitys/profile"
import { User2 } from "./entitys/user2"

async function teste() {
    // await appDataSource.initialize();
    const profile = new Profile();
    profile.gender = "female4";
    profile.photo = "me";
    await appDataSource.getRepository(Profile).save(profile)

    const user2 = new User2();
    user2.name = "Joe Smith";
    user2.profile = profile;
    await appDataSource.getRepository(User2).save(user2);
    console.log("Finished");
    
    const produto: any = await appDataSource.getRepository(User2).findOne({
        where: { id: 16 }
    })
    // await appDataSource.getRepository(User2).delete(produto)
}

teste()