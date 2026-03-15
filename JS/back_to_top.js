(function() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;

    // 监听滚动事件
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {  // 滚动超过300px显示按钮
        btn.style.display = 'flex';
      } else {
        btn.style.display = 'none';
      }
    });

    // 点击回到顶部
    btn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'  // 平滑滚动
      });
    });

    // 立即检查一次初始状态（防止页面刚加载时已滚动）
    if (window.scrollY > 300) {
      btn.style.display = 'flex';
    }
  })();