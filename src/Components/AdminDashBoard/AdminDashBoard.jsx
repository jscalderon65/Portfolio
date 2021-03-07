import React, { useEffect, useState} from "react";
import { firebase } from "../../Firebase/FirebaseConfig";
import { useOnSnapshotCollection } from "my-customhook-collection";
import { Transfer } from 'antd';
import 'antd/dist/antd.css';
const mockData = [{
  key: 1,
  title: `Example1`,
  description: `description of content`,
},
{
  key: 2,
  title: `Example2`,
  description: `description of content`,
},
];

const AdminDashBoard = () => {
  const [targetKeys, setTargetKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onChange = (nextTargetDescriptions,e,aux) => {
    console.log(nextTargetDescriptions,e,aux);
    setTargetKeys(nextTargetDescriptions);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    setSelectedKeys([ ...targetSelectedKeys,...sourceSelectedKeys]);
  };


  return (
    <div>
      <Transfer
        dataSource={mockData}
        titles={['No publicados', 'Publicados']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        render={item => item.description}
      />
      targetKeys
      {JSON.stringify(targetKeys)}
      <br/>
      <br/>
      selectedKeys
      {JSON.stringify(selectedKeys)}
    </div>
  );
};
export default AdminDashBoard