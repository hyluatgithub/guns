package com.luhy.guns.modular.business.controller;

import com.luhy.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 信息上报控制器
 *
 * @author luhy
 * @Date 2017-06-23 17:17:32
 */
@Controller
@RequestMapping("/infoReport")
public class InfoReportController extends BaseController {

    private String PREFIX = "/business/infoReport/";

    /**
     * 跳转到信息上报首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "infoReport.html";
    }

    /**
     * 跳转到添加信息上报
     */
    @RequestMapping("/infoReport_add")
    public String infoReportAdd() {
        return PREFIX + "infoReport_add.html";
    }

    /**
     * 跳转到修改信息上报
     */
    @RequestMapping("/infoReport_update/{infoReportId}")
    public String infoReportUpdate(@PathVariable Integer infoReportId, Model model) {
        return PREFIX + "infoReport_edit.html";
    }

    /**
     * 获取信息上报列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增信息上报
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除信息上报
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改信息上报
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 信息上报详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
