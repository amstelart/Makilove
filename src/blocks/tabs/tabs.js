"use strict";

document.addEventListener('DOMContentLoaded', function () {
  if (location.hash) {
    showTab(location.hash);
  } // Следим за поднимающимися кликами


  document.addEventListener('click', function (event) {
    if (event.target.dataset.toggle === 'tab') {
      event.preventDefault();
      var target = event.target.hash === undefined ? event.target.dataset.target : event.target.hash;

      if (target !== undefined) {
        showTab(target);

        if (history && history.pushState && history.replaceState) {
          var stateObject = {
            'url': target
          };

          if (window.location.hash && stateObject.url !== window.location.hash) {
            window.history.pushState(stateObject, document.title, window.location.pathname + target);
          } else {
            window.history.replaceState(stateObject, document.title, window.location.pathname + target);
          }
        }
      }
    }
  });
  /**
   * Показывает таб
   * @param  {string} tabId ID таба, который нужно показать
   */

  function showTab(tabId) {
    var element = document.querySelector(tabId);

    if (element && element.classList.contains('tabs__content-item')) {
      var tabsParent = document.querySelector(tabId).closest('.tabs');
      var activeTabClassName = 'tabs__link-wrap--active';
      var activeTabContentClassName = 'tabs__content-item--active'; // таб

      tabsParent.querySelectorAll('.' + activeTabClassName).forEach(function (item) {
        item.classList.remove(activeTabClassName);
      });
      var activeTab = tabsParent.querySelector('[href="' + tabId + '"]') ? tabsParent.querySelector('[href="' + tabId + '"]') : tabsParent.querySelector('[data-target="' + tabId + '"]');
      activeTab.closest('.tabs__link-wrap').classList.add(activeTabClassName); // контент таба

      tabsParent.querySelectorAll('.' + activeTabContentClassName).forEach(function (item) {
        item.classList.remove(activeTabContentClassName);
      });
      tabsParent.querySelector(tabId).classList.add(activeTabContentClassName);
    }
  }

  
});


  // Добавление метода .closest() (полифил, собственно)
  (function(e){
    e.closest = e.closest || function(css){
      var node = this;
 
      while (node) {
         if (node.matches(css)) return node;
         else node = node.parentElement;
      }
      return null;
    }
   })(Element.prototype);
 
   (function() {
 
     // проверяем поддержку
     if (!Element.prototype.matches) {
   
       // определяем свойство
       Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   
     }
   
   })();
   if ('NodeList' in window && !NodeList.prototype.forEach) {
     console.info('polyfill for IE11');
     NodeList.prototype.forEach = function (callback, thisArg) {
       thisArg = thisArg || window;
       for (var i = 0; i < this.length; i++) {
         callback.call(thisArg, this[i], i, this);
       }
     };
   }
