var editor = ace.edit("editor");
editor.session.setMode("ace/mode/json");
var time = document.getElementById("time");
var stage = document.getElementById("stage");
var controller = document.getElementById("controller");
var a = new MFADE({
  containers: stage,
  danmaku: (send) => {
    send([editor.getValue()]);
  },
});
a.listenerEvent("DANMAKU_FORMAT_ERROR", (e) => {
  alert(
    "弹幕格式错误\n错误内容：" + e.content + "\n出错位置：" + (e.index + 1)
  );
});
a.listenerEvent("DANMAKU_JSON_INVALID", (e) => {
  alert(e);
});
var dark = false;
function stageBgc() {
  if (dark) {
    stage.style.backgroundColor = "#fff";
  } else {
    stage.style.backgroundColor = "#000";
  }
  dark = !dark;
}
var isPlay = false;
var playObj = document.getElementById("play");
var playObj1 = document.getElementById("play1");
function play() {
  if (isPlay) {
    a.pause();
    playObj.innerHTML = "播放";
    playObj1.innerHTML = "播放";
  } else {
    a.start();
    playObj.innerHTML = "暂停";
    playObj1.innerHTML = "暂停";
  }
  isPlay = !isPlay;
}
function start() {
  isPlay = true;
  playObj.innerHTML = "暂停";
  playObj1.innerHTML = "暂停";
  a.start();
}
setInterval(() => {
  time.innerHTML = a.time() / 1000;
}, 100);
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

// 根据参数获取demo
var id = getQueryVariable("id");
if (id) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "demo/" + id + ".json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      editor.setValue(xhr.responseText);
    } else {
      editor.setValue("[\r\n\r\n]");
    }
  };
  xhr.send();
} else {
  editor.setValue("{}");
}

// 定时保存
setInterval(() => {
  // editor.
}, 1000);

//全屏播放
function fill() {
  var f =
    stage.requestFullScreen ||
    stage.webkitRequestFullScreen ||
    stage.mozRequestFullScreen ||
    stage.msRequestFullScreen;
  if (f) {
    f.call(stage);
  }
  a.skip(0);
  controller.style.display = "block";
}
//监听退出全屏事件
window.addEventListener("resize", () => {
  if (!checkFull()) {
    controller.style.display = "none";
  }
});
function checkFull() {
  var isFull = !!(
    document.webkitIsFullScreen ||
    document.mozFullScreen ||
    document.msFullscreenElement ||
    document.fullscreenElement
  );
  if (isFull === undefined) {
    isFull = false;
  }
  return isFull;
}
