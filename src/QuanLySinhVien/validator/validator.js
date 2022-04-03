export const validator = {
  kiemTraEmail: function (value) {
    let parten = /\S+@\S+\.\S+/;

    if (value.trim() === "") {
      alert("Vui Lòng Nhập Email");
      return false;
    }
    if (parten.test(value)) {
      return true;
    } else {
      alert("Email không hợp lệ");
      return false;
    }
  },
  kiemTraSo: function (value) {
    let parten = new RegExp("^([0-9]*)$");
    if (value === "") {
      alert("Vui Lòng Nhập Số Điện Thoại");
      return false;
    }
    if (parten.test(value)) {
      return true;
    } else {
      alert("Số điện thoại không hợp lệ");
      return false;
    }
  },
  kiemTraKiTu: function (value) {
    let parten = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/g;
    if (value.trim() === "") {
      alert("Vui Lòng Nhập Tên");
      return false;
    }
    if (parten.test(value.trim())) {
      return true;
    } else {
      alert("Tên không hợp lệ");
      return false;
    }
  },

  kiemTraIdDaSuDung: function (value, arr) {
    if (value.trim() === "") {
      alert("Vui Lòng Nhập ID");
      return false;
    }
    if (arr.includes(value)) {
      alert("ID đã sử dụng");
      return false;
    } else {
      return true;
    }
  },
};
