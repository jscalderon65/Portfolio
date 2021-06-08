import React, { useEffect, useState, memo } from "react";
import { firebase } from "../../Firebase/FirebaseConfig";
import { FirebaseLogOut } from "../../Firebase/FirebaseAuth";
import {
  useOnSnapshotCollection,
  useMediaQuery,
} from "my-customhook-collection";
import { Transfer, message, Button, Typography, PageHeader } from "antd";
import "antd/dist/antd.css";
const AdminDashBoard = memo(() => {
  const { success, error } = message;
  const { Title } = Typography;
  const mediaQuery = useMediaQuery("(max-width:1000px)");
  const db = firebase.firestore();
  const refColl = db.collection("Portfolio");
  const [Data] = useOnSnapshotCollection(refColl);
  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [repositorys, setRepositorys] = useState([]);

  useEffect(() => {
    const getGithubData = async () => {
      try {
        const resp = await fetch(
          "https://api.github.com/users/jscalderon65/repos",
          {
            method: "GET",
            headers: {
              "Accept":"application/vnd.github.mercy-preview+json"
            },
          }
        );
        const RepositoryData = await resp.json();
        return RepositoryData;
      } catch (Error) {
        error(Error);
      }
    };
    let isSubscribed = true;
    getGithubData().then((data) => {
      if (isSubscribed) {
        setRepositorys(
          data.reduce(
            (acc, prev) => [
              ...acc,
              { key: prev.id, title: prev.name, description: prev },
            ],
            []
          )
        );
      }
      console.log(repositorys);
    });
    const aux =
      Data &&
      Data[0].PublicProjects.reduce((acc, prev) => [...acc, prev.id], []);
    aux && setTargetKeys(aux);
    return () => (isSubscribed = false);
     // eslint-disable-next-line
  }, [Data]);

  const onChange = (nextTargetDescriptions, e, aux) => {
    console.log(nextTargetDescriptions, e, aux);
    setTargetKeys(nextTargetDescriptions);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([...targetSelectedKeys, ...sourceSelectedKeys]);
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    const aux = repositorys.reduce((acc, prev) => {
      if (targetKeys.includes(prev.key)) {
        return [...acc, prev.description];
      }
      return acc;
    }, []);
    db.doc("/Portfolio/GithubProjects")
      .set({
        PublicProjects: aux,
      })
      .then(() => success("¡Cambios guardados exitosamente!"))
      .catch(() => error("Error al guardar los cambios"));
  };

  return (
    <div className="pageBody" style={{ height: "100vh" }}>
      <PageHeader
        style={{ color: "white" }}
        title={
          <Button type="primary" onClick={FirebaseLogOut} danger>
            Logout
          </Button>
        }
        className="pageHeader"
      />
      {repositorys && (
        <form
          className="transfer"
          style={{ paddingBottom: "30px" }}
          onSubmit={onSubmitData}
        >
          <Title style={{ color: "white" }}>Configurations</Title>
          <Transfer
            style={{ background: "white" }}
            listStyle={{
              width: mediaQuery ? 130 : 500,
              height: 400,
            }}
            dataSource={repositorys}
            titles={["Not published", "Published"]}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            className="transferComponent"
            onSelectChange={onSelectChange}
            render={(item) => item.title}
          />
          <br />
          <Button htmlType="submit" type="primary" size="large">
            Save
          </Button>
        </form>
      )}
    </div>
  );
});
export default AdminDashBoard;
