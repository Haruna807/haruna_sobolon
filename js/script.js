// ハンバーガーアイコンを押したとき
document.querySelector("#js-drawer-button").addEventListener("click", function(e) {
  e.preventDefault();

  document.querySelector("#js-drawer-button").classList.toggle("is-checked");
  document.querySelector("#js-drawer-content").classList.toggle("is-checked");
});

// ドロワーメニューのリンクが押された時、メニューが閉じる
document.querySelectorAll('#js-drawer-content a[href^="#"]').forEach(function(link) {
  link.addEventListener("click", function(e) {
    document.querySelector("#js-drawer-button").classList.remove("is-checked");
    document.querySelector("#js-drawer-content").classList.remove("is-checked");
  });
});

// フォームのエラー

$(document).ready(function() {
  const form = $("form");
  
  form.on("submit", function(e) {
    e.preventDefault(); // フォーム送信をキャンセル

    let isValid = true;
    let errorMessage = ""; // エラーメッセージを初期化

    // お名前のチェック
    const name = $("#your-name").val();
    if (!name) {
      isValid = false;
      errorMessage += "お名前は必須です。\n";
    }

    // メールアドレスのチェック
    const email = $("#your-email").val();
    if (!email) {
      isValid = false;
      errorMessage += "メールアドレスは必須です。\n";
    }

    // 法人/個人の選択のチェック
    if (!$("input[name='your-type']:checked").length) {
      isValid = false;
      errorMessage += "法人/個人の選択が必要です。\n";
    }

    // お問い合わせ内容のチェック
    const message = $("#your-message").val();
    if (!message) {
      isValid = false;
      errorMessage += "お問い合わせ内容は必須です。\n";
    }

    // チェックボックスのチェック
    const privacyChecked = $("input[name='your-privacy']").is(":checked");
    if (!privacyChecked) {
      isValid = false;
      errorMessage += "プライバシーポリシーへの同意が必要です。\n";
    }

    // エラーがあればアラートを表示
    if (!isValid) {
      alert(errorMessage); // エラーメッセージを表示
    } else {
      alert("送信完了"); // 送信完了のアラート
      form[0].reset(); // フォームをリセット
    }
  });
});

