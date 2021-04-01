import { useEffect, useState, useContext, SetStateAction } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target: string) {
  const [content, setContent] = useState([]);
  const app = useContext(FirebaseContext);

  useEffect(() => {
    app!
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        })) as SetStateAction<never[]>;

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}
