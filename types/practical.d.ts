// components/practical/EmployeeValidationForm.tsx
export interface FormData {
  name: string;
  email: string;
  employeeId: string;
  joiningDate: string;
}

export interface FormField {
  label: string;
  name: keyof FormData;
  type: string;
  placeholder: string;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;

// components/practical/QualityVoting.tsx
export interface Vote {
  upvotes: number;
  downvotes: number;
}

// components/practical/ItemList.tsx
export interface Item {
  text: string;
  completed: boolean;
}

// components/practical/ContactForm.tsx
export interface SubmittedData {
  name: string;
  email: string;
  message: string;
}

// components/practical/MedicalRecords/Records.tsx and Search.tsx
export interface RecordsProps {
  id: string;
  setId: (id: string) => void;
}
interface PatientRecord {
  id: number;
  timestamp: number;
  diagnosis: {
    id: number;
    name: string;
    severity: number;
  };
  vitals: {
    bloodPressureDiastole: number;
    bloodPressureSystole: number;
    pulse: number;
    breathingRate: number;
    bodyTemperature: number;
  };
  doctor: {
    id: number;
    name: string;
  };
  userId: number;
  userName: string;
  userDob: string;
  meta: {
    height: number;
    weight: number;
  };
}
export interface PatientData {
  id: string;
  data: PatientRecord[];
}
// Search.tsx
export interface SearchProps {
  setRecord: (value: boolean) => void;
  setId: (value: string) => void;
  id: string;
}
export interface Patient {
  id: string;
  name: string;
}

// components/practical/CryptoRank/Table.tsx
export interface TableProps {
  amount: string;
  error: string;
};

// components/practical/BlogPost/context/PostContext.tsx
export interface Post {
  id: number;
  title: string;
  description: string;
}
export interface PostContextType {
  posts: Post[];
  addPost: (title: string, description: string) => void;
  deletePost: (id: number) => void;
  editPost: (id: number, title: string, description: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
// Input.tsx
export interface InputProps {
  title: string;
  description: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  handleCreatePost: () => void;
}
// PostDisplay
export interface PostDisplayProps {
  posts: Post[];
  handleDeletePost: (id: number) => void;
  handleEditPost: (id: number, title: string, description: string) => void;
}