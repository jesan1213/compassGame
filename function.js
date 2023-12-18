document.addEventListener('DOMContentLoaded', function () {
 
  const compass = {
      top: 'E',
      left: 'S',
      right: 'N',
      bottom: 'W'
  };

 
  function swapLeftTop() {
      [compass.top, compass.left] = [compass.left, compass.top];
      updateCompassDisplay();
  }

 
  function swapLeftRight() {
      [compass.left, compass.right] = [compass.right, compass.left];
      updateCompassDisplay();
  }


  function swapBottomRight() {
      [compass.bottom, compass.right] = [compass.right, compass.bottom];
      updateCompassDisplay();
  }


  function restartGame() {

    document.getElementById('top-input').disabled = false;
    document.getElementById('left-input').disabled = false;
    document.getElementById('right-input').disabled = false;
    document.getElementById('bottom-input').disabled = false;
    document.getElementById('update-compass-btn').disabled = false;

 
    document.getElementById('top-input').value = '';
    document.getElementById('left-input').value = '';
    document.getElementById('right-input').value = '';
    document.getElementById('bottom-input').value = '';
}


  function updateCompassDisplay() {
      document.querySelector('.board .row:nth-child(1) .cell:nth-child(2)').textContent = compass.top;
      document.querySelector('.board .row:nth-child(2) .cell:nth-child(1)').textContent = compass.left;
      document.querySelector('.board .row:nth-child(2) .cell:nth-child(3)').textContent = compass.right;
      document.querySelector('.board .row:nth-child(3) .cell:nth-child(2)').textContent = compass.bottom;
  }

  
  function updateCompass(form) {
      compass.top = form.top.value || compass.top;
      compass.left = form.left.value || compass.left;
      compass.right = form.right.value || compass.right;
      compass.bottom = form.bottom.value || compass.bottom;
      updateCompassDisplay();
  }

 
  document.querySelector('[onclick="swapLeftTop()"]').addEventListener('click', swapLeftTop);
  document.querySelector('[onclick="swapLeftRight()"]').addEventListener('click', swapLeftRight);
  document.querySelector('[onclick="swapBottomRight()"]').addEventListener('click', swapBottomRight);
  document.querySelector('[onclick="restartGame()"]').addEventListener('click', restartGame);
  document.querySelector('[onclick="updateCompass(this.form)"]').addEventListener('click', function() {
      updateCompass(document.getElementById('compass-form'));
  });

 
  updateCompassDisplay();
});

// YT vid that i used 
