# <%= projectName %>
- <%= projectName %>是一个weex插件，可以通过weexpack快速集成，可以丰富weex功能

# 功能

# 快速使用
- 通过weexpack初始化一个<%= projectName %>工程
   ```
   weex create dev <%= projectName %>
   ```
- 添加插件
  ```
  weex plugin add <%= projectName %>
  ```

# 已有工程集成
## iOS集成插件<%= iOSProjectName %>
- 命令行集成
  ```
  weex plugin add <%= projectName %>
  ```
- 手动集成
  在podfile 中添加
  ```
  pod '<%= iOSProjectName %>'
  ```

## 安卓集成插件<%= AndroidProjectName %>
- 命令行集成
  ```
  weex plugin add <%= projectName %>
  ```
- 手动集成
  在相应工程的build.gradle文件的dependencies中添加
  
  ```
  compile 'org.weex.plugin:<%= AndroidProjectName %>:{$version}'
  ``` 





