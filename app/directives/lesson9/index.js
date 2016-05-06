/**
 * @description [指令事件监听]
 * @author [silence_yfang@126.com]
 * @date  2016-05-06
 */
import angular from 'angular';

export default angular
    .module('directive9App', [])
    .directive('myDraggable' , ($document) => {
        return {
            link: (scope, element) => {
                let startX = 0;
                let startY = 0;
                let x = 0;
                let y = 0;

                element.css({
                    position: 'relative',
                    border: '1px solid blue',
                    background: '#f0f0f0',
                    cursor: 'pointer'
                });

                element.on('mousedown', (event) => {
                    event.stopPropagation();
                    startX = event.pageX - x;
                    startY = event.pageY - y;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                });

                function mousemove() {
                    y = event.pageY - startY;
                    x = event.pageX - startX;
                    element.css({
                        top: y + 'px',
                        left: x + 'px'
                    });
                }

                function mouseup() {
                    $document.off('mousemove', mousemove);
                    $document.off('mouseup', mouseup);
                }
            }
        }
    })
    .name;
