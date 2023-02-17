interface InputTextProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
  inputText: string;
}

export type { InputTextProps };
