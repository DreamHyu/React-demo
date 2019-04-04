import React from 'react'
import style from '@/style/pages-style/login.scss'
import { withRouter } from 'react-router-dom'

@withRouter
class PhoneLogin extends React.Component {
    render() {
        return (
          <div>
            <div className={style['login-module']}>
            {/* flex布局两个居中 */}
              <div>
                <div>
                  <p>账号登陆</p>
                  <div>-</div>
                </div>
                <div>
                  <p>手机登陆</p>
                  <div>-</div>
                </div>
              </div>
            {/* 实现按钮的全局样式，输入框的全局样式 */}
              <div>
                <div>
                  <select name="countryCode">
                    <option value="86">中国+86</option>
                  </select>
                  <input type="text" value="1341301234"/>
                </div>
                <div>
                  <input type="text" value="验证码"/>
                  <button type="button">重新发送</button>
                </div>
              </div>
            {/* 注释提示模块 */}
              <div>
                <p>该手机号未注册</p>
              </div>
            {/* 登陆按钮 */}
              <div>
                <button type="button">登陆</button>
              </div>
            {/* 尾部提示快捷入口，flex布局处理 */}
              <div>
                <p>忘记密码？</p>
                <p>快速注册</p>
              </div>
            </div>
          </div>
        )
    }
}

export default PhoneLogin
