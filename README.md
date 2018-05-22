## learning-node.js
Node.js可让你成为全栈工程师（Full Stack Engineer），

### Chapter 1: Node.js的基本概念
* 了解Node.js
* 安装Node.js
* 了解NVM
* Node包管理器
* Package.json
* 将数据写入控制台

#### Node.js小测试
##### 1、 以下哪一项将同步检查文件/目录是否存在？(   )
- A、 fs.exists()    
- B、 fs.existsSync()   
- C、 fs.checkFileSync()  
- 4、 fs.checkDirSync()

##### 2、 下列哪个控制台命令将所有已安装的全局包更新为最新可用版本？ （   ）
- A、 npm upgrate -g 
- B、 npm install -uga
- C、 npm update -g
- D、 npm version --install-latest

##### 3、 arg[1]包含什么？ （   ）
- A、 node 
- B、 The file path of the JavaScript file.
- C、 The first command line argument.
- D、 The second command line argument.

##### 4、 下面哪个命令行参数将允许在项目文件夹之外运行NPM包的二进制文件？（   ） 
- A、 -g 
- B、 -global
- C、 -l
- D、 -link

##### 5、 下列哪一个可以用于访问环境变量，Node.js中的Envii变量？（    ）
- A、 process.env.ENV_VARIABLE
- B、 process.argv.ENV_VARIABLE
- C、 process.env.var.ENV_VARIABLE
- D、 process.environment.ENV_VARIABLE

##### 6、 下面哪个文件将复制到Node.js中？（    ）
- A、 var fs = require('fs');
      fs.createReadStream('test.file').pipe(fs.createWriteStream（'newFile.file'));
- B、 var fs = require('fs');
     fs.createReadBuffer('test.file').pipe(fs.createWriteBuffer（'newFile.file'));
- C、 var fs = require('file');
      fs.createFileReader('test.file').pipe(fs.createFileWriter（'newFile.file'));
- D、 var fs = require('fs');
      fs.createReadBuffer('test.file').stram(fs.createWriteBuffer（'newFile.file'));

##### 7、 下列哪种方法可以用来读取目录的内容？（   ）
- A、f s.readdir()
- B、 fs.readdirSync()
- C、 fs.readDirectory()
- D、 fs.readdirAsync()

##### 8、 对于Node.js中的console对象，下列哪条语句是正确的？（    ）
- A、 《console.log》can take only a single argument.
- B、 《console.log》prints to stdout without a newline.
- C、 Its function are synchronous when the destination is a terminal or a file, 
and asynchronous when it's  a pipe.
- D、 Its function are synchronous when the destination is a terminal or a file, 
and synchronous when it's  a pipe.

##### 9、 以下哪个语句是关于Node.js中的Process对象的？（    ）
- A、 It is a local object
- B、 It is an instance of the events.EventEmitter class.
- C、 The process.exit(1) method ends thd process with a success code.
- D、 process.stderr and process.stdout are non-blocking if they refer to regular files or 
TTY file descriptors

##### 10、 下面哪个NPM命令将同时安装给定项目的依赖和devDependents？ （    ）
- A、 npm instal
- B、 npm install --dev
- C、 npm install --production
- D、 None of these

##### 11、 下面的命令是做什么的？NPM视图<Package-name>版本(   )
- A、 It show the version of the package installed globally.
- B、 It show the version of the package installed locally.
- C、 It show the version of the package that is cached.
- D、 It show the latest version of the package that is available.

##### 12、 下列哪一种方法将打印到控制台而不带尾行？(     )
- A、 process.stdout.print()
- B、 console.error()
- C、 console.log()
- D、 process.stdout.write()

##### 13、 对于Node.js中的 module.exports对象，下列哪条语句是正确的？ （     ）
- A、 It is the object that gets returned from a require() call.
- B、 It can be assigned in callback.
- C、 Assigning an export object to module.exports will rebind the local exports variable.
- D、 None of these.

##### 14、 哪个数组包含Node.js中的命令行参数？ （     ）
- A、 process.argv
- B、 args.argv
- C、 arguments.argv
- D、 env.argv

##### 15、 下面哪一项可以用于获取Node.js中当前正在运行的脚本的路径？（   ）
- A、 __filename
- B、 os.tmpdir()
- C、 path.dirname()
- D、 path.basename()

##### 16、 以下哪种方法可以用来在Node.js中编写文件？ （    ）
- A、 fs.write()
- B、 fs.writeFile()
- C、 fs.createWriteStream()
- D、 fs.writeStream()

##### 17、 下面的代码是做什么的？  （     ）
<code>
  var http = require('http');
  var fs = require('fs');
  file = fs.createWriteStream('file.png');
  var request = http.get('http://path/to/file.png',function(response){
  response.pipe(file);
 })
 </code>
 
- A、 It creates an HTTP GET request and pipes its response into a writeable file stream.
- B、 It creates an HTTP GET request, and synchronously pipes its response into a writeable file stream.
- C、 It creates an HTTP POST request and pipes its response into a readable file stream.
- D、 It creates an HTTP POST request and pipes its response into a writeable file stream.

##### 18、 以下哪条语句是关于Node.js中的子进程模块的？ （    ）
- A、 It is not prossible to stream data through a child process' stdin,stdout,and stderr in a fully non-blocking way.
- B、 Child processes always have two streams associated with them.
- C、 require('child_process').spawn() can be used to create a child process.
- D、 require('child_process').fork() can be used to create a child process.

##### 19、 以下哪个将打开文件，然后一次读取其内容一行？（     ）
- A、 fs.readFileStream()
- B、 fs.readFile()
- C、 fs.createReadStream()
- D、 fs.createFileStream()

##### 20、 哪个Node.js模块可以用来获取运行程序的服务器的IP地址？（     ）
- A、 util
- B、 os
- C、 dns
- D、 net

1、为什么用Nodejs,它有哪些缺点？
事件驱动，通过闭包很容易实现客户端的生命活期。
不用担心多线程，锁，并行计算的问题
V8引擎速度非常快
对于游戏来说，写一遍游戏逻辑代码，前端后端通用
当然Nodejs也有一些缺点：
nodejs更新很快，可能会出现版本兼容
nodejs还不算成熟，还没有大制作
nodejs不像其他的服务器，对于不同的链接，不支持进程和线程操作
2、什么是错误优先的回调函数？
错误优先(Error-first)的回调函数（Error-First Callback）用于同时返回错误和数据。第一个参数返回错误，并且验证它是否出错；其他参数返回数据。

fs.readFile(filePath, function(err, data)

{

    if (err)

    {

        // 处理错误

        return console.log(err);

    }

    console.log(data);

});
3、如何避免回调地狱？
以下方式避免回调地狱
模块化：将回调函数转换为独立的函数
使用流程控制库，例如[aync]
使用Promise
使用aync/await
4、什么是Promise?
Promise可以帮助我们更好地处理异步操作。下面的实例中，100ms后会打印result字符串。catch用于错误处理。多个Promise可以链接起来。

new Promise((resolve, reject) =>

    {

        setTimeout(() =>

        {

            resolve('result');

        }, 100)

    })

    .then(console.log)

    .catch(console.error);
5、用什么工具保证一致的代码风格？为什么要这样？
团队协作时，保证一致的代码风格是非常重要的，这样团队成员才可以更快地修改代码，而不需要每次去适应新的风格。这些工具可以帮助我们：
[ESLint] (http://eslint.org/)
[Standard] (https://standardjs.com/)
JSLint
JSHint
ESLint
JSCS推荐
6、什么是stub？举例说明
stub用于模块的行为。测试时，stub可以为函数调用返回模拟的结果。比如说，我们写文件时，实际上并不需要真正去写。

    var fs = require('fs');
    var writeFileStub = sinon.stub(fs, 'writeFile', function(path, data, cb)

    {

        return cb(null);

    });

    expect(writeFileStub).to.be.called;

    writeFileStub.restore();
7、什么是测试金字塔？举例说明
测试金字塔反应了需要写的单元测试，集成测试以及端到端测试的比例：


测试HTTP接口时应该是这样的：
很多单元测试，分别测试各个模块(依赖需要stub)
较少的集成测试，测试各个模块之间的交互(依赖不能stub)
少量端到端测试，去调用真正地接口(依赖不能stub)

8、如何用Node监听80端口
这题有陷阱！在类Unix系统中你不应该去监听80端口，因为这需要超级用户权限。因此不推荐让你的应用直接监听这个端口。
目前，如果你一定要让你的应用80端口的话，你可以有通过在Node应用的前方再添加一层反向代理（例如nginx）来实现，如下图。否则，建议你直接监听大于1024的端口


方向代理指的是以代理服务器来接收Internet上的连接请求，然后将请求转发给内部网络上的服务器， 并且将服务器返回的结果发送给客户端。

9、什么是事件循环
Node采用的是单线程的处理机制(所有的I/O请求都采用非阻塞的工作方式)，至少从Node.js开发者的角度是这样的。而在底层，Node.js借助libuv来作为抽象封装层，从而屏蔽不同操作系统的差异，Node可以借助livuv来实现线程。下图表示Node和libuv的关系


Libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个事件循环，以异步的方式将任务的执行结果返回给V8引擎。可以简单用下面这张图来表示


每一个I/O都需要一个回调函数————一旦执行完便堆到事件循环上用于执行

10、运算错误与程序员错误的区别
运算错误并不是bug，这是和系统相关的问题，例如请求超时或者硬件故障。而程序员错误就是所谓的bug
11、使用NPM有哪些好处？
通过NPM，你可以安装和管理项目的依赖，并且能够指明依赖项的具体版本号。对于Node应用开发而言，你可以通过package.json文件来管理项目信息，配置脚本，以及指明依赖的具体版本
### redis问题总结
#### （1）什么是redis?
 

Redis 是一个基于内存的高性能key-value数据库。 


#### （2）Reids的特点
Redis本质上是一个Key-Value类型的内存数据库，很像memcached，整个数据库统统加载在内存当中进行操作，定期通过异步操作把数据库数据flush到硬盘上进行保存。因为是纯内存操作，Redis的性能非常出色，每秒可以处理超过 10万次读写操作，是已知性能最快的Key-Value DB。
Redis的出色之处不仅仅是性能，Redis最大的魅力是支持保存多种数据结构，此外单个value的最大限制是1GB，不像 memcached只能保存1MB的数据，因此Redis可以用来实现很多有用的功能，比方说用他的List来做FIFO双向链表，实现一个轻量级的高性 能消息队列服务，用他的Set可以做高性能的tag系统等等。另外Redis也可以对存入的Key-Value设置expire时间，因此也可以被当作一 个功能加强版的memcached来用。
Redis的主要缺点是数据库容量受到物理内存的限制，不能用作海量数据的高性能读写，因此Redis适合的场景主要局限在较小数据量的高性能操作和运算上。

 


#### （3）Redis支持的数据类型
Redis通过Key-Value的单值不同类型来区分, 以下是支持的类型:
- Strings  字符串
- Lists  列表
- Sets 集合（求交集、并集）
- Sorted Set  有序集合
- hashes  散列



#### （4）为什么redis需要把所有数据放到内存中？
Redis为了达到最快的读写速度将数据都读到内存中，并通过异步的方式将数据写入磁盘。所以redis具有快速和数据持久化的特征。如果不将数据放在内存中，磁盘I/O速度为严重影响redis的性能。在内存越来越便宜的今天，redis将会越来越受欢迎。
如果设置了最大使用的内存，则数据已有记录数达到内存限值后不能继续插入新值。


 


#### （5）Redis是单进程单线程的
redis利用队列技术将并发访问变为串行访问，消除了传统数据库串行控制的开销

 


#### （6）虚拟内存
当你的key很小而value很大时,使用VM的效果会比较好.因为这样节约的内存比较大.
当你的key不小时,可以考虑使用一些非常方法将很大的key变成很大的value,比如你可以考虑将key,value组合成一个新的value.
vm-max-threads这个参数,可以设置访问swap文件的线程数,设置最好不要超过机器的核数,如果设置为0,那么所有对swap文件的操作都是串行的.可能会造成比较长时间的延迟,但是对数据完整性有很好的保证.

自己测试的时候发现用虚拟内存性能也不错。如果数据量很大，可以考虑分布式或者其他数据库

 


#### （7）分布式
redis支持主从的模式。原则：Master会将数据同步到slave，而slave不会将数据同步到master。Slave启动时会连接master来同步数据。

这是一个典型的分布式读写分离模型。我们可以利用master来插入数据，slave提供检索服务。这样可以有效减少单个机器的并发访问数量


#### （8）读写分离模型
通过增加Slave DB的数量，读的性能可以线性增长。为了避免Master DB的单点故障，集群一般都会采用两台Master DB做双机热备，所以整个集群的读和写的可用性都非常高。
读写分离架构的缺陷在于，不管是Master还是Slave，每个节点都必须保存完整的数据，如果在数据量很大的情况下，集群的扩展能力还是受限于单个节点的存储能力，而且对于Write-intensive类型的应用，读写分离架构并不适合。


                                                                 

#### （9）数据分片模型
为了解决读写分离模型的缺陷，可以将数据分片模型应用进来。

可以将每个节点看成都是独立的master，然后通过业务实现数据分片。

结合上面两种模型，可以将每个master设计成由一个master和多个slave组成的模型。

####  （10）Redis的回收策略

 

volatile-lru：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰

volatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰

volatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰

allkeys-lru：从数据集（server.db[i].dict）中挑选最近最少使用的数据淘汰

allkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰

no-enviction（驱逐）：禁止驱逐数据

####  1. 使用Redis有哪些好处？

- (1) 速度快，因为数据存在内存中，类似于HashMap，HashMap的优势就是查找和操作的时间复杂度都是O(1)
- (2) 支持丰富数据类型，支持string，list，set，sorted set，hash
- (3) 支持事务，操作都是原子性，所谓的原子性就是对数据的更改要么全部执行，要么全部不执行
- (4) 丰富的特性：可用于缓存，消息，按key设置过期时间，过期后将会自动删除


####  2. redis相比memcached有哪些优势？
- (1) memcached所有的值均是简单的字符串，redis作为其替代者，支持更为丰富的数据类型
- (2) redis的速度比memcached快很多
- (3) redis可以持久化其数据

#### 3. redis常见性能问题和解决方案：
- (1) Master最好不要做任何持久化工作，如RDB内存快照和AOF日志文件
- (2) 如果数据比较重要，某个Slave开启AOF备份数据，策略设置为每秒同步一次
- (3) 为了主从复制的速度和连接的稳定性，Master和Slave最好在同一个局域网内
- (4) 尽量避免在压力很大的主库上增加从库
- (5) 主从复制不要用图状结构，用单向链表结构更为稳定，即：Master <- Slave1 <- Slave2 <- Slave3...

这样的结构方便解决单点故障问题，实现Slave对Master的替换。如果Master挂了，可以立刻启用Slave1做Master，其他不变。



 

####  4. MySQL里有2000w数据，redis中只存20w的数据，如何保证redis中的数据都是热点数据

 相关知识：redis 内存数据集大小上升到一定大小的时候，就会施行数据淘汰策略。redis 提供 6种数据淘汰策略：

voltile-lru：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰

volatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰

volatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰

allkeys-lru：从数据集（server.db[i].dict）中挑选最近最少使用的数据淘汰

allkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰

no-enviction（驱逐）：禁止驱逐数据

 

####  5. Memcache与Redis的区别都有哪些？

1)、存储方式

Memecache把数据全部存在内存之中，断电后会挂掉，数据不能超过内存大小。

Redis有部份存在硬盘上，这样能保证数据的持久性。

2)、数据支持类型

Memcache对数据类型支持相对简单。

Redis有复杂的数据类型。

3)、使用底层模型不同

它们之间底层实现方式 以及与客户端之间通信的应用协议不一样。

Redis直接自己构建了VM 机制 ，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求。

4），value大小

redis最大可以达到1GB，而memcache只有1MB



#### 6. Redis 常见的性能问题都有哪些？如何解决？

 

1).Master写内存快照，save命令调度rdbSave函数，会阻塞主线程的工作，当快照比较大时对性能影响是非常大的，会间断性暂停服务，所以Master最好不要写内存快照。

 

2).Master AOF持久化，如果不重写AOF文件，这个持久化方式对性能的影响是最小的，但是AOF文件会不断增大，AOF文件过大会影响Master重启的恢复速度。Master最好不要做任何持久化工作，包括内存快照和AOF日志文件，特别是不要启用内存快照做持久化,如果数据比较关键，某个Slave开启AOF备份数据，策略为每秒同步一次。

 

3).Master调用BGREWRITEAOF重写AOF文件，AOF在重写的时候会占大量的CPU和内存资源，导致服务load过高，出现短暂服务暂停现象。

4). Redis主从复制的性能问题，为了主从复制的速度和连接的稳定性，Slave和Master最好在同一个局域网内




#### 7, redis 最适合的场景
Redis最适合所有数据in-momory的场景，虽然Redis也提供持久化功能，但实际更多的是一个disk-backed的功能，跟传统意义上的持久化有比较大的差别，那么可能大家就会有疑问，似乎Redis更像一个加强版的Memcached，那么何时使用Memcached,何时使用Redis呢?

 如果简单地比较Redis与Memcached的区别，大多数都会得到以下观点：

   *  1 、Redis不仅仅支持简单的k/v类型的数据，同时还提供list，set，zset，hash等数据结构的存储。
   *  2 、Redis支持数据的备份，即master-slave模式的数据备份。
   *  3 、Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用。

（1）、会话缓存（Session Cache）
最常用的一种使用Redis的情景是会话缓存（session cache）。用Redis缓存会话比其他存储（如Memcached）的优势在于：Redis提供持久化。当维护一个不是严格要求一致性的缓存时，如果用户的购物车信息全部丢失，大部分人都会不高兴的，现在，他们还会这样吗？

幸运的是，随着 Redis 这些年的改进，很容易找到怎么恰当的使用Redis来缓存会话的文档。甚至广为人知的商业平台Magento也提供Redis的插件。

（2）、全页缓存（FPC）
除基本的会话token之外，Redis还提供很简便的FPC平台。回到一致性问题，即使重启了Redis实例，因为有磁盘的持久化，用户也不会看到页面加载速度的下降，这是一个极大改进，类似PHP本地FPC。

再次以Magento为例，Magento提供一个插件来使用Redis作为全页缓存后端。

此外，对WordPress的用户来说，Pantheon有一个非常好的插件  wp-redis，这个插件能帮助你以最快速度加载你曾浏览过的页面。

（3）、队列
Reids在内存存储引擎领域的一大优点是提供 list 和 set 操作，这使得Redis能作为一个很好的消息队列平台来使用。Redis作为队列使用的操作，就类似于本地程序语言（如Python）对 list 的 push/pop 操作。

如果你快速的在Google中搜索“Redis queues”，你马上就能找到大量的开源项目，这些项目的目的就是利用Redis创建非常好的后端工具，以满足各种队列需求。例如，Celery有一个后台就是使用Redis作为broker，你可以从这里去查看。

（4），排行榜/计数器
Redis在内存中对数字进行递增或递减的操作实现的非常好。集合（Set）和有序集合（Sorted Set）也使得我们在执行这些操作的时候变的非常简单，Redis只是正好提供了这两种数据结构。所以，我们要从排序集合中获取到排名最靠前的10个用户–我们称之为“user_scores”，我们只需要像下面一样执行即可：

当然，这是假定你是根据你用户的分数做递增的排序。如果你想返回用户及用户的分数，你需要这样执行：

ZRANGE user_scores 0 10 WITHSCORES

Agora Games就是一个很好的例子，用Ruby实现的，它的排行榜就是使用Redis来存储数据的，你可以在这里看到。

（5）、发布/订阅
最后（但肯定不是最不重要的）是Redis的发布/订阅功能。发布/订阅的使用场景确实非常多。我已看见人们在社交网络连接中使用，还可作为基于发布/订阅的脚本触发器，甚至用Redis的发布/订阅功能来建立聊天系统！（不，这是真的，你可以去核实）。

Redis提供的所有特性中，我感觉这个是喜欢的人最少的一个，虽然它为用户提供如果此多功能。


