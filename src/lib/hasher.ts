import * as argon2 from "argon2";
import dayjs from "dayjs";

export default async function hash_token() {
    try {

        let tgl = dayjs(new Date()).format("YYYY-MM-DD").toString()
        let token_raw = process.env.APP_KEY + "." + "0000" + "." + tgl;
        console.log("🗝️", token_raw, tgl)

        let token = await argon2.hash(token_raw, {
            type: argon2.argon2id,
            parallelism: 1,
            memoryCost: 1024,
            hashLength: 64,
            timeCost: 2,
        })

        return token.replace("$argon2id$v=19$m=1024,t=2,p=1", "");
    } catch (error) {
        console.log("❌ argon2 hash error :", error)
        return ""
    }

}