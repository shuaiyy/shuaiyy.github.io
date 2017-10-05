var calLanguages = {
  ar: { // Arabic
    months: [
      '????? ??????', '????', '????', '?????', '????', '??????', '????', '??', '?????', '????? ?????', '????? ??????', '????? ?????'
    ],
    dayOfWeekShort: [
      '?', '?', '?', '?', '?', '?', '?'
    ],
    dayOfWeek: ['?????', '???????', '????????', '????????', '??????', '??????', '?????', '?????']
  },
  ro: { // Romanian
    months: [
      'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
    ],
    dayOfWeekShort: [
      'Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa'
    ],
    dayOfWeek: ['Duminic?', 'Luni', 'Mar?i', 'Miercuri', 'Joi', 'Vineri', 'Samb?t?']
  },
  id: { // Indonesian
    months: [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ],
    dayOfWeekShort: [
      'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'
    ],
    dayOfWeek: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  },
  is: { // Icelandic
    months: [
      'Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Júlí', 'ágúst', 'September', 'Október', 'Nóvember', 'Desember'
    ],
    dayOfWeekShort: [
      'Sun', 'Mán', 'Trie', 'Mie', 'Fim', 'F?s', 'Lau'
    ],
    dayOfWeek: ['Sunnudagur', 'Mánudagur', 'Triejudagur', 'Mievikudagur', 'Fimmtudagur', 'F?studagur', 'Laugardagur']
  },
  bg: { // Bulgarian
    months: [
      'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
    ],
    dayOfWeekShort: [
      'Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
    ],
    dayOfWeek: ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота']
  },
  fa: { // Persian/Farsi
    months: [
      '???????', '????????', '?????', '???', '?????', '??????', '???', '????', '???', '??', '????', '?????'
    ],
    dayOfWeekShort: [
      '??????', '??????', '?? ????', '????????', '???????', '????', '????'
    ],
    dayOfWeek: ['???????', '??????', '???????', '????????', '????????', '????', '????', '???????']
  },
  ru: { // Russian
    months: [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    dayOfWeekShort: [
      'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
    ],
    dayOfWeek: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  },
  uk: { // Ukrainian
    months: [
      'С?чень', 'Лютий', 'Березень', 'Кв?тень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
    ],
    dayOfWeekShort: [
      'Ндл', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'
    ],
    dayOfWeek: ['Нед?ля', 'Понед?лок', 'В?второк', 'Середа', 'Четвер', 'П\'ятниця', 'Субота']
  },
  en: { // English
    months: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    dayOfWeekShort: [
      'S', 'M', 'T', 'W', 'T', 'F', 'S'
    ],
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    postsMonthTip: 'Posts published in LMM yyyy',
    titleFormat: 'LMM yyyy'
  },
  el: { // Ελληνικ?
    months: [
      'Ιανου?ριο?', 'Φεβρου?ριο?', 'Μ?ρτιο?', 'Απρ?λιο?', 'Μ?ιο?', 'Ιο?νιο?', 'Ιο?λιο?', 'Α?γουστο?', 'Σεπτ?μβριο?', 'Οκτ?βριο?', 'Νο?μβριο?', 'Δεκ?μβριο?'
    ],
    dayOfWeekShort: [
      'Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'
    ],
    dayOfWeek: ['Κυριακ?', 'Δευτ?ρα', 'Τρ?τη', 'Τετ?ρτη', 'Π?μπτη', 'Παρασκευ?', 'Σ?ββατο']
  },
  de: { // German
    months: [
      'Januar', 'Februar', 'M?rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ],
    dayOfWeekShort: [
      'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
    ],
    dayOfWeek: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
  },
  nl: { // Dutch
    months: [
      'januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'
    ],
    dayOfWeekShort: [
      'zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'
    ],
    dayOfWeek: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
  },
  tr: { // Turkish
    months: [
      'Ocak', '?ubat', 'Mart', 'Nisan', 'May?s', 'Haziran', 'Temmuz', 'A?ustos', 'Eylül', 'Ekim', 'Kas?m', 'Aral?k'
    ],
    dayOfWeekShort: [
      'Paz', 'Pts', 'Sal', '?ar', 'Per', 'Cum', 'Cts'
    ],
    dayOfWeek: ['Pazar', 'Pazartesi', 'Sal?', '?ar?amba', 'Per?embe', 'Cuma', 'Cumartesi']
  },
  fr: { //French
    months: [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao?t', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ],
    dayOfWeekShort: [
      'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'
    ],
    dayOfWeek: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  },
  es: { // Spanish
    months: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    dayOfWeekShort: [
      'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'
    ],
    dayOfWeek: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  },
  th: { // Thai
    months: [
      '??????', '??????????', '??????', '??????', '???????', '????????', '???????', '???????', '???????', '??????', '?????????', '???????'
    ],
    dayOfWeekShort: [
      '??.', '?.', '?.', '?.', '??.', '?.', '?.'
    ],
    dayOfWeek: ['???????', '??????', '??????', '???', '?????', '?????', '?????', '???????']
  },
  pl: { // Polish
    months: [
      'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'pa?dziernik', 'listopad', 'grudzień'
    ],
    dayOfWeekShort: [
      'nd', 'pn', 'wt', '?r', 'cz', 'pt', 'sb'
    ],
    dayOfWeek: ['niedziela', 'poniedzia?ek', 'wtorek', '?roda', 'czwartek', 'pi?tek', 'sobota']
  },
  pt: { // Portuguese
    months: [
      'Janeiro', 'Fevereiro', 'Mar?o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    dayOfWeekShort: [
      'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
    ],
    dayOfWeek: ['Domingo', 'Segunda', 'Ter?a', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  },
  ch: { // Simplified Chinese
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    dayOfWeekShort: [
      '日', '一', '二', '三', '四', '五', '六'
    ]
  },
  se: { // Swedish
    months: [
      'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
    ],
    dayOfWeekShort: [
      'S?n', 'M?n', 'Tis', 'Ons', 'Tor', 'Fre', 'L?r'
    ]
  },
  kr: { // Korean
    months: [
      '1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?'
    ],
    dayOfWeekShort: [
      '?', '?', '?', '?', '?', '?', '?'
    ],
    dayOfWeek: ['???', '???', '???', '???', '???', '???', '???']
  },
  it: { // Italian
    months: [
      'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
    ],
    dayOfWeekShort: [
      'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'
    ],
    dayOfWeek: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
  },
  da: { // Dansk
    months: [
      'January', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'July', 'August', 'September', 'Oktober', 'November', 'December'
    ],
    dayOfWeekShort: [
      'S?n', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'L?r'
    ],
    dayOfWeek: ['s?ndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'l?rdag']
  },
  no: { // Norwegian
    months: [
      'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
    ],
    dayOfWeekShort: [
      'S?n', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'L?r'
    ],
    dayOfWeek: ['S?ndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'L?rdag']
  },
  ja: { // Japanese
    months: [
      '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
    ],
    dayOfWeekShort: [
      '日', '月', '火', '水', '木', '金', '土'
    ],
    dayOfWeek: ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜']
  },
  vi: { // Vietnamese
    months: [
      'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
    ],
    dayOfWeekShort: [
      'CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'
    ],
    dayOfWeek: ['Ch? nh?t', 'Th? hai', 'Th? ba', 'Th? t?', 'Th? n?m', 'Th? sáu', 'Th? b?y']
  },
  sl: { // Sloven??ina
    months: [
      'Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'
    ],
    dayOfWeekShort: [
      'Ned', 'Pon', 'Tor', 'Sre', '?et', 'Pet', 'Sob'
    ],
    dayOfWeek: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', '?etrtek', 'Petek', 'Sobota']
  },
  cs: { // ?e?tina
    months: [
      'Leden', 'únor', 'B?ezen', 'Duben', 'Květen', '?erven', '?ervenec', 'Srpen', 'Zá?í', '?íjen', 'Listopad', 'Prosinec'
    ],
    dayOfWeekShort: [
      'Ne', 'Po', 'út', 'St', '?t', 'Pá', 'So'
    ]
  },
  hu: { // Hungarian
    months: [
      'Január', 'Február', 'Március', 'április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'
    ],
    dayOfWeekShort: [
      'Va', 'Hé', 'Ke', 'Sze', 'Cs', 'Pé', 'Szo'
    ],
    dayOfWeek: ['vasárnap', 'hétf?', 'kedd', 'szerda', 'csüt?rt?k', 'péntek', 'szombat']
  },
  az: { //Azerbaijanian (Azeri)
    months: [
      'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
    ],
    dayOfWeekShort: [
      'B', 'Be', '?a', '?', 'Ca', 'C', '?'
    ],
    dayOfWeek: ['Bazar', 'Bazar ert?si', '??r??nb? ax?am?', '??r??nb?', 'Cüm? ax?am?', 'Cüm?', '??nb?']
  },
  bs: { //Bosanski
    months: [
      'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
    ],
    dayOfWeekShort: [
      'Ned', 'Pon', 'Uto', 'Sri', '?et', 'Pet', 'Sub'
    ],
    dayOfWeek: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', '?etvrtak', 'Petak', 'Subota']
  },
  ca: { //Català
    months: [
      'Gener', 'Febrer', 'Mar?', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'
    ],
    dayOfWeekShort: [
      'Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'
    ],
    dayOfWeek: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte']
  },
  'en-GB': { //English (British)
    months: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    dayOfWeekShort: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ],
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  et: { //'Eesti'
    months: [
      'Jaanuar', 'Veebruar', 'M?rts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'
    ],
    dayOfWeekShort: [
      'P', 'E', 'T', 'K', 'N', 'R', 'L'
    ],
    dayOfWeek: ['Pühap?ev', 'Esmasp?ev', 'Teisip?ev', 'Kolmap?ev', 'Neljap?ev', 'Reede', 'Laup?ev']
  },
  eu: { //Euskara
    months: [
      'Urtarrila', 'Otsaila', 'Martxoa', 'Apirila', 'Maiatza', 'Ekaina', 'Uztaila', 'Abuztua', 'Iraila', 'Urria', 'Azaroa', 'Abendua'
    ],
    dayOfWeekShort: [
      'Ig.', 'Al.', 'Ar.', 'Az.', 'Og.', 'Or.', 'La.'
    ],
    dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
  },
  fi: { //Finnish (Suomi)
    months: [
      'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kes?kuu', 'Hein?kuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'
    ],
    dayOfWeekShort: [
      'Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'
    ],
    dayOfWeek: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']
  },
  gl: { //Galego
    months: [
      'Xan', 'Feb', 'Maz', 'Abr', 'Mai', 'Xun', 'Xul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'
    ],
    dayOfWeekShort: [
      'Dom', 'Lun', 'Mar', 'Mer', 'Xov', 'Ven', 'Sab'
    ],
    dayOfWeek: ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado']
  },
  hr: { //Hrvatski
    months: [
      'Sije?anj', 'Velja?a', 'O?ujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'
    ],
    dayOfWeekShort: [
      'Ned', 'Pon', 'Uto', 'Sri', '?et', 'Pet', 'Sub'
    ],
    dayOfWeek: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', '?etvrtak', 'Petak', 'Subotagg']
  },
  ko: { //Korean (???)
    months: [
      '1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?'
    ],
    dayOfWeekShort: [
      '?', '?', '?', '?', '?', '?', '?'
    ],
    dayOfWeek: ['???', '???', '???', '???', '???', '???', '???']
  },
  lt: { //Lithuanian (lietuvi?)
    months: [
      'Sausio', 'Vasario', 'Kovo', 'Baland?io', 'Gegu??s', 'Bir?elio', 'Liepos', 'Rugpjū?io', 'Rugs?jo', 'Spalio', 'Lapkri?io', 'Gruod?io'
    ],
    dayOfWeekShort: [
      'Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', '?e?'
    ],
    dayOfWeek: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Tre?iadienis', 'Ketvirtadienis', 'Penktadienis', '?e?tadienis']
  },
  lv: { //Latvian (Latvie?u)
    months: [
      'Janvāris', 'Februāris', 'Marts', 'Aprīlis ', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'
    ],
    dayOfWeekShort: [
      'Sv', 'Pr', 'Ot', 'Tr', 'Ct', 'Pk', 'St'
    ],
    dayOfWeek: ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Tre?diena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena']
  },
  mk: { //Macedonian (Македонски)
    months: [
      '?ануари', 'февруари', 'март', 'април', 'ма?', '?уни', '?ули', 'август', 'септември', 'октомври', 'ноември', 'декември'
    ],
    dayOfWeekShort: [
      'нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб'
    ],
    dayOfWeek: ['Недела', 'Понеделник', 'Вторник', 'Среда', 'Четврток', 'Петок', 'Сабота']
  },
  mn: { //Mongolian (Монгол)
    months: [
      '1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'
    ],
    dayOfWeekShort: [
      'Дав', 'Мяг', 'Лха', 'П?р', 'Бсн', 'Бям', 'Ням'
    ],
    dayOfWeek: ['Даваа', 'Мягмар', 'Лхагва', 'П?рэв', 'Баасан', 'Бямба', 'Ням']
  },
  'pt-BR': { //Português(Brasil)
    months: [
      'Janeiro', 'Fevereiro', 'Mar?o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    dayOfWeekShort: [
      'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
    ],
    dayOfWeek: ['Domingo', 'Segunda', 'Ter?a', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  },
  sk: { //Sloven?ina
    months: [
      'Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'
    ],
    dayOfWeekShort: [
      'Ne', 'Po', 'Ut', 'St', '?t', 'Pi', 'So'
    ],
    dayOfWeek: ['Nede?a', 'Pondelok', 'Utorok', 'Streda', '?tvrtok', 'Piatok', 'Sobota']
  },
  sq: { //Albanian (Shqip)
    months: [
      'Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'N?ntor', 'Dhjetor'
    ],
    dayOfWeekShort: [
      'Die', 'H?n', 'Mar', 'M?r', 'Enj', 'Pre', 'Shtu'
    ],
    dayOfWeek: ['E Diel', 'E H?n?', 'E Martē', 'E M?rkur?', 'E Enjte', 'E Premte', 'E Shtun?']
  },
  'sr-YU': { //Serbian (Srpski)
    months: [
      'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
    ],
    dayOfWeekShort: [
      'Ned', 'Pon', 'Uto', 'Sre', '?et', 'Pet', 'Sub'
    ],
    dayOfWeek: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', '?etvrtak', 'Petak', 'Subota']
  },
  sr: { //Serbian Cyrillic (Српски)
    months: [
      '?ануар', 'фебруар', 'март', 'април', 'ма?', '?ун', '?ул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'
    ],
    dayOfWeekShort: [
      'нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'
    ],
    dayOfWeek: ['Неде?а', 'Понеде?ак', 'Уторак', 'Среда', 'Четвртак', 'Петак', 'Субота']
  },
  sv: { //Svenska
    months: [
      'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
    ],
    dayOfWeekShort: [
      'S?n', 'M?n', 'Tis', 'Ons', 'Tor', 'Fre', 'L?r'
    ],
    dayOfWeek: ['S?ndag', 'M?ndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'L?rdag']
  },
  'zh-TW': { //Traditional Chinese (繁體中文)
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    dayOfWeekShort: [
      '日', '一', '二', '三', '四', '五', '六'
    ],
    dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  },
  'zh-CN': { //Simplified Chinese (简体中文)
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    dayOfWeekShort: [
      '日', '一', '二', '三', '四', '五', '六'
    ],
    dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    postsMonthTip: '查看yyyy年MM月的文章',
    titleFormat: 'yyyy年MM月'
  },
  he: { //Hebrew (?????)
    months: [
      '?????', '??????', '???', '?????', '???', '????', '????', '??????', '??????', '???????', '??????', '?????'
    ],
    dayOfWeekShort: [
      '?\'', '?\'', '?\'', '?\'', '?\'', '?\'', '???'
    ],
    dayOfWeek: ['?????', '???', '?????', '?????', '?????', '????', '???', '?????']
  },
  hy: { // Armenian
    months: [
      '???????', '???????', '????', '?????', '?????', '??????', '??????', '???????', '?????????', '?????????', '????????', '?????????'
    ],
    dayOfWeekShort: [
      '??', '???', '???', '???', '???', '????', '???'
    ],
    dayOfWeek: ['??????', '??????????', '?????????', '??????????', '?????????', '??????', '?????']
  },
  kg: { // Kyrgyz
    months: [
      '?чт?н айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
    ],
    dayOfWeekShort: [
      'Жек', 'Д?й', 'Шей', 'Шар', 'Бей', 'Жум', 'Ише'
    ],
    dayOfWeek: [
      'Жекшемб', 'Д?йш?мб', 'Шейшемб', 'Шаршемб', 'Бейшемби', 'Жума', 'Ишенб'
    ]
  },
  rm: { // Romansh
    months: [
      'Schaner', 'Favrer', 'Mars', 'Avrigl', 'Matg', 'Zercladur', 'Fanadur', 'Avust', 'Settember', 'October', 'November', 'December'
    ],
    dayOfWeekShort: [
      'Du', 'Gli', 'Ma', 'Me', 'Gie', 'Ve', 'So'
    ],
    dayOfWeek: [
      'Dumengia', 'Glindesdi', 'Mardi', 'Mesemna', 'Gievgia', 'Venderdi', 'Sonda'
    ]
  },
  ka: { // Georgian
    months: [
      '???????', '?????????', '?????', '??????', '?????', '??????', '??????', '???????', '??????????', '?????????', '????????', '?????????'
    ],
    dayOfWeekShort: [
      '??', '???', '????', '???', '???', '???', '???'
    ],
    dayOfWeek: ['?????', '????????', '?????????', '?????????', '?????????', '?????????', '??????']
  },
};