

window.onload = function () {


    OrgChart.toolbarUI.expandAllIcon = '<img width="32" src=https://balkangraph.com/js/img/expand.png />';
    OrgChart.toolbarUI.fitIcon = '<img width="32" src=https://balkangraph.com/js/img/plan.png />';
    OrgChart.toolbarUI.zoomInIcon = '<img width="32" src=https://balkangraph.com/js/img/zoom-out.png />';
    OrgChart.toolbarUI.zoomOutIcon = '<img width="32" src=https://balkangraph.com/js/img/zoom-in.png />';    
    OrgChart.toolbarUI.layoutIcon = '<img width="32" src=https://balkangraph.com/js/img/layout.png />';  
    
    
    
    var chart = new OrgChart(document.getElementById("tree"), {
            template: "ula",
            toolbar: {
                layout: true,
                zoom: true,
                fit: true,
                expandAll: true
            },
    
            layout: OrgChart.tree,
            align: OrgChart.ORIENTATION,
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                img_0: "img"
            },
            collapse: {
                level: 2
            },
            expand: {
                nodes: [2, 4],
                allChildren: true
            },
            nodes: [
                { id: 1, name: "Jack Hill", title: "Chairman and CEO", email: "amber@domain.com", img: "https://balkangraph.com/js/img/1.jpg" },
                { id: 2, pid: 1, name: "Lexie Cole", title: "QA Lead", email: "ava@domain.com", img: "https://balkangraph.com/js/img/2.jpg" },
                { id: 3, pid: 1, name: "Janae Barrett", title: "Technical Director", img: "https://balkangraph.com/js/img/3.jpg" },
                { id: 4, pid: 1, name: "Aaliyah Webb", title: "Manager", email: "jay@domain.com", img: "https://balkangraph.com/js/img/4.jpg" },
                { id: 5, pid: 2, name: "Elliot Ross", title: "QA", img: "https://balkangraph.com/js/img/5.jpg" },
                { id: 6, pid: 2, name: "Anahi Gordon", title: "QA", img: "https://balkangraph.com/js/img/6.jpg" },
                { id: 7, pid: 2, name: "Knox Macias", title: "QA", img: "https://balkangraph.com/js/img/7.jpg" },
                { id: 8, pid: 3, name: "Nash Ingram", title: ".NET Team Lead", email: "kohen@domain.com", img: "https://balkangraph.com/js/img/8.jpg" },
                { id: 9, pid: 3, name: "Sage Barnett", title: "JS Team Lead", img: "https://balkangraph.com/js/img/9.jpg" },
                { id: 10, pid: 3, name: "Alice Gray", title: "Programmer", img: "https://balkangraph.com/js/img/10.jpg" },
                { id: 11, pid: 3, name: "Anne Ewing", title: "Programmer", img: "https://balkangraph.com/js/img/11.jpg" },
                { id: 12, pid: 3, name: "Reuben Mcleod", title: "Programmer", img: "https://balkangraph.com/js/img/12.jpg" },
                { id: 13, pid: 3, name: "Ariel Wiley", title: "Programmer", img: "https://balkangraph.com/js/img/13.jpg" },
                { id: 14, pid: 4, name: "Lucas West", title: "Marketer", img: "https://balkangraph.com/js/img/14.jpg" },
                { id: 15, pid: 4, name: "Adan Travis", title: "Designer", img: "https://balkangraph.com/js/img/15.jpg" },
                { id: 16, pid: 4, name: "Alex Snider", title: "Sales Manager", img: "https://balkangraph.com/js/img/16.jpg" },

                { id: 17, pid: 5, name: "Adan Travis", title: "Designer", img: "https://balkangraph.com/js/img/15.jpg" },
                { id: 18, pid: 5, name: "Alex Snider", title: "Sales Manager", img: "https://balkangraph.com/js/img/16.jpg" }
            ]
        });
};
