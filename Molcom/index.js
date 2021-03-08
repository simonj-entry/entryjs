alert('=키를 눌르면 오류난것처럼 바뀜 창을 새로고침하면 돌아옴');
window.addEventListener("keydown", (event) => {
  if (event.key == '=') {
    document.write(`
    <title>error!</title>
    <h1>404 not found</h1>
    `)
  }
})
