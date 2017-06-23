/**
 * 信息统计管理初始化
 */
var InformationStat = {
    id: "InformationStatTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
InformationStat.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
InformationStat.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        InformationStat.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加信息统计
 */
InformationStat.openAddInformationStat = function () {
    var index = layer.open({
        type: 2,
        title: '添加信息统计',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/informationStat/informationStat_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看信息统计详情
 */
InformationStat.openInformationStatDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '信息统计详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/informationStat/informationStat_update/' + InformationStat.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除信息统计
 */
InformationStat.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/informationStat/delete", function (data) {
            Feng.success("删除成功!");
            InformationStat.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("informationStatId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询信息统计列表
 */
InformationStat.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    InformationStat.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = InformationStat.initColumn();
    var table = new BSTable(InformationStat.id, "/informationStat/list", defaultColunms);
    table.setPaginationType("client");
    InformationStat.table = table.init();
});
