#### components学习笔记
 1. components is special directives
 2. components match only elements
 3. < 单向绑定,如果在components中修改属性值,不会影响其父亲组件的属性值
    = 双向绑定,如果在components中修改属性值,父亲组件的属性值也随之改变
    @ 字符串绑定,尤其该值不会更改
 4. Components have a well-defined lifecycle,组件生命周期

      4.1 $onInit() -- Called on each controller after all the controllers on an element have been constructed and had their bindings initialized

      4.2 $onChanges(changesObj) -- Called whenever one-way bindings are updated.

      4.3 $onDestroy() - Called on a controller when its containing scope is destroyed.

      4.4 $postLink() - Called after this controller's element and its children have been linked.
 5. templateUrl directives will not have been compiled and linked since they are waiting for their template
   to load asynchronously and their own compilation and linking has been suspended until that occurs.
 6. Outputs are realized with & bindings, which function as callbacks to component events.