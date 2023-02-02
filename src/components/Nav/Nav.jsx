import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import "./Nav.css";
import { Button, Modal, Input, Form, Upload, message } from "antd";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="nav_main">
      <Modal
        title="Add Song"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Form
          name="wrap"
          labelCol={{
            flex: "110px",
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Song Name" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="Song link" name="password">
            <Input />
          </Form.Item>
          <Form.Item label="Song Source" name="password">
            <Input />
          </Form.Item>

          <Form.Item label=" ">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
      <div className="nav_container">
        <div className="nav_head">
          First Level Menu / Second Level Menu /{" "}
          <span style={{ font_weigth: "bold" }}>Current Page</span>
        </div>
        <div className="songs">
          <div className="song_text">Songs</div>
          <div className="song_button">
            <button className="add_button" onClick={() => setOpen(true)}>
              ADD
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
