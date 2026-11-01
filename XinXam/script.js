const Q=[
{t:'Xuân về',l:'Đại cát 大吉',p:'Gió xuân thổi đến cửa nhà\nMuôn hoa đua nở, cát tường vào ngay\nViệc lành nối tiếp từng ngày\nCứ tin vững bước, mây bay hết sầu',cd:'Thi cử, xin việc đều thuận lợi, sẽ có người giúp đỡ.',td:'Duyên đẹp đến gần, hãy mạnh dạn mở lời.',tl:'Có lộc bất ngờ, nhớ giữ cho chắc tay.',ln:'Hôm nay hợp để bắt đầu điều bạn ấp ủ bấy lâu.'},
{t:'Cá hóa rồng',l:'Thượng cát 上吉',p:'Cá chép vượt sóng ngược dòng\nQua cơn thử thách hóa rồng bay cao\nCông sức bỏ ra xứng đáng\nThành quả ngọt ngào đang chờ phía trước',cd:'Cố gắng bấy lâu sắp được ghi nhận.',td:'Chân thành sẽ được đáp lại.',tl:'Thu nhập tăng dần, đừng tiêu xài vội.',ln:'Đừng bỏ cuộc ở đoạn cuối, bạn gần tới rồi.'},
{t:'Trăng sáng',l:'Trung cát 中吉',p:'Trăng rằm soi sáng lối đi\nLòng ngay thì mọi khó gì cũng qua\nBạn bè, người thân ở nhà\nSẻ chia ấm áp, vững xa đường dài',cd:'Làm việc nhóm rất hợp, nên nhờ bạn bè góp ý.',td:'Một cuộc trò chuyện dài sẽ gần nhau hơn.',tl:'Ổn định, chưa nên đầu tư mạo hiểm.',ln:'Dành thời gian cho gia đình và những người thân.'},
{t:'Thuyền xuôi gió',l:'Trung cát 中吉',p:'Thuyền ra khơi gặp gió lành\nBuồm căng thẳng tiến, bến xanh không xa\nĐừng quên nhìn lại quê nhà\nGiữ tâm bình thản thì ta an lòng',cd:'Công việc trôi chảy, hãy tận dụng đà này.',td:'Mối quan hệ đang tiến triển tự nhiên.',tl:'Doanh thu nhỉnh lên nhờ làm đều tay.',ln:'Thuận lợi nhưng vẫn nên kiểm tra kỹ trước khi quyết.'},
{t:'Hoa nở',l:'Tiểu cát 小吉',p:'Nụ non đợi nắng sớm mai\nChậm mà chắc nở thành bài hoa tươi\nĐừng vội, đừng nản bạn ơi\nNgày mai rực rỡ, nụ cười đang mong',cd:'Kết quả đến chậm nhưng chắc, tiếp tục ôn luyện.',td:'Hãy cho nhau thêm thời gian.',tl:'Tích góp từng chút một sẽ thành nhiều.',ln:'Kiên nhẫn là phép màu của hôm nay.'},
{t:'Gặp quý nhân',l:'Thượng cát 上吉',p:'Đường xa gặp bạn tri âm\nMột lời chỉ dẫn mở dần lối ra\nLòng thành cảm động trời xa\nPhúc lành theo bước, cửa nhà đón vui',cd:'Sẽ gặp người chỉ đường quan trọng, hãy lắng nghe.',td:'Có thể quen một người đặc biệt qua bạn bè.',tl:'Cơ hội kiếm thêm đến từ các mối quen.',ln:'Lịch sự và biết ơn sẽ mở ra nhiều cánh cửa.'},
{t:'Mưa tạnh trời quang',l:'Trung cát 中吉',p:'Mưa qua trời rạng cầu vồng\nBao điều bận lòng tan hết thành không\nNhẹ nhàng sau những mệt nhòa\nNgày mai nắng mới vào nhà reo vui',cd:'Rắc rối cũ sắp được giải quyết.',td:'Hiểu lầm cũ được hóa giải nếu bạn nói thẳng.',tl:'Chi tiêu bớt căng thẳng, thở phào được rồi.',ln:'Hãy tự thưởng cho mình một buổi nghỉ ngơi.'},
{t:'Chim én báo xuân',l:'Cát 吉',p:'Én về báo tin xuân sang\nTin lành theo cánh, rộn ràng khắp nơi\nMột tin vui sắp đến rồi\nHãy mở rộng cửa, đón lời hay đây',cd:'Sắp có tin tốt về học tập hoặc công việc.',td:'Có người đang nghĩ đến bạn đấy.',tl:'Một khoản nhỏ bất ngờ, đừng bỏ lỡ.',ln:'Giữ điện thoại gần tay, tin vui sắp tới.'},
{t:'Đèn sáng đường về',l:'Bình an 平安',p:'Đèn nhà vẫn sáng đợi người\nXa xôi mấy cũng có nơi để về\nBình yên là món quà quê\nGiản đơn mà đủ, chẳng chê chẳng cầu',cd:'Không có đột phá, nhưng giữ vững là tốt.',td:'Bình lặng, ấm áp, không cần màu mè.',tl:'Vừa đủ dùng, tiết kiệm sẽ vui.',ln:'Hôm nay hợp để dọn dẹp, sắp xếp lại góc nhỏ của mình.'},
{t:'Cây đơm hoa',l:'Cát 吉',p:'Gieo hạt từ buổi đầu xuân\nChăm chút cần mẫn, hái dần quả ngon\nChớ mong một sớm ngọt giòn\nMưa nắng đủ đầy mới tròn mùa vui',cd:'Học đều mỗi ngày sẽ có kết quả đẹp.',td:'Tình cảm lớn dần từ những điều nhỏ nhặt.',tl:'Thu hoạch từ việc đã làm từ trước.',ln:'Đừng so sánh với người khác, mỗi người một mùa.'},
{t:'Sao sáng',l:'Đại cát 大吉',p:'Sao Văn rạng rỡ trên đầu\nTài năng tỏa sáng, mọi câu đều hay\nMột lời nói, một nét tay\nCũng làm người khác ngất ngây ghi nhớ',cd:'Rất hợp thuyết trình, phỏng vấn, thi cử.',td:'Bạn đang rất thu hút, hãy tự tin.',tl:'Tài năng đem lại thu nhập tốt.',ln:'Hãy là chính mình, đó là điều quý nhất.'},
{t:'Chờ gió',l:'Chờ thời 待時',p:'Thuyền neo bến chờ gió mùa\nĐừng vội nhổ neo khi chưa đủ đầy\nNhìn kỹ trời, nhìn kỹ mây\nChuẩn bị chu đáo, ngày nay chưa đi',cd:'Chưa phải lúc quyết định lớn, hãy chuẩn bị thêm.',td:'Đừng nóng vội, để mọi thứ chín tự nhiên.',tl:'Hạn chế mua sắm lớn trong lúc này.',ln:'Nghỉ ngơi và học thêm một kỹ năng nhỏ.'},
{t:'Qua cầu cẩn thận',l:'Cẩn trọng 謹慎',p:'Nước sâu cầu hẹp bước nhanh\nChậm mà chắc bước, mong lành bình yên\nLời nói chớ để mất duyên\nSuy nghĩ trước sau, lòng yên mọi bề',cd:'Kiểm tra kỹ giấy tờ, bài vở trước khi nộp.',td:'Cân nhắc lời nói, tránh nói lúc nóng giận.',tl:'Tránh cho vay mượn trong hôm nay.',ln:'Đi chậm một chút, hôm nay bình tĩnh là thắng.'},
{t:'Nắng ấm sau mưa',l:'Cát 吉',p:'Mưa buồn rồi cũng qua mau\nNắng lên rực rỡ nhuộm màu bình yên\nNụ cười là phép tiên\nGiúp ta xua hết muộn phiền trong tim',cd:'Tâm trạng tốt giúp bạn làm việc hiệu quả hơn.',td:'Một cái ôm hoặc lời hỏi thăm sẽ rất ý nghĩa.',tl:'Có thể nhận lại một khoản đã cho mượn.',ln:'Hãy cười nhiều hơn, nó lan sang người khác.'},
{t:'Thuận buồm',l:'Đại cát 大吉',p:'Buồm no gió, sóng dịu dàng\nBến mơ phía trước đang vàng nắng lên\nVững tay chèo, vững niềm tin\nMọi điều mong ước sẽ nên như lòng',cd:'Kế hoạch đang theo đúng hướng, cứ tiến tới.',td:'Hãy nói ra điều bạn thật lòng nghĩ.',tl:'Dòng tiền tốt, có thể bắt đầu mục tiêu mới.',ln:'Hôm nay là ngày thích hợp để chốt việc quan trọng.'},
{t:'Hạt mầm',l:'Tiểu cát 小吉',p:'Hạt nằm trong đất lặng thinh\nNhưng đang lớn lặng lẽ thành cây xanh\nĐừng chê mình bé mong manh\nMầm non rồi sẽ thành cành che mưa',cd:'Bạn đang tiến bộ nhiều hơn bạn nghĩ.',td:'Một mối quan hệ nhỏ đang nảy mầm.',tl:'Bắt đầu thói quen tiết kiệm nhỏ mỗi ngày.',ln:'Hãy ghi lại một điều bạn đã làm tốt hôm nay.'}
];
const $=id=>document.getElementById(id),tube=$('tube'),go=$('go'),res=$('res');
let last=-1,busy=false;
const pickIdx=()=>{let i;do{i=Math.floor(Math.random()*Q.length)}while(i===last&&Q.length>1);last=i;return i};
function show(i,tag){const q=Q[i];
  $('no').textContent=(tag?tag+' • ':'')+'Quẻ số '+String(i+1).padStart(2,'0')+' • '+q.l;
  $('name').textContent=q.t;$('poem').textContent=q.p;
  $('cd').textContent=q.cd;$('td').textContent=q.td;$('tl').textContent=q.tl;$('ln').textContent=q.ln;
  res.hidden=false;void res.offsetWidth;res.classList.add('show');
  res.scrollIntoView({behavior:'smooth',block:'nearest'});$('lucky').hidden=false;renderNums()}
function run(getIdx,tag){if(busy)return;busy=true;go.disabled=true;$('gob').disabled=true;go.textContent='Đang lắc xăm...';
  res.classList.remove('show');res.hidden=true;$('lucky').hidden=true;tube.classList.remove('out');tube.classList.add('shake');
  setTimeout(()=>{tube.classList.remove('shake');tube.classList.add('out');
    setTimeout(()=>{show(getIdx(),tag);go.disabled=false;$('gob').disabled=false;go.textContent='🎋 Lắc xăm ngẫu nhiên';busy=false},900)},1800)}
go.onclick=()=>run(pickIdx,'');

/* Số may mắn theo ngày: cùng một ngày và cùng một miền luôn ra cùng một bộ số */
const DIGITS=2,RG=[['XSMN','Miền Nam'],['XSMT','Miền Trung'],['XSMB','Miền Bắc']];
function rng(str){let h=1779033703^str.length;for(let i=0;i<str.length;i++){h=Math.imul(h^str.charCodeAt(i),3432918353);h=h<<13|h>>>19}
  let a=h>>>0;return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function nums(day,code){const r=rng(day+'|'+code+'|xinxam'),s=new Set(),M=Math.pow(10,DIGITS);
  while(s.size<3)s.add(Math.floor(r()*M));return[...s].map(n=>String(n).padStart(DIGITS,'0'))}
const pad=n=>String(n).padStart(2,'0'),iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()),dt=$('dt');
const WD=['Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy'];
function renderNums(){const v=dt.value||iso(new Date()),[y,m,d]=v.split('-').map(Number);
  $('dlabel').textContent=WD[new Date(y,m-1,d).getDay()]+', '+pad(d)+'/'+pad(m)+'/'+y;$('regions').innerHTML='';
  RG.forEach(([c,n],ri)=>{const box=document.createElement('div');box.className='reg r'+ri;box.innerHTML='<b></b><small></small><div class="balls"></div>';
    box.children[0].textContent=c;box.children[1].textContent=n;
    nums(v,c).forEach((x,k)=>{const b=document.createElement('span');b.className='ball';b.textContent=x;b.style.animationDelay=(ri*.15+k*.12)+'s';box.children[2].append(b)});$('regions').append(box)})}
dt.value=iso(new Date());
const shift=n=>{const[y,m,d]=(dt.value||iso(new Date())).split('-').map(Number);dt.value=iso(new Date(y,m-1,d+n));renderNums()};
$('dprev').onclick=()=>shift(-1);$('dnext').onclick=()=>shift(1);$('dtoday').onclick=()=>{dt.value=iso(new Date());renderNums()};dt.onchange=renderNums;
/* Cánh hoa rơi */
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const P=$('petals'),E=['🌸','🌼','🌸','✨'];
  for(let i=0;i<18;i++){const sp=document.createElement('span');sp.textContent=E[i%4];sp.style.left=Math.random()*100+'%';
    sp.style.fontSize=(14+Math.random()*14)+'px';sp.style.animationDuration=(9+Math.random()*9)+'s';sp.style.animationDelay=(-Math.random()*14)+'s';P.append(sp)}}

/* Xin quẻ theo ngày sinh: cùng ngày sinh luôn ra cùng một quẻ */
const bd=$('bd'),bm=$('bm'),by=$('by');
try{const sv=JSON.parse(localStorage.getItem('xamBirth')||'null');if(sv){bd.value=sv[0];bm.value=sv[1];by.value=sv[2]}}catch(e){}
$('gob').onclick=()=>{const d=+bd.value,m=+bm.value,y=+by.value,t0=new Date(y,m-1,d);
  const ok=Number.isInteger(d)&&Number.isInteger(m)&&Number.isInteger(y)&&y>=1900&&t0.getFullYear()===y&&t0.getMonth()===m-1&&t0.getDate()===d&&t0<=new Date();
  if(!ok){$('berr').textContent='Ngày sinh chưa hợp lệ. Hãy nhập đủ ngày, tháng, năm (ví dụ 15 / 08 / 1999).';return}
  $('berr').textContent='';try{localStorage.setItem('xamBirth',JSON.stringify([d,m,y]))}catch(e){}
  run(()=>Math.floor(rng('sinh|'+y+'-'+pad(m)+'-'+pad(d)+'|xinxam')()*Q.length),'Ngày sinh '+pad(d)+'/'+pad(m)+'/'+y)};
