interface ItemProps {
  onClickCheckBox(id: number): void;
  onClickDeleteButton(id: number): void;
  completed?: boolean;
  text: string;
  id: number;
}
export type { ItemProps };
