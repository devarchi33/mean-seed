// 사용할 앱의 Javascript 키를 설정해 주세요.
Kakao.init('db831e72d4093199ddd7954e27a2f91b');

function loginWithKakao() {
	// 카카오 로그인 버튼을 생성합니다.
	Kakao.Auth.login({
	    success: function(authObj) {
	      // 로그인 성공시, API를 호출합니다.
	      console.log("authObj : ");
	      console.log(authObj);

	      Kakao.Auth.setAccessToken(authObj.access_token, true);
	      console.log("access_token : " + authObj.access_token);
	      Kakao.Auth.setRefreshToken(authObj.refresh_token, true);
	      console.log("refresh_token : " + authObj.refresh_token);

	      Kakao.API.request({
	        url: '/v1/user/me',
	        success: function(res) {
	          // alert(JSON.stringify(res));
	          var arr = res;
	          console.log(arr);
	          console.log("id : " + arr.id);
	          console.log("properties : ");
	          console.log(arr.properties);
	          var arr2 = arr.properties;
	          console.log("nickname : " + arr2.nickname);
	          console.log("thumnail_image : " + arr2.thumbnail_image);
	          
	          var out = "<table>";

	          out += "<tr><td>" +
	          arr.id +
	          "</td></tr><tr><td>" +
	          arr2.nickname +
	          "</td></tr><tr><td>" +
	          "<img src= '" + arr2.thumbnail_image + "' />" +
	          "</td></tr>";
	          out += "</table>"
	          document.getElementById("id01").innerHTML = out;

	          document.getElementById("id01").style.display="block";

	          // window.onload = setTimeout("location.href='http://skyfly33.dothome.co.kr/kakao/kakaologindemo2.html'",3000);
	        },
	        fail: function(error) {
	          alert(JSON.stringify(error))
	        },
	        always: function(authObj, error) {
	          alert("test");
	        },
	        // persistAccessToken: false
	        // persistRefreshToken: 'true'
	      });
		},
		fail: function(err) {
			console.log(err);
		}
	});
};