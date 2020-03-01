import React from 'react';

import {NavLink} from 'react-router-dom'

import './EquipmentCheck.less'

const EquipmentCheck = () => {
  return (
    <section className='equipmentCheck_box'>
      <div className="check_box">
        <header className="check_header">
          <div className="room_info">房间号:12345</div>
          <div className="title">通讯设备检测</div>
          <div className="holder"></div>
        </header>
        <div className="check_body">
          <div className="tips">
            <p className="welcome">name,欢迎参加XX在线面试</p>
            <p className="direction">请允许本网页对摄像头和麦克疯的使用权限，并确保通讯设备的正常使用</p>
          </div>
          <div className="audio_check">
            <div className="row1">
              <p>通话设备检测</p>
              <p>请按照提示检查麦克风设备</p>
              <div className="line"></div>
            </div>
            <div className="record">
              <p>1.点击下面的按钮进行录音</p>
              <a className='record_btn'>
                <i className='iconfont icon-record'></i>
                录音
              </a>
              <i className='iconfont icon-volume'></i>
            </div>
            <div className="record">
              <p>2.点击下面的按钮播放录音</p>
              <a className='record_btn'>
                <i className='iconfont icon-record'></i>
                播放录音
              </a>
              <i className='iconfont icon-volume'></i>
            </div>
          </div>
          <div className="video_check">
          <div className="row1">
              <p>视频设备检测</p>
              <p>请保持人脸清晰，不要有物品遮挡摄像头</p>
              <div className="line"></div>
            </div>
            <div className="video">
            </div>
          </div>
          <NavLink to='/candidate/room' className='btn confirm_info'>确定</NavLink>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCheck;