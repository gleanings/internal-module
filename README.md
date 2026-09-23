# 内部模块

[![version](<https://img.shields.io/npm/v/internal-module.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/internal-module) [![issues 提交](<https://img.shields.io/badge/issues-提交-rgb(255,0,63)?logo=github>)](https://github.com/gleanings/internal-module/issues)

**由于旧包被不分情况的全部清理的**。新的包改 `.earthnut.dev.data` 到 `.mudbean.data` ，如有人数据出现错误，概不负责。

## 安装

```bash
npm install  --save internal-module
```

## 使用

### 读

```ts
import { InternalModule } from 'internal-module';

/**
 * 创建用户目录下的 `~/.mudbean.data/test/`  的读写机
 *
 * 若没有找到用户目录或是没有写入的权限，则不可用。 `im.available` 值将为 `false`
 *
 * 在不可用时，直接拦截读写。读将直接返回 `null`,写直接返回 `false`
 */
const im = new InternalModule('test');

/**
 * 读取 `~/.mudbean.data/test/test` 文件，返回的是 JSON 格式
 *
 * 如若数据无法被 `JSON.stringify`、`JSON.parse` 则报错
 */
const content = im.read<{ test: string }>('test');
```

### 写

```ts
import { InternalModule } from 'internal-module';

// 同上
const im = new InternalModule('test');

// 将向文件 `~/.mudbean.data/test/test` 写入内容 `{"a":10}`
im.write('test', { a: 10 });
```

### 获取某文件的完整路径

```ts
import { InternalModule } from 'internal-module';

// 同上
const im = new InternalModule('test');

// 返回 `~/.mudbean.data/test/test`
console.log(im.getPath('test'));
```

## 状态

此软件包是 `MrMudBean` 生态系统的一部分。
它使用严格的 TypeScript 编写，并通过 Rollup 构建进行验证。
虽然单元测试较少，但 API 稳定，并在生产环境中大量使用。
