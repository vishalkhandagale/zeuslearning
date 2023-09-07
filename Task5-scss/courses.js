fetch("courses.json")
    .then(function (response) {
    return response.json();
})
    .then(function (courses) {
    var placeholder = document.getElementById("course-container");
    var out = "";
    for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
        var course = courses_1[_i];
        out += "\n        <div class=\"course-wrapper\" >\n            <div class=\"course-card\">\n            ".concat(course.isfavourite ? "<span class=\"star\"><img src=\"files/icons/favourite.svg\" alt=\"\"></span>" : '<span class="star"><img src="files/icons/unfavourite.svg" alt=""></span>', "\n            ").concat(course.isexpired ? "<span class=\"expired\"} \">EXPIRED</span>" : '', "\n                <img src=\"").concat(course.image, "\" alt=\"\">\n                <div class=\"course-details\">\n                    <p class=\"course-name\">").concat(course.title, "</p>\n                    <p class=\"subject-grade\">").concat(course.subject, " | <b> Grade ").concat(course.grade, "</b><span class=\"greencolor\"> +").concat(course.additional_grade, "</span></p>\n                    <p class=\"sylabus\">").concat(course.units ? "<b>".concat(course.units, "</b> Units ") : ' ').concat(course.lessons ? "<b>".concat(course.lessons, "</b> Lessons") : "").concat(course.topics ? "<b>".concat(course.topics, "</b> Topics") : '', "</p>\n                    <select class=\"teacher\" value=\"state\" name=\"state\">\n                    ").concat(course.classes.length ? "\n\n                    ".concat(course.classes.map(function (clas) { return "<option value=\"s1\">".concat(clas, "</option>"); }).join('')) : '<option value="s1">No Classes</option>', "\n                       \n                    </select>\n                    \n                    \n                    <p class=\"Scount-Date\">").concat(course.students ? "<span class=\"studentCount\">".concat(course.students, "</span> Students") : '').concat(course.students && course.start_date ? "|" : '', " \n                    ").concat(course.start_date ? "<span class=\"dateFrom\">".concat(course.start_date, "</span> - <span class=\"dateTo\">").concat(course.end_date, "</span>") : '', "\n                    </p>\n                </div>\n\n\n            </div>\n            <div class=\"course-actions\">\n                <img ").concat(course.footer.iswatch ? '' : "class='blured'", " src=\"files/icons/preview.svg\" alt=\"\">\n                <img ").concat(course.footer.iscalender ? '' : "class='blured'", "src=\"files/icons/manage course.svg\" alt=\"\">\n                <img ").concat(course.footer.isgraded ? '' : "class='blured'", " src=\"files/icons/grade submissions.svg\" alt=\"\">\n                <img ").concat(course.footer.isreported ? '' : "class='blured'", " src=\"files/icons/reports.svg\" alt=\"\">\n\n            </div>\n\n        </div>\n\n        ");
    }
    placeholder.innerHTML = out;
});
 