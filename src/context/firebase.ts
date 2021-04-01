import { createContext } from 'react';

export const FirebaseContext = createContext<firebase.app.App | null>(null);
