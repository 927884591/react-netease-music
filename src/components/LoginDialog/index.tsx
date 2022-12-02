import React, { useState } from "react";

import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined, CloseOutlined } from "@ant-design/icons";

import { noop } from "helpers/fn";
//导入请求接口
import authApis from "apis/auth";
import useAsyncFn from "hooks/useAsyncFn";

import LognDialogStyle from "./style";
//导入store
import { connect } from "react-redux";
import { login } from "@/reducers/loginSlice";

//类型导入
import { ILoginRequest } from "apis/types/auth";

interface ILoginVaule extends ILoginRequest {
  remember?: Boolean;
}
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginDialog: React.FC<IProps> = (props: any) => {
  //保存登录状态
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  //接口请求
  const [, loginFn] = useAsyncFn(authApis.login);
  const { onClose = noop, changeLogin } = props;
  //点击登录触发该执行事件
  const onFinish = async (values: ILoginVaule) => {
    //同步组件的state状态
    setPassword(values.password);
    setPhone(values.phone);
    //关闭登录窗口
    onClose();
    //请求登录接口
    const result = await loginFn({
      phone: values.phone,
      password: values.password,
    });
    //如果有结果就把结果和userId放到store中
    if (result) {
      changeLogin({
        ...result,
        userId: result.profile.userId,
      });
      onClose();
    }
  };
  return (
    <LognDialogStyle>
      <div className="root">
        <div className="close" onClick={() => onClose()}>
          <CloseOutlined className="closebtn" />
        </div>
        <div className="title">手机登录</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "请输入手机号" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="手机号"
              value={phone}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPhone(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="#">
              忘记密码?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            Or <a href="">去注册</a>
          </Form.Item>
        </Form>
      </div>
    </LognDialogStyle>
  );
};
function mapDispatch(dispach: any) {
  return {
    changeLogin(loginInfo: any) {
      dispach(login(loginInfo));
    },
  };
}
export default connect(null, mapDispatch)(LoginDialog);
