import React, { useState } from 'react';
import { Button } from 'antd';
import moment from 'moment';
import request, { wrapRequest } from '@/utils/request';
import './style.less';

export default () => {
  const [time, setTime] = useState(0);
  const shoudlRenderTime = () => time > 0;
  const handleClick = async () => {
    const _res = await request(`/api/time`, {
      method: 'POST',
    })
    const { data: {time: res} } = _res
    setTime(res);
  }
  return (
    <div className="wrapper">
      <div className="title">hello world</div>
      <Button onClick={handleClick}>从flask后端请求当前时间</Button>
      {
        shoudlRenderTime() && <div>{moment(time, 'X').format('YYYY/MM/DD HH:mm:ss.SSS')}</div>
      }
    </div>
  );
}
