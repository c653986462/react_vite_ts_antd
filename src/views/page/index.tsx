import { Button, Modal } from "antd";
import React, { useState } from "react";
import FormComponent from "./components/FormComponent";

const Page: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modelForm = React.createRef()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log("handleOk", modelForm);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleClick = (val: any) => {
    console.log(val);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormComponent ref={modelForm}></FormComponent>
      </Modal>
    </>
  );
};

export default Page;
