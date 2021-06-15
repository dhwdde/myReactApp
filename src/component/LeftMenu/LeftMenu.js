import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';

const { SubMenu } = Menu;

class Sider extends React.Component {
  handleClick = e => {
    if(e.key==="AggregatePoints_four"){
        let formData = new FormData();
        formData.append("binType", "SQUARE");
        formData.append("binSize", 2);
        formData.append("binSizeUnit", 'Kilometers');
        formData.append("summaryFields", "['count SUM']");
        formData.append("OutputName", "{'serviceProperties':{'name':'haikou0519_start_filter_XYToPoint_AggregatePoints_juxing','serviceUrl':'https://abi.arcgisonline.cn/server/rest/services/Hosted/haikou0519_start_filter_XYToPoint_AggregatePoints_juxing/FeatureServer'},'itemProperties':{'itemId':'dd2e794f66da419a8b3ecdd95bf5c52e'}}")
        formData.append("pointLayer", "{'url':'https://abi.arcgisonline.cn/server/rest/services/Hosted/haikou0519_start_filter_XYToPoint/FeatureServer/0','name':'haikou0519_start_filter_XYToPoint-haikou05_filter_XYTableToPoint_st'}")
        formData.append("keepBoundariesWithNoPoints",true);
        formData.append("groupByField",'type');
        axios.post('https://abi.arcgisonline.cn/server/rest/services/System/SpatialAnalysisTools/GPServer/AggregatePoints/submitJob',formData)
    }
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >

        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="GA接口">

        <Menu.ItemGroup key="AggregatePoints" title="AggregatePoints接口">
        <Menu.Item key="AggregatePoints_four">四边形</Menu.Item>
          <Menu.Item key="AggregatePoints_six">六边形</Menu.Item>
          <Menu.Item key="AggregatePoints_zidingyi">自定义多边形</Menu.Item>
        </Menu.ItemGroup>
       
       
        </SubMenu>
 
      </Menu>
    );
  }
}
export default Sider;
// ReactDOM.render(<Sider />, mountNode);