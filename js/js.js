$("document").ready(function () {
  $(".buka_tentang").click(function () {
    $(".tentang").slideToggle("slow");
  });
});
$("document").ready(function () {
  $(".buka_visi").click(function () {
    $(".visi").slideToggle("slow");
  });
});
$("document").ready(function () {
  $(".buka_desc").click(function () {
    $(".deskripsi").slideToggle("slow");
  });
});
$("document").ready(function () {
  $(".kuda").click(function () {
    $(this).css({
      background: "url('https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9yc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=180&q=60')",
    });
    $("<audio></audio>").attr({
      src: "audio/kuda.mp3",
      autoplay: "autoplay",
    });
  });
});
$("document").ready(function () {
  $(".tupai").click(function () {
    $(this).css({
      background: "url('https://images.unsplash.com/photo-1590079015089-875baa76cc8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=60')",
    });
    $("<audio></audio>").attr({
      src: "audio/tupai.mp3",
      autoplay: "autoplay",
    });
  });
});
$("document").ready(function () {
  $(".harimau").click(function () {
    $(this).css({
      background: "url('https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=160&q=60')",
    });
    $("<audio></audio>").attr({
      src: "audio/harimau.mp3",
      autoplay: "autoplay",
    });
  });
});
$("document").ready(function () {
  $(".elang").click(function () {
    $(this).css({
      background: "url('https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80')",
    });
    $("<audio></audio>").attr({
      src: "audio/elang.mp3",
      autoplay: "autoplay",
    });
  });
});
