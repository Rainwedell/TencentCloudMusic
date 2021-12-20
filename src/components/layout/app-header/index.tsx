import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { headerLinks } from '../../../common/local-data';
import './style.less';

export default memo(function RWAppHeader() {
  const showSelectItem = (item: any, index: number) => {
    return <NavLink to={item.link}>{item.title}</NavLink>;
  };

  return (
    <div className="header-warp">
      <div className="content warp-v1">
        <div className="header-left">
          <h1 className="logo">
            <a className="logoa" href="/#">
              网易云音乐
            </a>
          </h1>
          <div className="navigation">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                  <div className="icon"></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="header-right">
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <Button className="login" type="link" shape="round" size="middle">
            登录
          </Button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
});
