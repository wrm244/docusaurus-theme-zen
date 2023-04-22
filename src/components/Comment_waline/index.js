import React, { PureComponent } from 'react';

export default class Comment extends PureComponent {
  constructor(props) {
    super(props)
    this._commentRef = React.createRef()
  }

  async componentDidMount() {
    if (typeof window === "undefined") {
      return
    }
    if(!this._commentRef.current) {
      return
    }
    const Waline= await(await import('@waline/client')).default
    this.Waline = new Waline({
      el: this._commentRef.current,
      serverURL: 'https://waline.shaking.site',
      visitor: true,     // 开启阅读量统计
      path: this.props.id,
     })
  }

  render() {
     return <div className="comment-area" ref={this._commentRef} />
  }
}