/**
 * 信息类型管理管理初始化
 */
var InformationType = {
    id: "InformationTypeTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
InformationType.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
InformationType.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        InformationType.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加信息类型管理
 */
InformationType.openAddInformationType = function () {
    var index = layer.open({
        type: 2,
        title: '添加信息类型管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/informationType/informationType_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看信息类型管理详情
 */
InformationType.openInformationTypeDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '信息类型管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/informationType/informationType_update/' + InformationType.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除信息类型管理
 */
InformationType.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/informationType/delete", function (data) {
            Feng.success("删除成功!");
            InformationType.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("informationTypeId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询信息类型管理列表
 */
InformationType.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    InformationType.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = InformationType.initColumn();
    var table = new BSTable(InformationType.id, "/informationType/list", defaultColunms);
    table.setPaginationType("client");
    InformationType.table = table.init();
});
