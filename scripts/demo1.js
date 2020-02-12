




window.onload = function () {

    document.addEventListener('contextmenu', event => event.preventDefault());
    
    OrgChart.templates.cool = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.cool.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="cool-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

    OrgChart.templates.cool.size = [310, 190];
    OrgChart.templates.cool.node = '<rect filter="url(#cool-shadow)"  x="0" y="0" height="190" width="310" fill="#ffffff" stroke-width="1" stroke="#eeeeee" rx="10" ry="10"></rect><rect fill="#ffffff" x="100" y="10" width="200" height="100" rx="10" ry="10" filter="url(#cool-shadow)"></rect><rect stroke="#eeeeee" stroke-width="1" x="10" y="120" width="220" fill="#ffffff" rx="10" ry="10" height="60"></rect><rect stroke="#eeeeee" stroke-width="1" x="240" y="120" width="60" fill="#ffffff" rx="10" ry="10" height="60"></rect><text  style="font-size: 15px;" fill="#afafaf" x="110" y="60">Nick Name</text>';

    OrgChart.templates.cool.img = '<clipPath id="{randId}"><rect  fill="#ffffff" stroke="#039BE5" stroke-width="5" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="10"  width="80" height="100"></image><rect fill="none" stroke="#F57C00" stroke-width="2" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect>';

    OrgChart.templates.cool.name = '<text  style="font-size: 25px;" fill="#afafaf" x="110" y="40">{val}</text>';
    OrgChart.templates.cool.title = '<text  style="font-size: 20px;" fill="#F57C00" x="20" y="157">{val}</text>';
    OrgChart.templates.cool.title2 = '<text style="font-size: 14px;" fill="#afafaf" x="20" y="165">{val}</text>';
    OrgChart.templates.cool.points = '<text style="font-size: 24px;" fill="#F57C00" x="270" y="160" text-anchor="middle">{val}</text>';
    OrgChart.templates.cool.dateOfBirth = '<text style="font-size: 24px;" fill="#F57C00" x="110" y="90" >{val}</text>';
    OrgChart.templates.cool.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background-color:#F2F2F2;display:block;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>';



    var chart;
    // chart = new OrgChart(document.getElementById('tree'), {
    //     template: 'cool',
    //     nodeBinding: {
    //         name: 'name',
    //         title: 'title',
    //         title2: 'title2',
    //         points: 'points',
    //         dateOfBirth: 'dateOfBirth',
    //         img: 'img'
    //     }
    // });
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "rony",
        collapse: {
            level: 2
        },
       enableDragDrop: true,
        menu: {
            pdf: { text: "Export PDF" },
            png: { text: "Export PNG" },
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
        },
        nodeMenu: {
            details: { text: "Details" },
            add: { text: "Add New" },
            edit: { text: "Edit" },
            remove: { text: "Remove" },
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
            dateOfBirth: 'dateOfBirth',
            field_number_children: "field_number_children"
        }
    });

    chart.load([
        
        
{ id: 1, dateOfBirth: '01/01/XXXX', points: 100, name: "Mohanlalji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 2, dateOfBirth: '01/01/XXXX', points: 100, pid: 1, name: "Balkisanji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 3, dateOfBirth: '01/01/XXXX', points: 100, pid: 1, name: "Ramchandraji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 4, dateOfBirth: '01/01/XXXX', points: 100, pid: 2, name: "Kisandasji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 5, dateOfBirth: '01/01/XXXX', points: 100, pid: 2, name: "Murlidharji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 6, dateOfBirth: '01/01/XXXX', points: 100, pid: 3, name: "Parmanandji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 7, dateOfBirth: '01/01/XXXX', points: 100, pid: 4, name: "Mukunddasji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 8, dateOfBirth: '01/01/XXXX', points: 100, pid: 4, name: "Narayandasji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 9, dateOfBirth: '01/01/XXXX', points: 100, pid: 5, name: "Harikisanji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 10, dateOfBirth: '01/01/XXXX', points: 100, pid: 5, name: "Vasudevji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 11, dateOfBirth: '01/01/XXXX', points: 100, pid: 5, name: "Subhashji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 12, dateOfBirth: '01/01/XXXX', points: 100, pid: 6, name: "Brijmohanji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 13, dateOfBirth: '01/01/XXXX', points: 100, pid: 6, name: "Damodharji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 14, dateOfBirth: '01/01/XXXX', points: 100, pid: 6, name: "Ranchoddasji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 15, dateOfBirth: '01/01/XXXX', points: 100, pid: 7, name: "Pawan/Anand", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 16, dateOfBirth: '01/01/XXXX', points: 100, pid: 7, name: "Prakash", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 17, dateOfBirth: '01/01/XXXX', points: 100, pid: 8, name: "Govind", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 18, dateOfBirth: '01/01/XXXX', points: 100, pid: 9, name: "Yogesh", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 19, dateOfBirth: '01/01/XXXX', points: 100, pid: 9, name: "Aditya", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 20, dateOfBirth: '01/01/XXXX', points: 100, pid: 10, name: "Chetan", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 21, dateOfBirth: '01/01/XXXX', points: 100, pid: 10, name: "Nandan", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 22, dateOfBirth: '01/01/XXXX', points: 100, pid: 11, name: "Sarvesh", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 23, dateOfBirth: '01/01/XXXX', points: 100, pid: 11, name: "Sanket", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 24, dateOfBirth: '01/01/XXXX', points: 100, pid: 12, name: "Tejas", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 25, dateOfBirth: '01/01/XXXX', points: 100, pid: 13, name: "Anand", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 26, dateOfBirth: '01/01/XXXX', points: 100, pid: 13, name: "Ashish", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 27, dateOfBirth: '01/01/XXXX', points: 100, pid: 14, name: "NiRaj", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 28, dateOfBirth: '01/01/XXXX', points: 100, pid: 15, name: "Aadish", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        // { id: 1, dateOfBirth: '24/01/1970', points: 100, name: "Denny Curtis", title: "CEO", img: "https://balkangraph.com/js/img/2.jpg" },
        // { id: 2, dateOfBirth: '24/01/1970', points: 70, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://balkangraph.com/js/img/3.jpg" },
        // { id: 3, dateOfBirth: '24/01/1970', points: 50, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://balkangraph.com/js/img/4.jpg" },
        // { id: 4, dateOfBirth: '24/01/1970', points: 50, pid: 1, name: "Elliot Patel", title: "Sales", img: "https://balkangraph.com/js/img/5.jpg" },
        // { id: 5, dateOfBirth: '24/01/1970', points: 50, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://balkangraph.com/js/img/6.jpg" },
        // { id: 6, dateOfBirth: '24/01/1970', points: 50, pid: 2, name: "Tanner May", title: "Developer", img: "https://balkangraph.com/js/img/7.jpg" },
        // { id: 7, dateOfBirth: '24/01/1970', points: 50, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://balkangraph.com/js/img/8.jpg" },
        // { id: 9, dateOfBirth: '24/01/1970', points: 50, pid: 4, name: "A", title: "Sales Manager", img: "https://balkangraph.com/js/img/3.jpg" },
        // { id: 10, dateOfBirth: '24/01/1970', points: 50, pid: 4, name: "B", title: "Dev Manager", img: "https://balkangraph.com/js/img/4.jpg" },
        // { id: 11, dateOfBirth: '24/01/1970', points: 50, pid: 4, name: "C", title: "Sales", img: "https://balkangraph.com/js/img/5.jpg" },
        // { id: 12, dateOfBirth: '24/01/1970', points: 50, pid: 5, name: "D", title: "Sales", img: "https://balkangraph.com/js/img/6.jpg" },
        // { id: 13, dateOfBirth: '24/01/1970', points: 50, pid: 5, name: "E", title: "Developer", img: "https://balkangraph.com/js/img/7.jpg" },
        // { id: 14, dateOfBirth: '24/01/1970', points: 50, pid: 5, name: "F", title: "Developer", img: "https://balkangraph.com/js/img/8.jpg" }
    ]);
}