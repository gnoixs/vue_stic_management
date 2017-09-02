/**
 * Created by Administrator on 2017/9/2.
 */

export function setStorage(key,value) {
  if(window.sessionStorage){
    sessionStorage.setItem(key,typeof value === 'object' ? JSON.stringify(value) : value);
  }else{
    throw new Error('该浏览器不支持sessionStorage！');
  }
}

export function getStorage(){
  if(window.sessionStorage){
    return JSON.parse(sessionStorage.getItem(key));
  }else{
    throw new Error('该浏览器不支持sessionStorage！');
  }
}
