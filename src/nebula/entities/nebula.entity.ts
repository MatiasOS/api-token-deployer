export class Nebula {
  id: number;
  name: string;
  type: string;
  distance: number;
  constructor(id: number, name: string, type: string, distance: number) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.distance = distance;
  }
}
