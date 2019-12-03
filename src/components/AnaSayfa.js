import React, { Component } from 'react'

import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
  
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;

  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  

class AnaSayfa extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
          }
        });
      };
    
    

    render() {
        const { getFieldDecorator } = this.props.form;
    
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 2 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 2,
            },
          },
        };
    
    
        return (
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Kullanici Adi">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'kullanici adini giriniz!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Gorevi" hasFeedback>
              {getFieldDecorator('nickname', {
                rules: [
                  {
                    required: true,
                    message: 'gorevini giriniz!',
                  }
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Kaydet
              </Button>
            </Form.Item>
          </Form>
        );
    }
}


const WrappedRegistrationForm = Form.create({ name: 'register' })(AnaSayfa);

export default WrappedRegistrationForm;