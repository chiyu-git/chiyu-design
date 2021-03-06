import React, { useEffect, useContext } from 'react';

import CM from './CM'
import './CodeTest.less'

import { ConnectionContext } from '../Room'
import { sendToServer } from '../Chat/webSocket'

const CodeTest = (props) => {

  const { connection, candidateInfo, interviewerInfo } = useContext(ConnectionContext)

  // NOTE:point
  let myID = interviewerInfo.name + interviewerInfo.phone
  let targetID = candidateInfo.name + candidateInfo.phone

  connection.addEventListener('message', (evt) => {
    const msg = JSON.parse(evt.data);
    switch (msg.type) {
      case 'testInfo':
        console.log(msg.quest)
        break
    }
  })

  function handleChange(evt) {
    const quest = evt.target.value
    console.log(quest)
    sendToServer({
      quest,
      type: "testInfo",
      name: myID,
      // target: targetID,
      date: Date.now(),
    })
  }


  return (
    <section className='code_test_box'>
      <div className="test_box">
        <header>任务</header>
        <div className="test_info">
          <textarea placeholder='可以在这里输入问题' onChange={handleChange} ></textarea>
        </div>
      </div>
      <div className="code_box">
        <div className="code_toolbar">
          <a className='language_btn'>
            <span>JavaScript</span>
            &nbsp;&nbsp;<i className='iconfont icon-arrow_down'></i>
            <ul className='candidate_list'>
              <li>C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </a>
          <a className='reset_btn'><i className='iconfont icon-reset'></i></a>
          <a className='repeal_btn'><i className='iconfont icon-repeal'></i></a>
          <a className='recover_btn'><i className='iconfont icon-repeal recover'></i></a>
          <a className='version_btn'>编译器版本 <i className='iconfont icon-version'></i></a>
          <a className='detail_btn'>注意事项 <i className='iconfont icon-attention'></i></a>
          <div className="placeholder"></div>
          <a className='fullscreen_btn'><i className='iconfont icon-fullscreen'></i></a>
        </div>
        <CM />
      </div>
    </section>
  );
}

export default CodeTest