// Fullscreen image
document.addEventListener('DOMContentLoaded', function () {
  // 处理单张图片的全屏显示
  const singleImages = document.querySelectorAll('.flex-container-single .image'); // 选择单张图片
  const singleFullscreenContainer = document.getElementById('fullscreen-container');
  const singleFullscreenImage = document.getElementById('fullscreen-image');
  $(singleFullscreenContainer).css("display", "flex"); //设置默认display样式为flex
  $(singleFullscreenContainer).hide(); //先隐藏
  let is_first_click = true;
  if (singleImages) {
    singleImages.forEach(singleImage => {
      singleImage.addEventListener('click', function () {
        singleFullscreenImage.src = this.src; // 设置全屏图像的 src
        if (is_first_click) {
          singleFullscreenContainer.style.display = 'flex'; // 显示全屏容器
          is_first_click = false;
        }
        else
          $(singleFullscreenContainer).stop().fadeIn(150); // 显示全屏容器
        // 使用 setTimeout 确保容器显示后再添加放大类
        setTimeout(() => {
          singleFullscreenImage.classList.add('zoom-in'); // 添加放大类
        }, 150); // 使用小的延迟确保容器已经显示
      });

      // 点击全屏容器时隐藏
      singleFullscreenContainer.addEventListener('click', function () {
        singleFullscreenImage.classList.add('zoom-out'); // 添加缩小类
        $(singleFullscreenContainer).stop().fadeOut(300);
        setTimeout(() => {
          //singleFullscreenContainer.style.display = 'none'; // 隐藏全屏容器
          singleFullscreenImage.classList.remove('zoom-out'); // 移除缩小类
        }, 300); // 持续时间与 CSS 中的过渡时间相同
      });
    });

    // 定义函数来隐藏全屏容器
    function hideFullscreenContainerOnScroll() {
      if (!singleFullscreenContainer) return;
      // 如果全屏容器是可见的（display 不为 'none'）
      if (singleFullscreenContainer.style.display !== 'none') {
        singleFullscreenImage.classList.add('zoom-out'); // 添加缩小类
        setTimeout(() => {
          //singleFullscreenContainer.style.display = 'none'; // 隐藏全屏容器
          $(singleFullscreenContainer).stop().fadeOut(300);
          singleFullscreenImage.classList.remove('zoom-out'); // 移除缩小类
        }, 300); // 持续时间与 CSS 中的过渡时间相同
      }
    }

    // 监听滚动事件
    window.addEventListener('scroll', hideFullscreenContainerOnScroll);
  }

  // 处理多张图片的全屏显示
  const images = document.querySelectorAll('.flex-container .image'); // 选择所有多张图片
  const fullscreenContainers = document.querySelectorAll('.fullscreen-container'); // 选择所有全屏容器
  const fullscreenImages = Array.from(fullscreenContainers).map(container => container.querySelector('img')); // 获取每个全屏容器中的图片
  $(fullscreenContainers).css("display", "flex"); //设置默认display样式为flex
  $(fullscreenContainers).hide(); //先隐藏
  images.forEach((image, index) => {
    image.addEventListener('click', function () {
      fullscreenImages[index].src = this.src; // 设置对应全屏图像的 src
      if (is_first_click) {
        fullscreenContainers[index].style.display = 'flex'; // 显示全屏容器
        is_first_click = false;
      }
      else
        $(fullscreenContainers[index]).stop().fadeIn(150); // 显示全屏容器
      // 使用 setTimeout 确保容器显示后再添加放大类
      setTimeout(() => {
        fullscreenImages[index].classList.add('zoom-in'); // 添加放大类
      }, 150); // 使用小的延迟确保容器已经显示
    });
  });

  // 点击全屏容器时隐藏
  fullscreenContainers.forEach((container, index) => {
    container.addEventListener('click', function () {
      fullscreenImages[index].classList.add('zoom-out'); // 添加缩小类
      $(this).fadeOut(300);
      setTimeout(() => {
        //this.style.display = 'none'; // 隐藏对应全屏容器
        fullscreenImages[index].classList.remove('zoom-out'); // 移除缩小类
      }, 300); // 持续时间与 CSS 中的过渡时间相同
    });
  });

  // 定义函数来隐藏全屏容器
  function hideFullscreenContainersOnScroll() {
    if (fullscreenContainers.length === 0) return;
    fullscreenContainers.forEach((container, index) => {
      // 如果全屏容器是可见的（display 不为 'none'）
      if (container.style.display !== 'none') {
        fullscreenImages[index].classList.add('zoom-out'); // 添加缩小类
        $(container).fadeOut(300);
        setTimeout(() => {
          //container.style.display = 'none'; // 隐藏对应全屏容器
          fullscreenImages[index].classList.remove('zoom-out'); // 移除缩小类
        }, 300); // 持续时间与 CSS 中的过渡时间相同
      }
    });
  }

  // 监听滚动事件
  window.addEventListener('scroll', hideFullscreenContainersOnScroll);
});
