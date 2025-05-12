export interface FormState {
  name: string;
  email: string;
  message: string;
}

export interface ChangeEvent {
  target: {
    name: string;
    value: string;
  };
}
