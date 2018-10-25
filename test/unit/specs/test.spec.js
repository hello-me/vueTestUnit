/**
 * Created by licong on 2018/10/24.
 */
import Vue from 'vue'
import Test from '@/pages/test'
//引入vue-test-utils
import {mount} from 'vue-test-utils'
describe('test.vue', ()=> {
 it('点击按钮后，内容会发生改变', () => {
 // 获取组件实例
 const Constructor = Vue.extend(Test);
 // 挂载组件
 const vm = new Constructor().$mount();
 // 获取button
 const button = vm.$el.querySelector('button');
 // 新建点击事件
 const clickEvent = new window.Event('click');
 // 触发点击事件
button.dispatchEvent(clickEvent);
//监听点击事件
vm._watcher.run();
// 断言
expect(vm.$el.querySelector('.alert p').textContent).to.equal('内容被改变了');
 })
  // 未使用了vue-test-utils的测试用例
 it('count异步自增，count的值应该为2', (done) => {
  //获取组件实例
  const Constructor = Vue.extend(Test);
  // 挂载组件
  const vm = new Constructor().$mount();
  //获取button
  const button = vm.$el.querySelectorAll('button')[1];
  // 新建点击事件
  const clickEvent = new window.Event('click');
  // 触发点击事件
  button.dispatchEvent(clickEvent);
  // 监听点击事件
  vm._watcher.run();
  // 1s后进行断言
  window.setTimeout(() => {
  expect(Number(vm.$el.querySelector('.alert span').textContent)).to.equal(2);
  done();
  }, 1000)
 })
  // 使用了vue-test-utils的测试用例
  it('使用Vue-test-Utils: 点击按钮后，count的值为2', () => {
    const wrapper = mount(Test);
    const button = wrapper.find('.btnAsync');
    button.trigger('click');
    window.setTimeout(() => {
    const count =Number(wrapper.find('.alert span').text());
    expect(count).to.equal(2)
    }, 1000)
  })
})

