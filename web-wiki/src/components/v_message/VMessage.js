import Vue from "vue";
import v_message from "./v_message";


class VMessage
{
  static auto_close = true;
  static time = 2000;
  static instance = null;
  static getInstance()
  {
    if(this.instance === null)
    {
      this.instance = (new (Vue.extend(v_message))).$mount();
      document.body.append(this.instance.$el);
    }
    return this.instance;
  }
  static add(message)
  {
    this.getInstance().add(message);
  }


  // 信息
  static info(text = "这是一个信息提示", auto_close = this.auto_close, time = this.time)
  {
    this.getInstance().add(
      {
        type: "info",
        text: text,
        auto_close: auto_close,
        time: time,
      }
    );
  }
  // 成功
  static success(text = "这是一个成功提示", auto_close = this.auto_close, time = this.time)
  {
    this.getInstance().add(
      {
        type: "success",
        text: text,
        auto_close: auto_close,
        time: time,
      }
    );
  }
  // 警告
  static warn(text = "这是一个警告提示", auto_close = this.auto_close, time = this.time)
  {
    this.getInstance().add(
      {
        type: "warn",
        text: text,
        auto_close: auto_close,
        time: time,
      }
    );
  }
  // 错误
  static error(text = "这是一个错误提示", auto_close = this.auto_close, time = this.time)
  {
    this.getInstance().add(
      {
        type: "error",
        text: text,
        auto_close: auto_close,
        time: time,
      }
    );
  }
}


export default VMessage;

