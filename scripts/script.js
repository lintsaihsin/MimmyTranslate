$(function() {
    $.each(category, function(i, option) {
        $('#sel1').append($('<option/>').attr("value", option.id).text(option.name));
    });
    giveSelection($('#sel1').val());
})

$('#sel1').on('change', function() {
  giveSelection($('#sel1').val());
});
$('#save').on('click', function() {
  var txt = $('#output').val();
  $('#output').val(txt + " " +$('#sel2').val());
});
$('#clear').on('click', function() {
  $('#output').val("");
});
$('#copy').on('click', function() {

　const inputText = document.querySelector('#output');
  inputText.select();
  document.execCommand('copy');
});
var sel2 = document.querySelector('#sel2');

function giveSelection(selValue) {
  sel2.innerHTML = '';
  for(var i = 0; i < translation.length; i++) {
    if(translation[i].dp === selValue) {
      var option = document.createElement("option");  
      option.text = translation[i].chinese;
      option.value = translation[i].korean;
      sel2.appendChild(option);
    }
  }
}


// id : 分類id, name: 分類名稱
var category =[
    { "id": "BOYNEXTDOOR", "name": "團體"},
    { "id": "question", "name": "問句"},
    { "id": "personalPronoun", "name": "人稱代名詞"},
    { "id": "appellation", "name": "稱呼"},
    { "id": "ask", "name": "請求"},
    { "id": "particle", "name": "助詞"},
    { "id": "adj", "name": "形容詞"},
    { "id": "noun", "name": "名詞"},
    { "id": "time", "name": "時間"},
]
//dp : 分類id, chinese: 中文, korean: 韓文翻譯
var translation =[
    { "dp":"BOYNEXTDOOR", "chinese": "BOYNEXTDOOR", "korean": "보이넥스트도어"},
    { "dp":"BOYNEXTDOOR", "chinese": "朴成淏", "korean": "박성호"},
    { "dp":"BOYNEXTDOOR", "chinese": "李常赫", "korean": "이상혁"},
    { "dp":"BOYNEXTDOOR", "chinese": "RIWOO", "korean": "리우"},
    { "dp":"BOYNEXTDOOR", "chinese": "明宰鉉", "korean": "명재현"},
    { "dp":"BOYNEXTDOOR", "chinese": "韓東旼", "korean": "한동민"},
    { "dp":"BOYNEXTDOOR", "chinese": "TAESAN", "korean": "태산"},
    { "dp":"BOYNEXTDOOR", "chinese": "金桐儇", "korean": "김동현"},
    { "dp":"BOYNEXTDOOR", "chinese": "LEEHAN", "korean": "이한"},
    { "dp":"BOYNEXTDOOR", "chinese": "金雲鶴", "korean": "김운학"},
    { "dp":"BOYNEXTDOOR", "chinese": "扣尼", "korean": "코니"},
    { "dp":"BOYNEXTDOOR", "chinese": "大發", "korean": "대박"},
    { "dp":"BOYNEXTDOOR", "chinese": "讚兒", "korean": "짱이"},
    { "dp":"question", "chinese": "這是什麼", "korean": "이게 뭐야?"},
    { "dp":"question", "chinese": "吃飯了嗎", "korean": "식사하셨나요?"},
    { "dp":"question", "chinese": "吃了什麼", "korean": "무엇을 먹었나요?"},
    { "dp":"question", "chinese": "好吃嗎", "korean": "맛있나요?"},
    { "dp":"question", "chinese": "你在哪", "korean": "어디세요?"},
    { "dp":"question", "chinese": "在幹嘛", "korean": "뭐하세요?"},
    { "dp":"question", "chinese": "過得好嗎", "korean": "잘 되고 있어?"},
    { "dp":"question", "chinese": "睡得好嗎", "korean": "잘 잤어요?"},
    { "dp":"question", "chinese": "起床了嗎", "korean": "일어났어?"},
    { "dp":"question", "chinese": "還好嗎", "korean": "괜찮으세요?"},
    { "dp":"question", "chinese": "不是嗎", "korean": "?"},
    { "dp":"personalPronoun", "chinese": "我(敬語)", "korean": "저"},
    { "dp":"personalPronoun", "chinese": "我(半語)", "korean": "나"},
    { "dp":"personalPronoun", "chinese": "你(敬語)", "korean": "당신"},
    { "dp":"personalPronoun", "chinese": "你(半語)", "korean": "너"},
    { "dp":"personalPronoun", "chinese": "他", "korean": "그"},
    { "dp":"personalPronoun", "chinese": "她", "korean": "그녀"},
    { "dp":"personalPronoun", "chinese": "我們(敬語)", "korean": "저희"},
    { "dp":"personalPronoun", "chinese": "我們(半語)", "korean": "우리"},
    { "dp":"personalPronoun", "chinese": "你們(敬語)", "korean": "당신들"},
    { "dp":"personalPronoun", "chinese": "你們(半語)", "korean": "너희들"},
    { "dp":"personalPronoun", "chinese": "他們", "korean": "그들 "},
    { "dp":"personalPronoun", "chinese": "朋友", "korean": "친구"},
    { "dp":"personalPronoun", "chinese": "弟弟", "korean": "동생"},
    { "dp":"personalPronoun", "chinese": "哥哥", "korean": "오빠"},
    { "dp":"personalPronoun", "chinese": "姊姊", "korean": "누나"},
    { "dp":"personalPronoun", "chinese": "女生", "korean": "여자"},
    { "dp":"personalPronoun", "chinese": "男生", "korean": "남자"},
    { "dp":"appellation", "chinese": "親愛的", "korean": "자기야"},
    { "dp":"appellation", "chinese": "寶寶", "korean": "아기"},
    { "dp":"appellation", "chinese": "小可愛", "korean": "귀요미"},
    { "dp":"appellation", "chinese": "笨蛋", "korean": "바보"},
    { "dp":"appellation", "chinese": "老公/老婆", "korean": "여보"},
    { "dp":"appellation", "chinese": "狗勾", "korean": "강아지"},
    { "dp":"appellation", "chinese": "貓咪", "korean": "고양이"},
    { "dp":"particle", "chinese": "真的", "korean": "진짜"},
    { "dp":"particle", "chinese": "很多", "korean": "많은"},
    { "dp":"particle", "chinese": "非常", "korean": "매우"},
    { "dp":"particle", "chinese": "也", "korean": "또"},
    { "dp":"adj", "chinese": "長得好看", "korean": "잘생기다"},
    { "dp":"adj", "chinese": "長得帥", "korean": "멋지다"},
    { "dp":"adj", "chinese": "漂亮", "korean": "예쁜"},
    { "dp":"adj", "chinese": "性感", "korean": "섹시한"},
    { "dp":"adj", "chinese": "可愛", "korean": "귀여운"},
    { "dp":"adj", "chinese": "做得好", "korean": "잘하다"},
    { "dp":"adj", "chinese": "可怕", "korean": "무서운"},
    { "dp":"adj", "chinese": "好吃", "korean": "맛있다"},
    { "dp":"adj", "chinese": "好難", "korean": "어려운"},
    { "dp":"adj", "chinese": "發瘋了", "korean": "미쳤나봐"},
    { "dp":"adj", "chinese": "很像", "korean": "비슷하다"},
    { "dp":"adj", "chinese": "一樣", "korean": "똑같다"},
    { "dp":"ask", "chinese": "拜託", "korean": "제발"},
    { "dp":"ask", "chinese": "請給我", "korean": "주세요"},
    { "dp":"ask", "chinese": "在一次", "korean": "한번 더"},
    { "dp":"noun", "chinese": "啵啵", "korean": "뽀뽀"},
    { "dp":"noun", "chinese": "抱抱", "korean": "안하줘"},
    { "dp":"noun", "chinese": "加油", "korean": "파이팅"},
    { "dp":"noun", "chinese": "唱歌", "korean": "노래"},
    { "dp":"noun", "chinese": "跳舞", "korean": "춤"},
    { "dp":"noun", "chinese": "rap", "korean": "랩"},
    { "dp":"time", "chinese": "昨天", "korean": "어제"},
    { "dp":"time", "chinese": "今天", "korean": "오늘"},
    { "dp":"time", "chinese": "明天", "korean": "내일"},
    { "dp":"time", "chinese": "現在", "korean": "지금"},
    { "dp":"time", "chinese": "時間", "korean": "시간"},
]
















