function login() {
  let formData = new FormData();
  formData.append("username", "aaa");

  $.ajax({
    type: "post",
    url: "/user/login",
    contentType: "application/x-www-form-urlencoded",
    data: formData,
    success: function (response) {
      $().removeClass("active");
      if (response.result == "success") {
        alert("성공적으로 등록되었습니다", response.msg);
        window.location.reload();
      }
    },
  });
}
