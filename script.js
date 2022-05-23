const $topLeft = document.querySelector('.top-left')
const $topRight = document.querySelector('.top-right')
const $bottomLeft = document.querySelector('.bottom-left')
const $bottomRight = document.querySelector('.bottom-right')
const $containPreview = document.querySelector('.contain-preview')
const $resultCSS = document.querySelector('.contain-preview')

$topLeft.addEventListener('keyup', applyBorderRadius)
$topRight.addEventListener('keyup', applyBorderRadius)
$bottomLeft.addEventListener('keyup', applyBorderRadius)
$bottomRight.addEventListener('keyup', applyBorderRadius)

function applyBorderRadius(){
  resultTopLeft = $topLeft.value
  resultTopRight = $topRight.value
  resultBottomLeft = $bottomLeft.value
  resultBottomRight = $bottomRight.value

  $containPreview.style.borderRadius = `${resultTopLeft}px ${resultTopRight}px ${resultBottomRight}px ${resultBottomLeft}px`
  $resultCSS.innerHTML = `
  <p class="resultCss">yourElement {<br>border-radius: ${resultTopLeft}px ${resultTopRight}px ${resultBottomRight}px ${resultBottomLeft}px; <br> }</p>`
}
