const url = 'https://dev-dain.github.io/10-things-test';
const title = "'0313한준영 생일기념' 이벤트";
const hash = '%23봄비_그리고 %230313_해피준영데이 %23축하한다고_두_번씩_말할_거야 %23저랑_같이_축하_하실래요? ';

const tw = () => {
  let score = document.querySelector('.point').innerHTML;
  switch (score) {
    case '100점':
    case '57점':
      score += '입니다! ';
      break;
    default:
      score += '입니다! ';
  }
  window.open('https://twitter.com/intent/tweet?text='
    + title + '%0A' + "봄비, 그리고 퀴즈 " + score + '' + hash + '%0A' + url,
    'twittersharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
