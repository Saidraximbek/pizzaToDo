import { Pizza } from "../model/model";

const form = document.querySelector(".create")!;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const title = formData.get("title");
    const description = formData.get("description");
    const price = Number(formData.get("price"));
    const toppings = formData.getAll("toppings");

    if (
        typeof title === "string" &&
        typeof description === "string" &&
        !isNaN(price) &&
        Array.isArray(toppings)
    ) {
        Pizza.create({
            title,
            description,
            price,
            toppings
        }).then(() => {
            window.location.href = "/";
        }).catch((err) => {
            console.error( err);
        });
    } else {
        return "form not added"
    }
});
