import { UUIDString } from '@dataconnect/generated';

export class Category {
  id: UUIDString;
  name: string;
  description: string;
  isParent: boolean;
  parentId: UUIDString | null;
  children: Category[];

  constructor(
    id: UUIDString,
    name: string,
    description: string,
    isParent: boolean,
    parentId: UUIDString | null = null,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.isParent = isParent;
    this.parentId = parentId;
    this.children = [];
  }

  addChild(category: Category): void {
    this.children.push(category);
  }

  // Recursively collect this category and all descendants into a flat list
  flatten(depth = 0): { category: Category; depth: number }[] {
    const result: { category: Category; depth: number }[] = [
      { category: this, depth },
    ];

    for (const child of this.children) {
      result.push(...child.flatten(depth + 1));
    }

    return result;
  }

  print(depth = 0): void {
    const indent = '  '.repeat(depth);
    console.log(`${indent}- ${this.name} (${this.description})`);
    for (const child of this.children) {
      child.print(depth + 1);
    }
  }
}
