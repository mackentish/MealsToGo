import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = (email: string, password: string) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email: string, password: string) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};
