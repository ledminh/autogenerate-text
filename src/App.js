import React from 'react';

import { connect } from 'react-redux'

import GeneratePanel from './GeneratePanel';

import { Divider, Typography } from 'antd';

import 'antd/dist/antd.css';
import "./css/ThemeDefault.css";

function App({paragraphs, header}) {
  const { Title } = Typography;


  return (
    <div className="ThemeDefault">
      <div className="content">
        <Title className="header">{header}</Title>
        {paragraphs}
      </div>
      <Divider />
      <GeneratePanel />
    </div>
  );
}

const mapStateToProps = state => ({
  paragraphs : state.paragraphs,
  header : state.header
});

export default connect(mapStateToProps, null)(App);

