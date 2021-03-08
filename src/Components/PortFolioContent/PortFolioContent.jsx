import React, { useEffect } from "react";
import { firebase } from "../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { GoogleAuth } from "../../Firebase/FirebaseAuth";
import ScrollReveal from "scrollreveal";
const PortFolioContent = () => {
  const db = firebase.firestore();
  const refColl = db.collection("Portfolio");
  const [Data] = useOnSnapshotCollection(refColl);
  useEffect(() => {
    ScrollReveal().reveal(".headline", { delay: 150, reset: true });
  }, [Data]);
  console.log(Data);
  return (
    <>
      <button
        style={{ textAlign: "center", width: "100%" }}
        onClick={GoogleAuth}
      >
        Login
      </button>
      {Data &&
        Data[0].PublicProjects.map((item) => (
          <div key={item.id} className="headline load-hidden example-box">
            {item.name}
          </div>
        ))}
    </>
  );
};
export default PortFolioContent;
