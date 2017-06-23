package com.luhy.guns.modular.information.controller;

import BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 信息类型管理控制器
 *
 * @author luhy
 * @Date 2017-06-23 18:45:45
 */
@Controller
@RequestMapping("/informationType")
public class InformationTypeController extends BaseController {

    private String PREFIX = "/information/informationType/";

    /**
     * 跳转到信息类型管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "informationType.html";
    }

    /**
     * 跳转到添加信息类型管理
     */
    @RequestMapping("/informationType_add")
    public String informationTypeAdd() {
        return PREFIX + "informationType_add.html";
    }

    /**
     * 跳转到修改信息类型管理
     */
    @RequestMapping("/informationType_update/{informationTypeId}")
    public String informationTypeUpdate(@PathVariable Integer informationTypeId, Model model) {
        return PREFIX + "informationType_edit.html";
    }

    /**
     * 获取信息类型管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增信息类型管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除信息类型管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改信息类型管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 信息类型管理详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
