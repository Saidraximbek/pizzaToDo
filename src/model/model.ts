
export interface PizzaModel {
  id: number;
  title: string;
  description: string;
  price: number;
  toppings: string[];
}


export class DataResource<T> {
  constructor(private url: string) {}

  
  async loadAll(): Promise<T[]> {
    const res = await fetch(this.url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  }


  async create(data: Omit<T, "id">): Promise<T> {
    const res = await fetch(this.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Failed to create resource");
    }
    return await res.json();
  }

  async remove(id: number | string): Promise<void> {
    const res = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to delete resource");
    }
  }

  async getOne(id: number | string): Promise<T> {
    const res = await fetch(`${this.url}/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch item");
    }
    return await res.json();
  }

  async update(id: number | string, data: Partial<T>): Promise<T> {
    const res = await fetch(`${this.url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Failed to update item");
    }
    return await res.json();
  }
}

export const Pizza = new DataResource<PizzaModel>("http://localhost:3000/pizzas");
