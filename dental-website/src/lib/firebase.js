import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function submitContactForm({ name, email, phone, message }) {
  const docRef = await addDoc(collection(db, 'messages'), {
    name,
    email,
    phone: phone || '',
    message,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function submitBooking({ name, phone, email, service, date, time, notes }) {
  const docRef = await addDoc(collection(db, 'bookings'), {
    name,
    phone,
    email: email || '',
    service,
    date,
    time,
    notes: notes || '',
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export { db };
