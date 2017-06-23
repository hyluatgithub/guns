/**
 * 信息上报管理初始化
 */
var InformationReport = {
    id: "InformationReportTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
InformationReport.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
InformationReport.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        InformationReport.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加信息上报
 */
InformationReport.openAddInformationReport = function () {
    var index = layer.open({
        type: 2,
        title: '添加信息上报',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/informationReport/informationReport_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看信息上报详情
 */
InformationReport.openInformationReportDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '信息上报详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/informationReport/informationReport_update/' + InformationReport.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除信息上报
 */
InformationReport.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/informationReport/delete", function (data) {
            Feng.success("删除成功!");
            InformationReport.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("informationReportId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询信息上报列表
 */
InformationReport.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    InformationReport.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = InformationReport.initColumn();
    var table = new BSTable(InformationReport.id, "/informationReport/list", defaultColunms);
    table.setPaginationType("client");
    InformationReport.table = table.init();
});
