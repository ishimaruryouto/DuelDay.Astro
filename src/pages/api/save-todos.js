import { rdb } from "../../firebase/client";
import { ref, set } from "firebase/database";

export async function POST({ request }) {
    try {
        const { opponent, myId, todos } = await request.json();

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