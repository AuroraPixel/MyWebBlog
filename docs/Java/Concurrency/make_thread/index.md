---
id: make_thread
title: 创建线程的基本方式
sidebar_position: 2
description: 创建线程的基本方式。
---
# 创建线程的基本方式
## Thread类和Runnable接口

在java中jdk为我们提供了**Thread**类和**Runnable**接口两种方式去给我们自定义线程。
### 继承**Thread**类
<br/>

**继承Thread类自定义的线程类**
<hr/>

```js
public static class MyThread extends Thread{
    private String name;
    public MyThread(String name){
        this.name = name;
    }
    @Override
    public void run() {
        for (int i = 20; i > 0; i--) {
            try {
                Thread.sleep(500L);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println(Thread.currentThread().getName()+name+":第"+i+"次执行!");
        }
    }
}
```
**执行的main方法**
<hr/>

```js
public static void main(String[] args) {
    MyThread a = new MyThread("a");
    MyThread b = new MyThread("b");
    a.start();
    b.start();
}
```
  
