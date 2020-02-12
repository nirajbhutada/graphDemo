




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
            level: 3
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
        

        { id: 1, dateOfBirth: '01/01/XXXX', points: 100, name: "Dadaji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 2, dateOfBirth: '01/01/XXXX', points: 100, pid: 1, name: "Tukaram", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 3, dateOfBirth: '01/01/XXXX', points: 100, pid: 1, name: "Namdev", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 4, dateOfBirth: '01/01/XXXX', points: 100, pid: 1, name: "Krishnath", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 5, dateOfBirth: '01/01/XXXX', points: 100, pid: 1, name: "Devba", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 6, dateOfBirth: '01/01/XXXX', points: 100, pid: 2, name: "Peraji", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 7, dateOfBirth: '01/01/XXXX', points: 100, pid: 2, name: "Atmaram", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 8, dateOfBirth: '01/01/XXXX', points: 100, pid: 2, name: "Ramchandra", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 9, dateOfBirth: '01/01/XXXX', points: 100, pid: 3, name: "Gundiba", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 10, dateOfBirth: '01/01/XXXX', points: 100, pid: 3, name: "Dattatrya", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 11, dateOfBirth: '01/01/XXXX', points: 100, pid: 3, name: "Pandurang", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 12, dateOfBirth: '01/01/XXXX', points: 100, pid: 3, name: "Laxman", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 13, dateOfBirth: '01/01/XXXX', points: 100, pid: 4, name: "Sadashiv", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 14, dateOfBirth: '01/01/XXXX', points: 100, pid: 4, name: "Shankar", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 15, dateOfBirth: '01/01/XXXX', points: 100, pid: 5, name: "Jagnath", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 16, dateOfBirth: '01/01/XXXX', points: 100, pid: 5, name: "Govind", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        
        { id: 17, dateOfBirth: '01/01/XXXX', points: 100, pid: 6, name: "Bhagwant", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 18, dateOfBirth: '01/01/XXXX', points: 100, pid: 7, name: "Arjun", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 19, dateOfBirth: '01/01/XXXX', points: 100, pid: 7, name: "Arun", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        
        { id: 20, dateOfBirth: '01/01/XXXX', points: 100, pid: 8, name: "Bharat", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 21, dateOfBirth: '01/01/XXXX', points: 100, pid: 8, name: "Raju", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 22, dateOfBirth: '01/01/XXXX', points: 100, pid: 8, name: "Suresh", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 23, dateOfBirth: '01/01/XXXX', points: 100, pid: 8, name: "Vishnu", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 24, dateOfBirth: '01/01/XXXX', points: 100, pid: 8, name: "Bhaskar", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 25, dateOfBirth: '01/01/XXXX', points: 100, pid: 17, name: "Sudhir", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 26, dateOfBirth: '01/01/XXXX', points: 100, pid: 17, name: "Kishor", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 27, dateOfBirth: '01/01/XXXX', points: 100, pid: 25, name: "Suhas", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 28, dateOfBirth: '01/01/XXXX', points: 100, pid: 26, name: "Yash", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 29, dateOfBirth: '01/01/XXXX', points: 100, pid: 26, name: "Shubham", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" }, 

        { id: 30, dateOfBirth: '01/01/XXXX', points: 100, pid: 18, name: "Ganesh", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 31, dateOfBirth: '01/01/XXXX', points: 100, pid: 19, name: "Abhijeet", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 32, dateOfBirth: '01/01/XXXX', points: 100, pid: 19, name: "Samdhan", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 33, dateOfBirth: '01/01/XXXX', points: 100, pid: 31, name: "Atharv", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },        


        { id: 34, dateOfBirth: '01/01/XXXX', points: 100, pid: 20, name: "Datta", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 35, dateOfBirth: '01/01/XXXX', points: 100, pid: 22, name: "Mukund", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 36, dateOfBirth: '01/01/XXXX', points: 100, pid: 22, name: "Chetan", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 37, dateOfBirth: '01/01/XXXX', points: 100, pid: 23, name: "Pushkaraj", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 38, dateOfBirth: '01/01/XXXX', points: 100, pid: 23, name: "Rushikesh", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        
        { id: 39, dateOfBirth: '01/01/XXXX', points: 100, pid: 10, name: "Manik", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 40, dateOfBirth: '01/01/XXXX', points: 100, pid: 10, name: "Mohan", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 41, dateOfBirth: '01/01/XXXX', points: 100, pid: 39, name: "Sunil", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 42, dateOfBirth: '01/01/XXXX', points: 100, pid: 41, name: "Vishal", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 43, dateOfBirth: '01/01/XXXX', points: 100, pid: 40, name: "Yogesh", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 44, dateOfBirth: '01/01/XXXX', points: 100, pid: 40, name: "Sham", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },   

        { id: 45, dateOfBirth: '01/01/XXXX', points: 100, pid: 11, name: "Avdumber", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 46, dateOfBirth: '01/01/XXXX', points: 100, pid: 45, name: "Yuvraj", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 47, dateOfBirth: '01/01/XXXX', points: 100, pid: 46, name: "Yash", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" }, 


        { id: 48, dateOfBirth: '01/01/XXXX', points: 100, pid: 12, name: "Krishna", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 49, dateOfBirth: '01/01/XXXX', points: 100, pid: 12, name: "Deepak", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 50, dateOfBirth: '01/01/XXXX', points: 100, pid: 12, name: "Mohan", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 51, dateOfBirth: '01/01/XXXX', points: 100, pid: 12, name: "Jeevan", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 52, dateOfBirth: '01/01/XXXX', points: 100, pid: 48, name: "Pradip", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 53, dateOfBirth: '01/01/XXXX', points: 100, pid: 48, name: "Pramod", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 54, dateOfBirth: '01/01/XXXX', points: 100, pid: 50, name: "Vaibhav", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 55, dateOfBirth: '01/01/XXXX', points: 100, pid: 51, name: "Jay", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },  


        


        { id: 56, dateOfBirth: '01/01/XXXX', points: 100, pid: 13, name: "Vijay", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 57, dateOfBirth: '01/01/XXXX', points: 100, pid: 56, name: "Son", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },


        { id: 58, dateOfBirth: '01/01/XXXX', points: 100, pid: 14, name: "Maruti", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 59, dateOfBirth: '01/01/XXXX', points: 100, pid: 14, name: "Shivaaba", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 60, dateOfBirth: '01/01/XXXX', points: 100, pid: 58, name: "Vishal", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 61, dateOfBirth: '01/01/XXXX', points: 100, pid: 58, name: "Kunal", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },

        { id: 62, dateOfBirth: '01/01/XXXX', points: 100, pid: 59, name: "Yogesh", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },
        { id: 63, dateOfBirth: '01/01/XXXX', points: 100, pid: 59, name: "Shrikant", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" },  
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