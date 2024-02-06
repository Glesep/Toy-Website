//Body라는 객체 
var Body = {
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);        //jQuery 라이브러리
    },

    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);                  //jQuery 라이브러리
    }  
}
//Link라는 객체
var Link = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        // alist[i].style.color = color;
        // i++
        $('a').css('color', color);                     //jQuery 라이브러리
    }
}

//self란 이름의 매개변수 (this를 가져올 것) => 함수에 this를 사용하는 방법   
function Day_Night(self) {
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        //야간모드일 때 링크 색깔을 powderblue로 바꾸기
        Link.setColor('powderblue');
    }
        
    else if(self.value === 'day') {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        //주간모드일 때 링크 색깔을 blue로 바꾸기
        Link.setColor('blue');
    }
}