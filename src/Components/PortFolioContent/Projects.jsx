import React, { useEffect } from "react";
import { Spin, Tag, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { firebase } from "../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { animateScroll as scroll } from "react-scroll";
const Projects = () => {
  const db = firebase.firestore();
  const refColl = db.collection("Portfolio");
  const [Data] = useOnSnapshotCollection(refColl);
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  console.log(Data);
  const OpenWindow = (route) => {
    window.open(`https://github.com/${route}`);
  };
  return (
    <div className="Project-container animate__animated animate__fadeIn">
      {Data && Data[0]?.PublicProjects ? (
        <div className="Projects-projects-card-container animate__animated animate__fadeIn">
          {Data &&
            Data[0].PublicProjects.map((item) => (
              <div
                key={item.id}
                style={{
                  borderTop: item.topics.includes("npm-package")
                    ? "#C53635 solid"
                    : item.topics.includes("react-js")
                    ? "#5ED3F3 solid"
                    : item.topics.includes("node-js")
                    ? "#78C839 solid"
                    : item.topics.includes("javascript")
                    ? "#EFD71E solid"
                    : "white solid",
                }}
                className="Projects-projects-cards animate__animated animate__fadeIn"
              >
                <div className="Projects-projects-cards-title">
                  {item.name}{" "}
                  {item.topics.includes("npm-package") ? (
                    <>
                      <i class="fab fa-npm"></i>
                    </>
                  ) : item.topics.includes("react-js") ? (
                    <>
                      <i class="fab fa-react"></i>
                    </>
                  ) : item.topics.includes("node-js") ? (
                    <i class="fab fa-node-js"></i>
                  ) : item.topics.includes("javascript") ? (
                    <i class="fab fa-js"></i>
                  ) : null}
                </div>
                <div className="Projects-projects-cards-description">
                  {item.description}
                </div>
                <div className="Projects-projects-cards-topics">
                  {item.topics.map((topic) => (
                    <Tag
                      key={topic}
                      color="#ffff"
                      style={{ color: "black", fontSize: "1rem" }}
                    >
                      {topic}
                    </Tag>
                  ))}
                </div>
                <div className="Projects-projects-cards-buttons">
                  <Button
                    onClick={() => OpenWindow(item.full_name)}
                    type="primary"
                    size="large"
                  >
                    Ver en GitHub
                    <GithubOutlined />
                  </Button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="Project-container-spinner animate__animated animate__fadeIn">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default Projects;
