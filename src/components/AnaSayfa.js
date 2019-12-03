import React, { Component } from 'react'

import {connect} from 'react-redux'
import {createUser} from '../actions'

import {
    Form,
    Input,
    Button,
  } from 'antd';

class AnaSayfa extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            debugger
            this.props.createUser(values)
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
              {getFieldDecorator('kullaniciadi', {
                rules: [
                  {
                    required: true,
                    message: 'kullanici adini giriniz!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Gorevi" hasFeedback>
              {getFieldDecorator('gorevi', {
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

export default connect(null, {createUser})(WrappedRegistrationForm);