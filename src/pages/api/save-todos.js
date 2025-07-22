import { rdb } from "../../firebase/server";
import { ref, set } from "firebase/database";

export const prerender = false;

export async function POST({ request }) {
    try {
        const body = await request.json();
        let { opponent, myId, todos } = body;
        // opponentの「.」を「_」に置換！
        const safeOpponent = opponent.replace(/\./g, "_");

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

        await set(ref(rdb, `duels/${safeOpponent}/${myId}`), todos);

        return new Response(JSON.stringify({ status: "ok" }), { status: 200 });
    } catch (e) {
        console.error("🔥 APIサーバーエラー内容:", e);
        return new Response(
            JSON.stringify({ status: "ng", error: String(e) }),
            { status: 500 }
        );
    }
}