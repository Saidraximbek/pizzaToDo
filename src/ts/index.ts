import { Pizza, PizzaModel } from "../model/model";

const root = document.querySelector(".root")!;

function createPizzaTemplate(pizza: PizzaModel): string {
  return `
    <div class="pizza" data-id="${pizza.id}">
      <h2 class="title">${pizza.title}</h2>
      <p class="description">${pizza.description}</p>
      <span class="price">$${pizza.price}</span>
      <button class="delete-btn">Delete</button>
    </div>
  `;
}

function renderTemplate(createdPizzas: string[], root: Element) {
  const template = document.createElement("template");
  for (let t of createdPizzas) {
    template.innerHTML += t;
  }

  root.append(template.content.cloneNode(true));

  
  const deleteButtons = root.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const parent = (e.target as HTMLElement).closest(".pizza")!;
      const id = parent.getAttribute("data-id");

      if (id) {
        try {
          await Pizza.remove(id);
          parent.remove(); 
        } catch (err) {
          console.error("Failed to delete:", err);
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();
  const createdPizzas = pizzas.map((pizza) => createPizzaTemplate(pizza));
  renderTemplate(createdPizzas, root);
});
