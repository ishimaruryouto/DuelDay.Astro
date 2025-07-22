import { rdb } from "../../firebase/server";
import { ref, set } from "firebase/database";

export const prerender = false;
export async function POST({ request }) {
    try {
        // ここでbody受け取るなら↓
        const body = await request.json();
        const { opponent, myId, todos } = body;
        console.log({ opponent, myId, todos }); // ← ここだけ修正

        if (
            typeof opponent !== "string" ||
            typeof myId !== "string" ||
            !Array.isArray(todos)
        ) {
            return new Response(
                JSON.stringify({ status: "ng", error: "Invalid params" }),
                { status: 400 }
            );
        }

        await set(ref(rdb, `duels/${opponent}/${myId}`), todos);

        return new Response(JSON.stringify({ status: "ok" }), { status: 200 });
    } catch (e) {
        return new Response(
            JSON.stringify({ status: "ng", error: String(e) }),
            { status: 500 }
        );
    }
}