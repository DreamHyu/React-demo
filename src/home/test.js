不管是vue还是react  这种单页面的框架一定都少不了路由

下面给大家讲讲在实际项目中react的路由设置

第一步：

        在src目录下新建一个目录route  在该目录下新建一个index.js用于管理路由

如:

import React ,{ Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import FristIndex from '../view/index/index'
import About from '../view/about/index'
import Book from '../view/book/index'
import Detail from '../view/detail/index'
import User from '../view/user/index'
class RouterIndex extends Component{
render(){
return(
<Switch>//switch用于匹配路由path
<Route path='/' exact render={()=>(//exact是用于精准匹配，这里是定义了路由重定向，意思是当我们进入"/"时会重定向到“/index”
<Redirect to='/index'/>
)}/>
<Route path='/index' component={FristIndex}/>
<Route path='/about' component={About}/>
<Route path='/book' component={Book} />
<Route path='/detail/:id' component={Detail}/>//注意这里的:id是为url设置参数 我们可以在detail组件下通过this.props.match.params.id获得
<Route path='/user/:id' component={User}/>
</Switch>
)
}
}

export default RouterIndex



第二步：

      在src根目录下的顶层组件App.js中渲染第一步设置好的路由

import React, { Component } from 'react';
import { Popconfirm, message, Button ,Layout} from 'antd';
import RouterIndex from'./route/index';//引入路由管理js
import Com_head from './view/Com_head';
import Com_footer from './view/Com_footer';
require('./view/index.css')
class App extends Component {
  render() {
    return (
     	<div className='pageBox'>
     	<Com_head id='heads'/>//头部固定组件
     	<Layout.Content id='main'>
     	<RouterIndex/>//中间使用路由渲染
     	</Layout.Content>
     	<Com_footer id='footers'/>//底部固定组件
     	</div>
    );
  }
}



export default App;



第三步：

    经过以上两步，我们就可以在具体的界面组件中通过Link 进行路由跳转了！

如：

    import React from 'react'
import { Row,Col,Menu } from 'antd'//这里的antd为阿里封装的react组件库 Row /Col相当于bootstrap中栅格系统Menu相当于UL具体的可以参考ant.design官网
import {Link} from 'react-router-dom'
export default class Nav extends React.Component{	
state = {
current: 'math',
}
handleClick = (e)=>{
this.setState({
current:e.key
})
}
render(){
const { classN,mdval,xsval,ulClassN,modeval } = this.props.pram
return(
<Col className={classN} md={mdval} xs={xsval}>
<Menu 
className={ulClassN} 
mode={modeval} 
id={`${ulClassN==''?'xsNav':''}`}
onClick={this.handleClick}
selectedKeys = {[this.state.current]}
>
<Menu.Item key="math">
<Link to='/book/math'>数学</Link>	
</Menu.Item>
<Menu.Item key="china">	
<Link to='/book/china'>语文</Link>	
</Menu.Item>
<Menu.Item key="pe">	
<Link to='/book/pe'>体育</Link>	
</Menu.Item>
<Menu.Item key="print">	
<Link to='/book/print'>美术</Link>
</Menu.Item>	
</Menu>
</Col>
)
}
}