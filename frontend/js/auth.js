
function showMessage(element, message, isSuccess = false) {
    element.textContent = message;
    element.style.color = isSuccess ? "green" : "red";
}

async function auth(endpoint) {
    const msg = document.getElementById("message");

    const payload = endpoint === "signup"
        ? {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value
        }
        : {
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value
        };

    msg.textContent = "";

    try {
        const response = await fetch("/api/auth/" + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong.");
        }

        localStorage.setItem("expenseToken", data.token);
        localStorage.setItem("expenseUser", JSON.stringify(data.user));

        showMessage(msg, "Login successful!", true);

        location.href = "dashboard.html";

    } catch (error) {
        showMessage(msg, error.message);
    }
}

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
    loginForm.onsubmit = function (e) {
        e.preventDefault();
        auth("login");
    };
}

if (signupForm) {
    signupForm.onsubmit = function (e) {
        e.preventDefault();
        auth("signup");
    };
}
