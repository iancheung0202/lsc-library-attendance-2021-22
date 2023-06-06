
// Clear all existing records (Requires password)
function clearAll() {
	var pwd = prompt('請輸入密碼🔑');
	if (pwd == 'lsclibrary2021') {
		localStorage.clear();
		alert('所有紀錄已被刪除❌');
		window.location.href = '';
	} else {
		new Notify ({
	    	status: 'error',
	    	title: `密碼錯誤🙅️，請重試！`,
	    	autoclose: true
  		})
		return;
	}
}
#function
