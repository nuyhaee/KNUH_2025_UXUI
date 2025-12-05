/* ==========================================
   조선왕조의궤 아카이브 - 온톨로지 그래프 설정
   (Vis.js Logic)
   ========================================== */

// [1] 공통 옵션 (디자인 및 물리엔진)
const commonOptions = {
    nodes: {
        borderWidth: 4,
        size: 40,
        color: { border: '#333', background: '#fff' },
        font: { face: 'Pretendard-bold', size: 18, color: '#333', strokeWidth: 2, strokeColor: '#fff' },
        shape: 'image'
    },
    edges: {
        color: '#888',
        arrows: { to: { enabled: true, scaleFactor: 0.5 } },
        font: { align: 'middle', size: 18 },
        smooth: { type: 'cubicBezier' }
    },
    physics: {
        enabled: true,
        barnesHut: {
            gravitationalConstant: -5000,
            centralGravity: 0.3,
            springLength: 200,
            springConstant: 0.04,
            damping: 0.09,
            avoidOverlap: 0.5
        },
        stabilization: { iterations: 150 }
    },
    interaction: { hover: true }
};

// [2] 그래프 1: 흉례 메인
function drawNetwork1() {
    var nodes = new vis.DataSet([
        // 흉례.webp -> hyung-rye.webp
        { id: 1, label: '흉례', image: 'img/hyung-rye.webp', size: 50, color:{border:'orange'} },
        // 과정.webp -> process.webp
        { id: 2, label: '빈전/혼전', image: 'img/process.webp' },
        { id: 3, label: '국장', image: 'img/process.webp' },
        { id: 4, label: '부묘', image: 'img/process.webp' },
        { id: 5, label: '산릉(산소)', image: 'img/process.webp' },
        // 의궤.png -> uigwe-icon.png
        { id: 6, label: '빈전도감의궤', image: 'img/uigwe-icon.png', size: 40 },
        { id: 7, label: '국장도감의궤', image: 'img/uigwe-icon.png', size: 50 },
        { id: 8, label: '산릉도감의궤', image: 'img/uigwe-icon.png', size: 40 },
        { id: 9, label: '부묘도감의궤', image: 'img/uigwe-icon.png', size: 40 }
    ]);

    var edges = new vis.DataSet([
        { from: 1, to: 2, label: 'A는 B를 포함하다' },
        { from: 1, to: 3, label: 'A는 B를 포함하다' },
        { from: 1, to: 4, label: 'A는 B를 포함하다' },
        { from: 1, to: 5, label: 'A는 B를 포함하다' },
        { from: 2, to: 6, label: 'A는 B에 기록된다' },
        { from: 3, to: 7, label: 'A는 B에 기록된다' },
        { from: 4, to: 9, label: 'A는 B에 기록된다' },
        { from: 5, to: 8, label: 'A는 B에 기록된다' } 
    ]);

    var network = new vis.Network(document.getElementById('network1'), { nodes: nodes, edges: edges }, commonOptions);
    
    // 클릭 이벤트
    network.on("click", function (params) {
        if (params.nodes.length > 0 && params.nodes[0] === 7) {
            if(typeof goRitualScene === 'function') goRitualScene(3);
        }
    });
}

// [3] 그래프 2: 국장도감의궤
function drawNetwork2() {
    var nodes = new vis.DataSet([
        // 의궤.png -> uigwe-icon.png
        { id: 1, label: '국장도감의궤', image: 'img/uigwe-icon.png', size: 60, color: { border: '#d85c5c', background: '#fff' } },
        // 왕.png -> king-icon.png
        { id: 2, label: '왕', image: 'img/king-icon.png', size: 45 },
        // 왕비.png -> queen-icon.png
        { id: 3, label: '왕비', image: 'img/queen-icon.png', size: 45 },
        // 왕세자:빈.png (특수문자 제거 필수) -> crown-prince.png
        { id: 4, label: '왕세자/빈', image: 'img/crown-prince.png', size: 45 },
        { id: 5, label: '소현세자', image: 'img/crown-prince.png', size: 30 },
        { id: 6, label: '효창세자', image: 'img/crown-prince.png', size: 30 },
        { id: 7, label: '사도세자', image: 'img/crown-prince.png', size: 30 },
        { id: 8, label: '의소세손', image: 'img/crown-prince.png', size: 30 },
        { id: 9, label: '문효세자', image: 'img/crown-prince.png', size: 30 },
        { id: 10, label: '효명세자', image: 'img/crown-prince.png', size: 30 },
        { id: 11, label: '현빈조씨', image: 'img/crown-prince.png', size: 30 },
        // 왕.png -> king-icon.png 재사용
        { id: 12, label: '선조', image: 'img/king-icon.png', size: 15 },
        { id: 13, label: '효종', image: 'img/king-icon.png', size: 15 },
        { id: 14, label: '현종', image: 'img/king-icon.png', size: 15 },
        { id: 15, label: '숙종', image: 'img/king-icon.png', size: 15 },
        { id: 16, label: '경종', image: 'img/king-icon.png', size: 15 },
        { id: 17, label: '영조', image: 'img/king-icon.png', size: 15 },
        { id: 18, label: '정조', image: 'img/king-icon.png', size: 15 },
        { id: 19, label: '순조', image: 'img/king-icon.png', size: 15 },
        { id: 20, label: '헌종', image: 'img/king-icon.png', size: 15 },
        { id: 21, label: '철종', image: 'img/king-icon.png', size: 35 }, 
        { id: 22, label: '고종', image: 'img/king-icon.png', size: 15 },
        // 왕비.png -> queen-icon.png 재사용
        { id: 23, label: '의인왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 24, label: '인목왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 25, label: '인선왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 26, label: '인경왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 27, label: '인현왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 28, label: '인원왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 29, label: '정성왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 30, label: '정순왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 31, label: '효의왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 32, label: '순원왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 33, label: '효현왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 34, label: '철인왕후', image: 'img/queen-icon.png', size: 30 },
        { id: 35, label: '명성황후', image: 'img/queen-icon.png', size: 30 }
    ]);

    var edges = new vis.DataSet([
        { from: 1, to: 2, label: 'A는 B에 기록된다' },
        { from: 1, to: 3, label: 'A는 B에 기록된다' },
        { from: 1, to: 4, label: 'A는 B에 기록된다' },
        { from: 4, to: 5 }, { from: 4, to: 6 }, { from: 4, to: 7 }, { from: 4, to: 8 },
        { from: 4, to: 9 }, { from: 4, to: 10 }, { from: 4, to: 11 },
        { from: 2, to: 12 }, { from: 2, to: 13 }, { from: 2, to: 14 }, { from: 2, to: 15 },
        { from: 2, to: 16 }, { from: 2, to: 17 }, { from: 2, to: 18 }, { from: 2, to: 19 },
        { from: 2, to: 20 }, { from: 2, to: 21 }, { from: 2, to: 22 },
        { from: 3, to: 23 }, { from: 3, to: 24 }, { from: 3, to: 25 }, { from: 3, to: 26 },
        { from: 3, to: 27 }, { from: 3, to: 28 }, { from: 3, to: 29 }, { from: 3, to: 30 },
        { from: 3, to: 31 }, { from: 3, to: 32 }, { from: 3, to: 33 }, { from: 3, to: 34 },
        { from: 3, to: 35 }
    ]);

    var network = new vis.Network(document.getElementById('network2'), { nodes: nodes, edges: edges }, commonOptions);

    network.on("click", function (params) {
        if (params.nodes.length > 0) {
            var clickedId = params.nodes[0];
            if (clickedId === 21 || clickedId === 2) { 
                if(typeof goRitualScene === 'function') goRitualScene(4);
            }
        }
    });
}

// [4] 그래프 3: 철종 상세
function drawNetwork3() {
    var nodes = new vis.DataSet([
        // 철종국장도감.webp -> cheoljong-book.webp
        { id: 1, label: '철종국장도감의궤', image: 'img/cheoljong-book.webp', size: 55, color: { border: '#552b2b', background: '#fff' } },
        // 철종.webp -> cheoljong.webp
        { id: 2, label: '철종', image: 'img/cheoljong.webp', size: 45 },
        // 철종국장.png -> cheoljong-funeral.png
        { id: 3, label: '철종국장', image: 'img/cheoljong-funeral.png', size: 45 },
        // 국장도감.webp -> agency.webp
        { id: 4, label: '국장도감', image: 'img/agency.webp' },
        // 신백요여.webp -> palanquin.webp
        { id: 5, label: '신백요여', image: 'img/palanquin.webp' },
        // 반차도.webp -> banchado.webp
        { id: 6, label: '반차도', image: 'img/banchado.webp' },
        // 오대산사고.webp -> odaesan.webp
        { id: 7, label: '오대산 사고', image: 'img/odaesan.webp' },
        // 국립조선왕조실록박물관.webp -> museum.webp
        { id: 8, label: '국립조선왕조\n실록박물관', image: 'img/museum.webp' }, 
        // 행위.webp -> procession.webp
        { id: 9, label: '빈전을 떠나 장지(왕릉)까지\n이동하는 거대한 행렬', image: 'img/procession.webp' }
    ]);

    var edges = new vis.DataSet([
        { from: 2, to: 1, label: 'A는 B에 기록된다' },
        { from: 2, to: 3, label: 'A는 B에 대상이다' },
        { from: 4, to: 3, label: 'A는 B를 담당한다' },
        { from: 3, to: 9, label: 'A는 B를 포함하다' },
        { from: 9, to: 5, label: 'A는 B를 사용하다' },
        { from: 9, to: 6, label: 'A는 B에 기록된다' },
        { from: 6, to: 1, label: 'A는 B에 포함된다' },
        { from: 1, to: 7, label: 'A는 B에 보관된다' },
        { from: 1, to: 8, label: 'A는 B에서 소장한다' }
    ]);

    var options = {
        nodes: {
            borderWidth: 4,
            size: 40,
            color: { border: '#333', background: '#fff' },
            font: { face: 'Pretendard-bold', size: 18, color: '#333', strokeWidth: 3, strokeColor: '#fff' },
            shape: 'image'
        },
        edges: {
            color: '#666',
            arrows: { to: { enabled: true, scaleFactor: 0.5 } },
            font: { align: 'middle', size: 18, strokeWidth: 0, color: '#333', background: '#f9f9f9' },
            smooth: { type: 'cubicBezier', forceDirection: 'vertical', roundness: 0.4 }
        },
        physics: {
            enabled: true,
            barnesHut: {
                gravitationalConstant: -6000,
                centralGravity: 0.1,
                springLength: 250,
                springConstant: 0.04,
                damping: 0.09,
                avoidOverlap: 1
            },
            stabilization: { iterations: 150 }
        },
        interaction: { hover: true }
    };

    new vis.Network(document.getElementById('network3'), { nodes: nodes, edges: edges }, options);
}