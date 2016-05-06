#### directives 笔记
##### 一.  directive types
```javascript
attribute: <span my-dir="exp"></span>
tag name: <my-dir></my-dir>
class name: <span class="my-dir: exp;"></span>
```
##### 二. restrict 设置, 一般情况下默认为:EA
```javasscript
 'A' - only matches attribute name
 'E' - only matches element name
 'C' - only matches class name
 'M' - only matches comment
```
angular官网描述:
When you create a directive, it is restricted to attribute and elements only by default. In order to create directives that are triggered by class name, you need to use the restrict option.

#### 三 常用替换
```javascript
    $window replace window
    $document replace document
    $interval replace interval
    $timeout replace timeout
```