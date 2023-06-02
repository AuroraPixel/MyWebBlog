---
id: make_thread
title: 创建线程的基本方式
sidebar_position: 2
description: 创建线程的基本方式。
---
# 创建线程的基本方式
## Thread类和Runnable接口
<br/>

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
<br/>

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

:::tip Thread线程只由运行start方法才能让线程启动

我们在程序里面调用了start()方法后，虚拟机会先为我们创建一个线程，然后等到这个线程第一次得到时间片时虚拟机再会帮我们再调用run()方法。

:::


### 实现Runable接口 ###
<br/>

**实现Runable接口重写run方法**
<hr/>

```js
public static class MyThread implements Runnable {
    private String name;
    public MyThread1(String name){
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
    MyThread c = new MyThread("c");
    new Thread(c,"c").start();
    new Thread(c,"d").start();

    //应Runable是一个函数式接口,我们可以lambad表达式简化Runable接口的创建
    new Thread(()->{
        for (int i = 20; i > 0; i--) {
            try {
                Thread.sleep(500L);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println(Thread.currentThread().getName()+"e:第"+i+"次执行!");
        }
    }, "e").start();
}
```

### 探索Thread类 ###
<hr/>

**Thread源码**
```js
public class Thread implements Runnable {

    /**
     * 这个创建Thread时初始化每次都会调用的初始化方法
     * ThreadGroup               线程组:将线程可以按照组进行划分。
     * Runnable                  线程实现的接口:由类的实现和初始化方法可以看出，Thread也是通过Runable接口实现线程的创建。 
     * stackSize                 指定当前线程的堆中的小。
     * AccessControlContext      控制上下文的权限
     * inheritThreadLocals       是否继承父栈中ThreadLocal中的变量(因为在java中ThreadLocal每个线程都会ThreadLocal，
     *                           这个里为（默认）True就会复制一个父栈中变量进来，但操作互相不影响，这里只是一个副本。)
     */ 
    private void init(ThreadGroup g, Runnable target, String name,
                      long stackSize, AccessControlContext acc,
                      boolean inheritThreadLocals) {
        ... ...
    }

    //Thread构造方法
    public Thread(ThreadGroup group, Runnable target, String name,
                  long stackSize) {
        //调用了初始化方法
        init(group, target, name, stackSize);
    }

    /**
     * Java的本地方法：表示线程的礼让。
     * 当前线程为就绪状态的时候，允许其他具有相同或者更高优先级的线程有机会运行。但不保证其他线程立即获得执行权，这还是取决于操作系统。
     * yield方法只是对线程启动到标识。并不能精准调控。（一般不用）。
     */
    public static native void yield();

    /**
     * 线程睡眠。
     * 注意: 当前线程如果处于sleep中时，调用了interrept方法的时后sleep将会抛出InterruptedException异常，
     * 并且线程的interrept标记会被清除，isInterrept=false。
     * 如果不对异常进行相关处理，那么该线程的任务将会从sleep中苏醒继续执行。
     */
    public static native void sleep(long millis) throws InterruptedException;

    /**
     * 线程启动方法（里面调用start0本地方法）
     */
    public synchronized void start()

    /**
     * 里面调用runnable的Run方法直接运行我们在run里重写的方法。
     */
    @Override
    public void run() {
        if (target != null) {
            target.run();
        }
    }

    /**
     * 已经被弃用（线程停止）
     */
    @Deprecated
    public final void stop()

    /**
     * 线程中断（现在推荐使用的线程中断方法）
     */
    public void interrupt()

    /**
     * 获得线程是否被打上interrupt标签
     */
    public boolean isInterrupted()

    /**
     * 已经被弃用 线程暂停
     */
    @Deprecated
    public final void suspend()

    /**
     * 已经被弃用 线程恢复（与线程暂停是一组）
     */
    @Deprecated
    public final void resume()

    /**
     * 设置是否为携程
     */
    public final void setDaemon(boolean on) 

    ... ...
```

## Callable、Future与FutureTask ##