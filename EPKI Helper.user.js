// ==UserScript==
// @name         EPKI Helper
// @version      1.4.0
// @namespace    https://github.com/iambz00/epkihelper/raw/master/EPKI%20Helper.user.js
// @description  EPKI 한글/pdf 서식 자동입력
// @author       You
// @match        https://admin.epki.go.kr:8443/common/popup/search_department.do
// @match        https://admin.epki.go.kr:8443/user_management/user_reg.do
// @match        https://admin.epki.go.kr:8443/user_management/user_reg.do?userType=p
// @match        https://admin.epki.go.kr:8443/user_management/user_detail.do
// @downloadURL  https://github.com/iambz00/epkihelper/raw/master/EPKI%20Helper.user.js
// @icon         data:image/gif;base64,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
// @grant        none
// ==/UserScript==

var EPKIHELPER_HEADER = '▒ ' + GM_info.script.name + ' ' + GM_info.script.version + ' ▒'
var headers = [
    '성명',
    '주민등록번호',
    '이메일',
    '휴대전화번호',
    '임시비밀번호',
    ' 전화번호'
]

// obj 에 readonly 속성이나 클래스가 없을 때만 value 설정
function setvalue(obj, value) {
    if (obj && !obj.getAttribute('readonly') && !obj.className.includes('readonly')) {
        obj.value = value
    }
}

function set(event) {
    event.preventDefault()
    var ta = document.querySelector('textarea#auto')
    var result = (event.clipboardData || window.clipboardData).getData('text')
    result = result.replaceAll('외국인등록번호', '').replaceAll('()', '').replaceAll('–','-').replaceAll('\r', '\n')
    for(const header of headers) {
        result = result.replaceAll(header, '\n' + header + '\n')
    }
    result = result
        .replaceAll(' \n', '\n').replaceAll('\n\n', '\n')
        .replaceAll(' \n', '\n').replaceAll('\n\n', '\n')
        .replaceAll(' \n', '\n').replaceAll('\n\n', '\n').trim()
    ta.value = result
    var tok = result.replaceAll(' ','').split('\n')

    try {
        if (tok.length < 8) throw false
        var name = tok[1 + tok.indexOf('성명')].trim()
        var ssn = tok[1 + tok.indexOf('주민등록번호')].trim().replaceAll('-','')
        var ssn1 = ssn.substr(0,6)
        var ssn2 = ssn.substr(6,7)
        var mail = tok[1 + tok.indexOf('이메일')].trim()
        var cell = tok[1 + tok.indexOf('휴대전화번호')].trim().replaceAll('-','').replaceAll('.','')
        var cel2 = cell.substr(3,4)
        var cel3 = cell.substr(7,4)
        var pw = tok[1 + tok.indexOf('임시비밀번호')].trim().substr(0,8)

        setvalue(document.querySelector('input[name=userName]'), name)
        setvalue(document.querySelector('input[name=ssn1]'), ssn1)
        setvalue(document.querySelector('input[name=ssn2]'), ssn2)
        setvalue(document.querySelector('input[name=cell2]'), cel2)
        setvalue(document.querySelector('input[name=cell3]'), cel3)
        setvalue(document.querySelector('input[name=assignEmail]'), mail)
        setvalue(document.querySelector('input[name=userPassword]'), pw)
        setvalue(document.querySelector('input[name=textPassword]'), pw)

        document.querySelector('input[name=userName]').focus()
        //document.querySelector('input[name=userPassword]').focus()
        ta.focus()
        ta.scrollTo(0,0)
    } catch(e) {
    }
}

(function() {
    'use strict';
    //
    // [소속기관 검색] 아래 여백 축소
    //
    var search = document.querySelector('ul.gap_54')
    if(search) {
        search.className = 'gap_20'
    }

    //
    // [즐겨찾기] 없으면 제거 있으면 크기 변경
    //
    var bookmark = document.querySelector('div.box.gap_20')
    if(bookmark) {
        if (bookmark.innerText.includes('없습니다')) {
            bookmark.parentNode.removeChild(bookmark)
            var ul = document.querySelectorAll('ul.sub_title')[1]
            ul.parentNode.removeChild(ul)
        } else {
            // 원하는 높이를 입력 - 기본값 '115px'
            bookmark.style.height = '115px'
        }
    }

    // 등록/수정 개인용일 때에만 동작
    if(document.location.href.match('user_management') && !document.location.href.endsWith('userType=P')) {
        //
        // [상세정보입력] 아래 붙여넣기 영역 추가
        //
        var tr = document.createElement('tr')
        var td = document.createElement('td')
        var ta = document.createElement('textarea')
        ta.id = 'auto'
        ta.style.width = '95%'
        ta.rows = 5
        ta.style.backgroundColor = '#ffe'
        ta.setAttribute('readonly','readonly')
        ta.onpaste = set
        ta.value = EPKIHELPER_HEADER + '\n'
        ta.value += '1. 신청서에서 성명부터 임시비밀번호까지 선택해서 이 칸에 붙여넣기\n'
        ta.value += '  (\'성명\', \'임시비밀번호\' 등 제목 칸까지 모두 선택해야 함)\n'
        ta.value += '2. [등록] 클릭\n'
        ta.value += '  (DN 생성을 기다릴 필요 없음)'
        td.colSpan = 4
        td.appendChild(ta)
        tr.appendChild(td)
        document.querySelector('table.result_style_1[summary="상세정보입력"] tbody').appendChild(tr)
    }
    // 기관선택시
    if(document.location.href.match('search_department.do')) {
        document.querySelector('input[name=query]').onkeypress = function(e) {
            //console.log(e)
            var n = Number(e.key)
            if (n && n > 0) {
                n--
                var nm = document.querySelector('#name'+n).click()
                if (nm) {
                    nm.click()
                }
            }
        }
        var ta2 = document.createElement('textarea')
        ta2.id = 'auto'
        ta2.style.width = '95%'
        ta2.rows = 2
        ta2.style.backgroundColor = '#ffe'
        ta2.setAttribute('readonly','readonly')
        ta2.value = EPKIHELPER_HEADER + '\n'
        ta2.value += '검색결과에서 [순번]에 해당하는 숫자 키 입력 시 선택됩니다.'
        ta2.style.margin = '2px 0 0 5px'
        var ultitle = document.querySelector('ul.title')
        if (ultitle) {
            ultitle.append(ta2)
            ultitle.style.marginBottom = '5px'
        }
    }
})();