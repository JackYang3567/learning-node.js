var os = require('os');

console.log("os.EOL 一个字符串常量,定义操作系统相关的行末标志:\r\n 在 POSIX 系统上 \\n \r\n 在 Windows系统上 \\r\\n  \r\n 本例如输出:\t" + os.EOL);
console.log("\n\r"); 

console.log("os.arch()方法返回一个字符串, 表明 Node.js 二进制编译所用的 操作系统CPU架构.\r\n现在可能的值有: 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 'x64' \r\n 等价于 process.arch. :\t\t" + os.arch());

console.log("\n\r");
console.log("os.cpus() 方法返回一个对象数组, 包含每个逻辑 CPU 内核的信息.\r\n下面的属性包含在每个对象中:\r\n model <string>\r\nspeed <number> (兆赫兹为单位) \r\n times <Object> \r\n user <number> CPU花费在用户模式下的毫秒时间数.\r\n nice <number> CPU花费在良好模式下的毫秒时间数.\r\n sys <number> CPU花费在系统模式下的毫秒时间数.\r\n idle <number> CPU花费在空闲模式下的毫秒时间数. \r\n irq <number> CPU花费在中断请求模式下的毫秒时间数. :\t");
console.dir(os.cpus());

console.log("os.endianness()方法返回一个字符串,表明Node.js二进制编译环境的字节顺序.\r\n 可能的值: \r\n  'BE' 大端模式 \r\n  'LE' 小端模式:\t" + os.endianness());
console.log("os.freemem() 方法以整数的形式返回空闲系统内存 的字节数. :\t" + os.freemem());
console.log("os.homedir() 方法以字符串的形式返回当前用户的home目录.  :\t" + os.homedir()  );
console.log("os.hostname()方法以字符串的形式返回操作系统的主机名. :\t" + os.hostname());
console.log("os.loadavg()方法返回一个数组,包含1, 5, 15分钟平均负载. \r\n 平均负载是系统活动的测量,由操作系统计算得出,表达为一个分数. 一般来说,平均负载应该理想地比系统的逻辑CPU的数目要少. 平均负载是UNIX相关的概念,在Windows平台上没有对应的概念. 在Windows上,其返回值总是[0, 0, 0].  :\t" + os.loadavg()   );



console.log("\n\r");
console.log("networkInterfaces : ");
console.dir(os.networkInterfaces());
console.log("os.platform() 方法返回一个字符串, 指定Node.js编译时的操作系统平台 \r\n 当前可能的值有: \r\n 'aix' \r\n 'darwin' \r\n 'freebsd' \r\n 'linux' \r\n 'openbsd' \r\n 'sunos' \r\n 'win32' \r\n 等价于 process.platform. :\t" + os.platform());
console.log("os.release()方法返回一个字符串, 指定操作系统的发行版.:\t" + os.release());
console.log("os.tmpdir()方法返回一个字符串, 表明操作系统的 默认临时文件目录. :\t" + os.tmpdir());

console.log("os.totalmem()方法以整数的形式返回所有系统内存的字节数. :\t" + os.totalmem());
console.log("os.type()方法返回一个字符串,表明操作系统的名字, 由 uname(3) 返回.举个例子, 'Linux' 在 Linux系统上, 'Darwin' 在 macOS 系统上,'Windows_NT' 在 Windows系统上. :\t\t" + os.type());

console.log("os.uptime() 方法在几秒内返回操作系统的上线时间. :\t" + os.uptime());
console.log("os.userInfo([options])方法当前有效用户的信息 :\t");
console.dir(os.userInfo( ));






