// 这个脚本会在 docsify 加载后执行，确保搜索框结构稳定
    (function() {
      // 等待 DOM 加载完成
      document.addEventListener('DOMContentLoaded', function() {
        // 使用 MutationObserver 监听侧边栏变化，确保搜索框结构正确
        const observer = new MutationObserver(function(mutations) {
          const sidebar = document.querySelector('.sidebar');
          if (!sidebar) return;
          
          const search = sidebar.querySelector('.search');
          if (!search) return;
          
          // 检查是否已经有我们的包装器
          if (!search.querySelector('.search-wrap')) {
            // 获取输入框
            const input = search.querySelector('input[type="search"]');
            if (input && input.parentNode) {
              // 创建包装器
              const wrap = document.createElement('div');
              wrap.className = 'search-wrap';
              
              // 将输入框包装起来
              input.parentNode.insertBefore(wrap, input);
              wrap.appendChild(input);
            }
          }
        });
        
        // 开始观察
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      });
    })();