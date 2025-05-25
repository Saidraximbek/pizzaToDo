export class DataResource<T> {
  constructor(private endpoints: string) {}
  async loadAll(): Promise<T[]> {
    const req = await fetch(this.endpoints);
    const data = await req.json();
    return data;
  }
  async delete(id: string) {
    const req = await fetch(`${this.endpoints}/${id}`, {
      method: "DELETE",
    });
    return req.json();
  }
  async create(pizza: T) {
    const req = await fetch(`${this.endpoints}`, {
      method: "POST",
      headers: {
          "Content-type": "aplication/json"
      },
      body: JSON.stringify(pizza)
    });
    return req.json()
  }
  async loadOne(id:string){
     const req = await fetch(`${this.endpoints}/${id}`)
     return req.json()
  }
  
}
