
window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        layout: OrgChart.mixed,
        template: "polina",
        enableSearch: false,
        enableDragDrop: true,
        mouseScrool: OrgChart.action.zoom,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        nodes: [
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

        { id: 28, dateOfBirth: '01/01/XXXX', points: 100, pid: 15, name: "Aadish", title: "Chairman and CEO", img: "https://balkangraph.com/js/img/1.jpg" }
        ]
    });   
};