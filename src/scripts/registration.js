import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/client";

const form = document.getElementById("register-form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(
            auth,
            form.email.value.trim(),
            form.password.value
        );
        alert("登録成功！ログインへ移動します。");
        window.location.href = "/account/login";
    } catch (err) {
        alert(err.message);
    }
});
