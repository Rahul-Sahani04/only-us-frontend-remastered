import React from "react";
import "../css/sidebar.css";

import Avvvatars from "avvvatars-react";
import { Button, Divider, Flex, Radio, Space, Tooltip } from "antd";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { AppstoreAddOutlined, UserAddOutlined, ExclamationCircleOutlined  } from "@ant-design/icons";

const SideDrawer = () => {
  return (
    <div>
      <div className="row sidebar_column">
        <div className=" sidebar-cols">
          <Avvvatars value="First" size={75} />

          <div className="sidebar_buttons ">
            <Button type="primary" shape="circle" size="large" icon={<UserAddOutlined />}></Button>
            <Button type="primary" shape="circle" size="large" icon={<UserAddOutlined />}></Button>
            <Button type="dashed" shape="circle" size="large" icon={<AppstoreAddOutlined />}></Button>
            <Button danger shape="circle" size="large" icon={<ExclamationCircleOutlined />}></Button>
          </div>
        </div>
        <span className="divider" />
        <div className="sidebar-cols">
          <Avvvatars value="second" size={75} />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
