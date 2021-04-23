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
  return Data && Data[0]?.PublicProjects ? (
    <div className="Projects-projects-card-container">
      {Data &&
        Data[0].PublicProjects.map((item) => (
          <div
            key={item.id}
            className="headline load-hidden Projects-projects-cards"
          >
            {item.name}
            <br />
            {item.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </div>
        ))}
    </div>
  ) : (
    <h1>Wait</h1>
  );
};

export default Projects;
