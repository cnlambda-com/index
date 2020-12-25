var renderTemplate = function (templateId, data, toWhere) {
    templateId = "#"+templateId;
    toWhere = "#"+toWhere;
    var template = $.templates(templateId);
    template.link(toWhere, data);
};

$(function () {
    $("#language").change(function () {
        if($(this).val() == "zh"){
            window.location.href = window.location.href.replace("en","zh");
        }else{
            window.location.href = window.location.href.replace("zh","en");
        }


    })
});