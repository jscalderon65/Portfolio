import React from "react";
import {firebase} from '../../Firebase/FirebaseConfig';
import { useOnSnapshotCollection } from "my-customhook-collection";
import { useForm } from "my-customhook-collection";
const AdminDashBoard = () => {
  const db = firebase.firestore();
  const refColl = db.collection("Portfolio");
  const [Data] = useOnSnapshotCollection(refColl);
  const [{example}, onInputChange] = useForm({
    example: "",
  });
  const onSubmitData=(e)=>{
    const NewData=Data[0].PublicProjects.concat(example);
    e.preventDefault();
    db.doc("/Portfolio/GithubProjects").set({
      PublicProjects:NewData
    });
  }
  return (
    <div>
      <form onSubmit={onSubmitData}>
        <input type="text" name="example" value={example} onChange={onInputChange}/>
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default AdminDashBoard;
