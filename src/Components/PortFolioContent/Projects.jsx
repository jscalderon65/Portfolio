import React, { useEffect } from "react";
import { firebase } from "../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import ScrollReveal from "scrollreveal";
const Projects = () => {
  const db = firebase.firestore();
  const refColl = db.collection("Portfolio");
  const [Data] = useOnSnapshotCollection(refColl);
  useEffect(() => {
    ScrollReveal().reveal(".headline", { delay: 150, reset: true });
  }, [Data]);
  console.log(Data);
  return (
    <div style={{justifySelf:"center",padding:"20px"}}>
      {Data &&
        Data[0].PublicProjects.map((item) => (
          <div key={item.id} className="headline load-hidden example-box">
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default Projects;
